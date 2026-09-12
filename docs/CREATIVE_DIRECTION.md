# Creative Direction Research: Tahmid Ahnaf Portfolio

## Objective

The portfolio has to sell a premium creative-development service before a visitor reads a résumé line. The target response is not simply “this looks polished,” but “the person who made this understands art direction, interaction, code, narrative, and restraint well enough to make complexity feel intentional.” The site therefore needs one memorable world, multiple ways into the content, and enough evidence to make the spectacle commercially credible.

The research focused on portfolios where the interface itself functions as proof of ability, especially work recognized for interaction, motion, art direction, and developer craft. It also considered the failure mode common to experimental portfolios: spectacle that makes the work hard to reach.

## Patterns from the reference set

### 1. A portfolio becomes memorable when it has an interaction metaphor

Bruno Simon turned navigation into a drivable 3D world and openly frames the portfolio as a place to explore, not a conventional page. He also explains that the experience is rendered with Three.js and makes its technical construction part of the story ([Bruno Simon](https://bruno-simon.com/)). The transferable idea is not “add a 3D car.” It is to give the whole experience a single physical logic and let users discover information through it.

Robby Leonardi used a side-scrolling game as the résumé structure. Awwwards’ record describes the experience as a colorful world and scores it especially highly for creativity, while still weighting design and usability more heavily in the overall evaluation ([Awwwards: Robby Leonardi](https://www.awwwards.com/web-design-awards/robby-leonardi)). The useful lesson is that a strong conceit can carry ordinary résumé content, but orientation and readable controls must remain obvious.

**Direction for Tahmid:** use a “living sketchbook / creative laboratory” rather than an unrelated game. Drawing is biographical, connects the portrait and family dedication, and naturally joins experimentation with disciplined construction. The interface should behave like an artwork being drafted, annotated, cut apart, and recomposed.

### 2. Material identity is stronger than generic futurism

Niccolò Miranda’s Paper Portfolio uses one recognizable printed-object identity across its intro, newspaper typography, illustration, and horizontal navigation. Awwwards’ published case-study summary notes that the analog newspaper concept is visible throughout the experience, including an intro reminiscent of a newspaper being thrown in front of the viewer ([Awwwards Hot Right Now, 2023](https://assets.awwwards.com/awards/gallery/2023/07/HOT-RIGHT-NOW-BOOK-2023.pdf)). The live portfolio combines editorial density, expressive type, sideways exploration, and clear interaction tips ([Niccolò Miranda](https://www.niccolomiranda.com/)).

Dennis Snellenberg’s portfolio uses comparatively restrained copy, then makes interaction and transitions carry the premium feel. His own positioning—design, code, and interaction as one practice—demonstrates why hover and motion should reinforce a service proposition instead of sitting beside it as decoration ([Dennis Snellenberg](https://dennissnellenberg.com/)).

**Direction for Tahmid:** avoid the familiar anonymous WebGL/black-chrome aesthetic. Use graphite, paper fiber, registration marks, eraser smudges, and layered pencil values. The analogue material should feel scanned and tactile; the digital layer should feel precise and quietly technical.

### 3. Typography can be the main animation system

Aristide Benoist describes his specialization as motion and interaction, and his folio uses oversized, deconstructed letterforms as navigable objects rather than headings placed above content ([Aristide Benoist](https://aristidebenoist.com/folio-v1)). Niccolò Miranda similarly treats typography as the visual world itself, not a label added to images.

**Direction for Tahmid:** build scale changes, outline-to-fill transitions, masked word reveals, rotating marginal notes, and moving type rails into every route. Avoid animating every sentence. Large type should move with force; body copy should settle quickly and remain readable.

### 4. Dense interfaces need rhythm and recovery points

Martin Laxenaire’s Studio Tumulte case study combines WebGL enhancement, custom cursors, scroll motion, and kinetic typography, while explicitly retaining attention to accessibility, performance, and motion preferences ([Studio Tumulte case study](https://www.martin-laxenaire.fr/portfolio-2021/studio-tumulte)). Awwwards’ mobile evaluation guidance likewise emphasizes legibility, tap-target sizing, viewport fit, compressed imagery, passive listeners, manageable DOM size, and fast meaningful rendering ([Awwwards Mobile Excellence Guidelines](https://www.awwwards.com/mobile-excellence-guidelines.pdf)).

**Direction for Tahmid:** alternate expressive scenes with quiet editorial zones. Persistent navigation, page labels, visible project numbers, progress indication, a “skip intro” control, and reduced-motion behavior give the visitor a way to recover. On mobile, the composition remains dense but becomes linear, and large horizontal experiments become swipe-safe or stacked.

### 5. The strongest technical flex is connected to content

Bruno Simon’s 3D space proves the exact creative-development skill he sells. Dennis Snellenberg’s transitions and hover systems support his claim that interaction is central to his practice. Niccolò Miranda’s typography and paper behavior make his art direction tangible. These portfolios do not merely list a stack and then show unrelated effects.

**Direction for Tahmid:** technical work should be experienced through content-specific interactions:

- Machine-learning projects become “case files” with model pipelines, data labels, outcomes, and deliberate visual systems.
- The portrait sits inside a compact graphite composition with hand-drawn framing, expressing the bridge between art and technology without distorting the photograph.
- Skills move as a live instrument panel grouped by Python/data, machine learning, NLP/modeling, build/deploy, web/AI, and creative practice.
- Achievements appear as an archival memory wall with only the full collection photograph held quietly in the background.
- Personal writing becomes a rearrangeable notebook rather than a standard blog list.

## Content findings from supplied sources

The new résumé establishes the current professional identity as “Creative Technologist” with focus across AI, Python, machine learning, and web experience design. It records an HR Assistant role at **Renault PropTech LTD**, March 2024 to March 2026; a Diploma in Engineering in Computer Technology from Munshiganj Polytechnic Institute, 2019–2024; SSC in Science, 2017–2019; IELTS Academic 7.0 / CEFR C1; and Bengali native / English fluent. It also adds Credit Score ML and Movie Recommender as featured builds. Academic grade points are intentionally omitted from the public website. Source: `Tahmid_Ahnaf_Premium_Interactive_CV.pdf`, pages 1–2, supplied file.

The original site provides longer-form personal material worth preserving: Tahmid’s reflective profile, early interest in questions and AI, debate beginning at 12, acting beginning at 10, story-driven games, humorous video editing, and five short essays. It also contains detailed context for The Mind Detective and the Pima Diabetes App. Source: original `portfolio/index.html`, supplied folder.

The trophy collection visibly supports a history across child-parliament, solo acting/performance, theatre, academic/cultural programs, and youth leadership. The most specific safe wording comes from the existing site and new résumé: Member of Parliament in the Fulkuri Model Child Parliament (2014), First Prize in solo acting/performance in the Shapla Group, Best Actor recognition in theatre, and team/leadership recognition in youth programs. Unclear medal text should not be embellished. Source: the supplied full collection photograph, `Allawards.jpeg`.

## Chosen experience: “RAW SIGNAL”

The title describes a mind that begins with hand-drawn thought and turns it into technical output. The site is structured as four connected rooms:

1. **Index / The Entrance** — a cinematic manifesto and portrait composition. Visitors can enter work, story, or notebook rather than being forced through one long chronology.
2. **Work / The Lab** — project cases for The Mind Detective, Credit Score ML, Movie Recommender, Pima Diabetes App, and smaller experiments. Technical evidence is paired with expressive interaction.
3. **Story / The Archive** — résumé, experience, education, grouped skills, creative range, and a tasteful achievements wall using only the supplied full collection photograph.
4. **Notebook / The Human Layer** — the five preserved essays plus hobbies and personality, composed as movable-looking paper fragments.

The first-load sequence draws abstract charcoal and graphite lines onto a blank field, stamps in the words **DRAW / THINK / BUILD**, and then tears the “paper” open to reveal the first page. Subsequent internal navigation uses a short ink-wipe transition so the first loader remains a special event instead of a repeated delay.

## Visual and interaction system

- **Palette:** near-black graphite, bone paper, warm grey, and soft metallic pencil values—strictly monochrome.
- **Type:** system sans for large compressed impact, Georgia/Times for human editorial contrast, and monospace for technical annotations. The site remains self-contained and does not depend on hosted fonts.
- **Depth:** fixed grain, soft perspective transforms, offset borders, layered masks, and controlled blend modes.
- **Cursor:** the browser’s native pointer is preserved. There is no custom marker or drawing trail.
- **Motion:** scroll-revealed masking, velocity-based marquee movement, pointer-responsive depth, magnetic buttons, project-image parallax, route wipes, and a continuously reactive canvas field. Motion is disabled or reduced when requested by the operating system.
- **Navigation:** a compact fixed index with clear page names and a full-screen menu. Every page exposes the same routes, résumé download, and contact action.

## Guardrails

Expressive energy is concentrated in the loader, fixed glitching skill board, framing, and a few display moments; the finished experience stays professional and measured. Body copy remains high contrast with sensible line length. Interactive elements retain visible keyboard focus. The loader is skippable, internal navigation never becomes a puzzle, and all key content exists as semantic HTML. The single full-collection trophy image loads lazily. Loader-canvas resolution is capped. The website remains functional when opened as static files and needs no build step or external dependency.

## Sources

1. Bruno Simon. “[Bruno’s Portfolio](https://bruno-simon.com/).” Accessed September 11, 2026.
2. Dennis Snellenberg. “[Freelance Designer & Developer](https://dennissnellenberg.com/).” Accessed September 11, 2026.
3. Aristide Benoist. “[Folio v1](https://aristidebenoist.com/folio-v1).” Accessed September 11, 2026.
4. Niccolò Miranda. “[Miranda — Paper Portfolio](https://www.niccolomiranda.com/).” Accessed September 11, 2026.
5. Awwwards. “[Hot Right Now Book 2023](https://assets.awwwards.com/awards/gallery/2023/07/HOT-RIGHT-NOW-BOOK-2023.pdf).” 2023.
6. Awwwards. “[Robby Leonardi — Site of the Day](https://www.awwwards.com/web-design-awards/robby-leonardi).” November 29, 2013.
7. Martin Laxenaire. “[Studio Tumulte website case study](https://www.martin-laxenaire.fr/portfolio-2021/studio-tumulte).” Accessed September 11, 2026.
8. Awwwards. “[Mobile Excellence Guidelines](https://www.awwwards.com/mobile-excellence-guidelines.pdf).” Accessed September 11, 2026.
9. MD Tahmid Ahnaf. `Tahmid_Ahnaf_Premium_Interactive_CV.pdf`, supplied file, pages 1–2.
10. MD Tahmid Ahnaf. Original portfolio source and supplied achievement photographs, supplied files.
