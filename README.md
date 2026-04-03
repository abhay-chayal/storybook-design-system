# Component Design System

A beautifully crafted, production-grade Component Design System built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, and **Storybook 8**.

## Live AT:
https://storybook-design-system.vercel.app/?path=/docs/design-system-button--docs


## 🚀 Key Features

- **Isolated Component Sandbox**: Build, test, and view UI components outside the main application using Storybook.
- **Accessible & Responsive UI**: Three highly polished foundational components (`Button`, `Input`, and `ProductCard`).
- **Dark & Light Mode Integration**: Fluid UI changes supporting both system preferences and a Storybook global background toggle.
- **Micro-Animations**: Hover states, loading spinners, and image zoom functionalities out of the box.
- **Static Export Ready**: Completely prepared for deployment to static hosting platforms like Vercel or GitHub Pages.

---

## 💻 Getting Started

### 1. Install Dependencies
Ensure you have Node.js installed, then run:
```bash
npm install
```

### 2. Start the Sandbox (Storybook)
Launch the interactive Storybook dashboard to view individual component states and configurations.
```bash
npm run storybook
```
*Navigates automatically to `http://localhost:6006`.*

### 3. Start the Next.js Application
See the complete Design System showcased on a unified landing page.
```bash
npm run dev
```
*Navigates to `http://localhost:3000`.*

---

## 🧱 Project Structure

- `/components/ui/` - Home to your reusable building blocks (`Button.jsx`, `Input.jsx`, `ProductCard.jsx`).
- `/stories/` - Home to the Storybook configurators that detail every variation of a component.
- `/app/` - The Next.js 16 App Router containing the global CSS and showcase page.

---

## 🛠️ Production Builds

**For the Next.js App:**
```bash
npm run build
```
*(Configured to export static HTML via `next.config.mjs`)*

**For Storybook:**
```bash
npm run build-storybook
```
*(Outputs the static sandbox to the `storybook-static` directory)*
