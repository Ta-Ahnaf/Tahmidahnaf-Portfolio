(() => {
  'use strict';

  const root = document.documentElement;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const precisePointer = matchMedia('(pointer: fine)').matches;

  const loader = document.querySelector('#loader');
  const loaderCanvas = document.querySelector('#loaderCanvas');
  const loaderMeter = document.querySelector('#loaderMeter');
  const loaderCount = document.querySelector('#loaderCount');
  const loaderStatus = document.querySelector('#loaderStatus');
  const loaderSkip = document.querySelector('#loaderSkip');
  const statuses = ['Sharpening graphite', 'Finding the signal', 'Training the eye', 'Making the first mark'];
  const toRoman = value => {
    const numerals = [
      [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];
    let remaining = Math.max(1, Math.min(100, Math.round(value)));
    let roman = '';
    numerals.forEach(([number, glyph]) => {
      while (remaining >= number) {
        roman += glyph;
        remaining -= number;
      }
    });
    return roman;
  };
  let loaderDone = false;

  function finishLoader() {
    if (loaderDone || !loader) return;
    loaderDone = true;
    loader.classList.add('is-done');
    root.classList.add('intro-complete');
    setTimeout(() => loader.remove(), 1100);
  }

  if (loader) {
    const ctx = loaderCanvas.getContext('2d');
    let width = 0;
    let height = 0;
    let start = performance.now();
    let introSeen = false;
    try { introSeen = sessionStorage.getItem('tahmid-intro') === 'seen'; } catch (_) { introSeen = false; }
    const duration = reduceMotion ? 650 : (introSeen ? 900 : 3400);
    const marks = Array.from({ length: 46 }, (_, index) => ({
      x: ((index * 43) % 101) / 100,
      y: ((index * 71) % 97) / 100,
      angle: ((index * 29) % 360) * Math.PI / 180,
      length: 30 + (index % 9) * 17,
      color: index % 7 === 0 ? '#686762' : index % 11 === 0 ? '#aaa69d' : '#08090b'
    }));

    const sizeLoader = () => {
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      width = innerWidth;
      height = innerHeight;
      loaderCanvas.width = Math.round(width * dpr);
      loaderCanvas.height = Math.round(height * dpr);
      loaderCanvas.style.width = `${width}px`;
      loaderCanvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawLoader = now => {
      const progress = Math.min(1, (now - start) / duration);
      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = 'round';
      marks.slice(0, Math.floor(progress * marks.length)).forEach((mark, index) => {
        const x = mark.x * width;
        const y = mark.y * height;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.quadraticCurveTo(
          x + Math.cos(mark.angle + .7) * mark.length * .55,
          y + Math.sin(mark.angle + .7) * mark.length * .55,
          x + Math.cos(mark.angle) * mark.length,
          y + Math.sin(mark.angle) * mark.length
        );
        ctx.strokeStyle = mark.color;
        ctx.globalAlpha = .08 + (index % 5) * .04;
        ctx.lineWidth = index % 8 === 0 ? 5 : 1.1;
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
      const amount = Math.round(progress * 100);
      loaderMeter.style.width = `${amount}%`;
      loaderCount.textContent = toRoman(amount);
      loaderStatus.textContent = statuses[Math.min(3, Math.floor(progress * 4))];
      if (progress < 1) requestAnimationFrame(drawLoader);
      else {
        try { sessionStorage.setItem('tahmid-intro', 'seen'); } catch (_) { /* static/private browsing fallback */ }
        finishLoader();
      }
    };

    sizeLoader();
    addEventListener('resize', sizeLoader, { passive: true });
    loaderSkip.addEventListener('click', finishLoader);
    requestAnimationFrame(drawLoader);
  }

  const menuToggle = document.querySelector('#menuToggle');
  const menuPanel = document.querySelector('#menuPanel');
  if (menuToggle && menuPanel) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(open));
      menuPanel.setAttribute('aria-hidden', String(!open));
      menuPanel.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuPanel.classList.contains('is-open')) menuToggle.click();
    });
  }

  document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = new URL(link.href, location.href);
      if (target.origin !== location.origin || target.pathname === location.pathname) return;
      event.preventDefault();
      document.querySelector('.route-wipe')?.classList.add('is-active');
      setTimeout(() => location.href = link.href, reduceMotion ? 0 : 520);
    });
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .16, rootMargin: '0px 0px -7% 0px' });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add('is-in'));

  const dedication = document.querySelector('#dedication');
  document.querySelectorAll('[data-dedication]').forEach(button => {
    button.addEventListener('click', () => {
      if (typeof dedication?.showModal === 'function') dedication.showModal();
      else dedication?.setAttribute('open', '');
    });
  });
  document.querySelector('[data-close-dedication]')?.addEventListener('click', () => dedication?.close());
  dedication?.addEventListener('click', event => {
    if (event.target === dedication) dedication.close();
  });

  const notesGrid = document.querySelector('#notesGrid');
  document.querySelector('#shuffleNotes')?.addEventListener('click', () => {
    const notes = [...notesGrid.children];
    notesGrid.classList.add('is-shuffling');
    notes.sort(() => Math.random() - .5);
    setTimeout(() => {
      notes.forEach((note, index) => {
        note.style.setProperty('--note-r', `${-2.5 + Math.random() * 5}deg`);
        note.style.order = String(index);
        notesGrid.append(note);
      });
      notesGrid.classList.remove('is-shuffling');
    }, reduceMotion ? 0 : 230);
  });

  let lastScrollY = scrollY;
  let scrollTick = false;
  const siteNav = document.querySelector('#siteNav');
  const updateScroll = () => {
    scrollTick = false;
    const current = scrollY;
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    root.style.setProperty('--scroll-progress', current / max);
    root.style.setProperty('--scroll-velocity', Math.max(-1, Math.min(1, (current - lastScrollY) / 80)));
    if (siteNav && !menuPanel?.classList.contains('is-open')) {
      siteNav.style.transform = current > lastScrollY && current > 180 ? 'translateY(-120%)' : 'translateY(0)';
    }
    lastScrollY = current;
  };
  addEventListener('scroll', () => {
    if (!scrollTick) {
      scrollTick = true;
      requestAnimationFrame(updateScroll);
    }
  }, { passive: true });
  updateScroll();

  document.querySelectorAll('[data-scramble]').forEach(element => {
    const finalText = element.dataset.scramble;
    const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#*';
    let frame = 0;
    const scramble = () => {
      frame += 1;
      element.textContent = [...finalText].map((letter, index) => index < frame / 2 ? letter : glyphs[Math.floor(Math.random() * glyphs.length)]).join('');
      if (frame < finalText.length * 2) requestAnimationFrame(scramble);
      else element.textContent = finalText;
    };
    element.addEventListener('pointerenter', () => { frame = 0; scramble(); });
  });

  const codeSketch = document.querySelector('.code-sketch');
  if (codeSketch) {
    const codeWindow = codeSketch.querySelector('[data-code-window]');
    const codeOutput = codeSketch.querySelector('[data-code-output]');
    const scenes = [
      {
        code: 'const idea = "messy";\nconst page = sketch(idea);\nship(page);',
        output: '✓ idea compiled with personality'
      },
      {
        code: 'while (curious) {\n  learn();\n  makeSomething();\n}',
        output: '✓ curiosity loop still running'
      },
      {
        code: 'if (bug) {\n  coffee++;\n  tryAgain();\n}',
        output: '✓ bug negotiated successfully'
      }
    ];
    let sceneIndex = 0;

    const typeScene = () => {
      const scene = scenes[sceneIndex];
      let character = 0;
      codeWindow.textContent = '';
      codeOutput.textContent = scene.output;
      codeOutput.classList.remove('is-visible');

      const typeNext = () => {
        character += 1;
        codeWindow.textContent = scene.code.slice(0, character);
        if (character < scene.code.length) {
          setTimeout(typeNext, scene.code[character - 1] === '\n' ? 180 : 36);
        } else {
          codeOutput.classList.add('is-visible');
          setTimeout(() => {
            codeSketch.classList.add('is-refreshing');
            setTimeout(() => {
              codeSketch.classList.remove('is-refreshing');
              sceneIndex = (sceneIndex + 1) % scenes.length;
              typeScene();
            }, 280);
          }, 2450);
        }
      };

      if (reduceMotion) {
        codeWindow.textContent = scenes[0].code;
        codeOutput.textContent = scenes[0].output;
        codeOutput.classList.add('is-visible');
      } else typeNext();
    };
    typeScene();
  }

  const skillBoard = document.querySelector('[data-skill-board]');
  if (skillBoard) {
    const skills = skillBoard.dataset.skills.split('|').filter(Boolean);
    const display = skillBoard.querySelector('[data-skill-display]');
    const count = skillBoard.querySelector('[data-skill-count]');
    const glyphs = '░▒▓/#*+?';
    let skillIndex = 0;

    const decodeWord = (element, word, done) => {
      let tick = 0;
      element.classList.add('is-decoding');
      const timer = setInterval(() => {
        tick += 1;
        element.textContent = [...word].map((letter, index) => {
          if (letter === '-' || index < tick / 2) return letter;
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        }).join('');
        if (tick >= Math.max(7, word.length * 2)) {
          clearInterval(timer);
          element.textContent = word;
          element.classList.remove('is-decoding');
          element.classList.add('is-ready');
          done();
        }
      }, 54);
    };

    const showSkill = () => {
      const phrase = skills[skillIndex];
      const words = phrase.toUpperCase().split(' ');
      display.replaceChildren(...words.map(word => {
        const span = document.createElement('span');
        span.style.setProperty('--word-width', `${word.length}ch`);
        span.textContent = ''.padEnd(word.length, '░');
        return span;
      }));
      count.textContent = `${String(skillIndex + 1).padStart(2, '0')} / ${String(skills.length).padStart(2, '0')}`;

      let wordIndex = 0;
      const revealNext = () => {
        if (wordIndex >= words.length) {
          setTimeout(() => {
            skillBoard.classList.add('is-switching');
            setTimeout(() => {
              skillBoard.classList.remove('is-switching');
              skillIndex = (skillIndex + 1) % skills.length;
              showSkill();
            }, 260);
          }, 2850);
          return;
        }
        const current = display.children[wordIndex];
        decodeWord(current, words[wordIndex], () => {
          wordIndex += 1;
          setTimeout(revealNext, 170);
        });
      };

      if (reduceMotion) {
        display.textContent = skills.map(skill => skill.toUpperCase()).join(' · ');
        count.textContent = '04 / 04';
      } else revealNext();
    };
    showSkill();
  }

  if (!reduceMotion && precisePointer) {
    document.querySelectorAll('.magnetic').forEach(element => {
      element.addEventListener('pointermove', event => {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        element.style.transform = `translate3d(${x * .06}px, ${y * .06}px, 0)`;
      });
      element.addEventListener('pointerleave', () => { element.style.transform = ''; });
    });

    document.querySelectorAll('.case-visual, .hobby-cards article, .range-grid article').forEach(element => {
      element.addEventListener('pointermove', event => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        element.style.setProperty('--tilt-x', `${y * -1.4}deg`);
        element.style.setProperty('--tilt-y', `${x * 1.4}deg`);
      });
      element.addEventListener('pointerleave', () => {
        element.style.removeProperty('--tilt-x');
        element.style.removeProperty('--tilt-y');
      });
    });

    addEventListener('pointermove', event => {
      const nx = event.clientX / innerWidth - .5;
      const ny = event.clientY / innerHeight - .5;
      document.querySelectorAll('[data-depth]').forEach(layer => {
        const depth = Number(layer.dataset.depth || 1);
        layer.style.transform = `translate3d(${nx * 9 * depth}px, ${ny * 7 * depth}px, 0)`;
      });
    }, { passive: true });
  }
})();
