(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Nav ---------- */
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  let lastY = window.scrollY;
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      nav.style.transform = y > lastY && y > 120 ? "translateY(-110%)" : "translateY(0)";
      lastY = y;
    },
    { passive: true }
  );

  /* ---------- Scroll cue ---------- */
  const scrollCue = document.getElementById("scrollCue");
  if (scrollCue) {
    scrollCue.addEventListener("click", () => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal, .skill");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Subtle 2.5D parallax (hero only, vanilla, rAF-throttled) ---------- */
  if (!reduceMotion) {
    const layers = document.querySelectorAll("[data-speed]");
    const hero = document.querySelector(".hero");
    let ticking = false;

    function applyParallax() {
      ticking = false;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      // only run while hero is anywhere near the viewport
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const offset = -rect.top; // how far we've scrolled into the hero
      layers.forEach((el) => {
        const speed = parseFloat(el.dataset.speed) || 0;
        el.style.transform = `translate3d(0, ${offset * speed}px, 0)`;
      });
    }

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(applyParallax);
          ticking = true;
        }
      },
      { passive: true }
    );

    // gentle pointer-driven drift on the portrait for a touch of depth on desktop
    const portrait = document.querySelector(".hero-portrait");
    if (portrait && window.matchMedia("(hover: hover)").matches) {
      window.addEventListener(
        "pointermove",
        (e) => {
          const x = (e.clientX / window.innerWidth - 0.5) * 10;
          const y = (e.clientY / window.innerHeight - 0.5) * 8;
          portrait.style.setProperty("--px", `${x}px`);
          portrait.style.setProperty("--py", `${y}px`);
          portrait.style.transform = `translate3d(var(--px), var(--py), 0)`;
        },
        { passive: true }
      );
    }

    applyParallax();
  }
})();
