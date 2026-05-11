# TODO - Cyberpunk Premium Portfolio Build

## Plan Confirmation
- [x] Gather repo context (existing App.jsx markup, CSS, installed deps).
- [x] Confirm approach: refactor into animated cyberpunk portfolio with React + Framer Motion.

## Implementation Steps
- [x] Step 1: Add/adjust global styles (cinematic background, gradients, glassmorphism, reusable card/button styles).

- [x] Step 2: Implement `CyberBackground` (grid overlay + neon blobs/particles + optional mouse glow).

- [ ] Step 3: Implement `useTypewriter` for hero subtitle.
- [ ] Step 4: Implement scroll reveal animations via Framer Motion (fade-up/scale on view).
- [ ] Step 5: Create components for: Navbar, Hero, About, Skills, Projects, Experience, Education, Certifications, Beyond Code, Contact, Footer.
- [ ] Step 6: Replace the current monolithic `src/App.jsx` with section components wired together.
- [ ] Step 7: Update `tailwind.config.js` content globs (optional) or keep CSS-first; ensure build still passes.
- [ ] Step 8: Ensure all required sections/content match the prompt (buttons, projects, timeline items, education badges, certifications, beyond code, contact cards + form).
- [ ] Step 9: Run `npm run dev` and do smoke testing (responsive + animations + no console errors).
- [ ] Step 10: Optional polish: button glow pulse, nav hover glow, particle performance tweaks.

