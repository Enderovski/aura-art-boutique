# 🎨 Aura Art Boutique 

Let's be honest: most modern digital storefronts and art galleries online are completely soul-draining. They look like Excel spreadsheets with images pasted inside white squares. I built **Aura Art Boutique** because I believe buying or viewing art on the web should feel as immersive as walking through an actual physical gallery in SoHo.

When I started this project, the core problem I wanted to solve was **image fidelity versus loading speed**. High-resolution art assets usually destroy Lighthouse scores. This repository is my solution to that.

### How I Approached the Build

I deliberately avoided heavy SSR frameworks for this specific piece because I wanted to see how far I could push client-side rendering with **Vite** and **React 18**. 
- **The Layout Engine:** CSS Grid is the true hero here. I mapped out abstract, masonry-style grids using raw Tailwind utility classes so that landscape and portrait paintings can sit next to each other organically without breaking the layout or requiring messy JavaScript absolute positioning calculations.
- **Micro-Interactions:** When you hover over a piece, it shouldn't just "go dark". The subtle scale changes and shadow drops are orchestrated with `framer-motion` to make the UI feel weighty and premium.
- **Component Isolation:** The checkout cart and gallery views are entirely decoupled. 

### Why not just use Shopify or WordPress?
Because as developers, relying on drag-and-drop builders for core frontend experiences makes us lazy. This project was my way of keeping my React and Tailwind fundamentals razor sharp while building something genuinely beautiful.

If you want to clone it and see how the grids work:
```bash
git clone https://github.com/Enderovski/aura-art-boutique.git
npm install
npm run dev
```

Hit me up if you have questions about the CSS Grid implementations here.
*— Ender*
