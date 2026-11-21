# SAMURAI TALENT — Learning & Career OS

Built strictly adhering to the **SAMURAI TALENT Design System specification** and the provided visual designs.

---

## 🎨 Design System Implementation Summary

### 1. Color Palette & Tokens
- **Brand Blue (Pulse Blue):** `#304FE8` (Hover: `#2640C2`)
- **Night Navy:** `#0B122F`
- **Muted Gray:** `#5A6180`
- **Line / Border:** `#E2E4EE`
- **Surface (Mist):** `#F4F7FE`
- **Pastel Tints (One per card):**
  - Lavender: `#D9E2FF`
  - Mint: `#E6F7ED`
  - Peach: `#FFE6D7`
  - Cream: `#FFF1D2`
- **Accents:**
  - Green: `#17A34A`
  - Orange: `#FA7317`
  - Amber: `#F69D0B`

### 2. Typography Hierarchy (Plus Jakarta Sans)
- **Display:** 64px / 1.05 · 700 · -0.03em (Hero)
- **Heading 2:** 40px / 1.15 · 700 · -0.025em (Section Titles, with key phrase highlighted in Pulse blue)
- **Heading 3:** 24px / 1.3 · 600 (Card & Panel titles)
- **Body:** 16px / 1.6 · 400 (Max 60–70 characters per line)
- **Small / Muted:** 14px / 1.5 · 400–500 (`#5A6180`)
- **Eyebrow:** 12px · 600 · uppercase · +0.08em with a 24px blue bar
- **Buttons:** 14px · 600 · Pill-shaped (`999px`) · 44px minimum tap height

### 3. Layout & Section Rhythm
- **Hero Frame:** White page frame with 16px outer margin around the blue hero panel (`--r-xl: 28px`).
- **Floating Nav Pill:** Centered white pill inside the hero panel with subtle floating shadow (`0 12px 32px rgba(11, 18, 47, 0.08)`).
- **Rhythm:** Alternating sections between pure white (`#FFFFFF`) and Mist (`#F4F7FE`).
- **Section Headers:** Asymmetric layout with Eyebrow + Heading on the left and supporting copy + blue text link on the right.
- **Course Cards:** One pastel tint per card, tag top-left, title and meta bottom-left.
- **Sequence Steps:** Blue numbered circles (`1`, `2`, `3`, `4`) representing the four steps from sign-up to first job.
- **CTA & Footer:** Night navy (`#0B122F`) panels with 28px radius.

### 4. Interactive Auth & Modals (Matching Image 1)
- Click **"Log In"** or **"Sign Up"** in the navigation, hero, or CTA to open the exact split-screen view:
  - **Left Column:** SAMURAI TALENT header, "Welcome back!", credential inputs with password eye-toggle, "Remember me", "Forgot Password?", full-width Pulse blue submit button, Google Workspace single sign-on button, and mode switcher.
  - **Right Column:** Gradient blue backdrop, glowing star particles, curved dotted flight path, and floating interactive badges (`Applied Learning`, `Top 5% Talent Ready`, `From Courses to Contracts`, `Clean Code Portfolio`, `Direct Interview Fast-Track`).
- Click any course card to open the **Course Detail Modal** displaying full syllabus, capstone requirements, and enrollment options.

---

## 🚀 Running the Project

```bash
# Run local development server
npm run dev

# Or build for production
npm run build
```
