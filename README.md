# 🎮 Lugx Gaming — React Gaming Shop
 
A responsive, multi-page gaming shop front-end built with **React 18** and **Vite**. It is a React re-implementation of the free [TemplateMo "Lugx Gaming"](https://templatemo.com/) HTML template, rebuilt from scratch as reusable components with real state, filtering, search, and pagination.
 
> This project was built as a hands-on exercise to practice core React concepts (components, props, state, effects, controlled forms) on a realistic multi-page UI.
 
---
 
## ✨ Features
 
- **Four pages:** Home, Our Shop, Product Details, and Contact Us
- **Live search:** type in the home banner and see matching games in the shop
- **Category filtering:** Show All / Adventure / Strategy / Racing
- **Pagination:** shop results are split into pages of 8 games
- **Product details:** quantity selector, tabs (description / reviews), and an "Add to cart" confirmation message
- **Contact form:** controlled inputs with a success message on submit
- **Embedded map** on the contact page
- **Preloader**, sticky header on scroll, and mobile menu
- **Dynamic page titles** and scroll-to-top on every page change
- **Responsive layout** for desktop, tablet, and mobile
---
 
## 🛠️ Tech Stack
 
| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev/) | UI library |
| [Vite 5](https://vitejs.dev/) | Dev server and build tool |
| CSS3 | Custom styling (`src/styles.css`) |
| [Poppins](https://fonts.google.com/specimen/Poppins) | Google Font |
 
---
 
## 🚀 Getting Started
 
### Prerequisites
 
- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node.js)
### Installation
 
```bash
# 1. Clone the repository
git clone https://github.com/Mayada30/lugx-gaming-website.git
 
# 2. Go into the project folder
cd lugx-react
 
# 3. Install dependencies
npm install
 
# 4. Start the development server
npm run dev
```
 
Open **http://localhost:5173** in your browser.
 
### Available Scripts
 
| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
 
---
 
## 📁 Project Structure
 
```
lugx-react/
├── public/
│   └── images/              # All site images (logo, banners, game covers...)
├── src/
│   ├── components/
│   │   ├── CategoryCard.jsx
│   │   ├── Footer.jsx
│   │   ├── GameCard.jsx
│   │   ├── Header.jsx
│   │   ├── Icons.jsx
│   │   ├── MainButton.jsx
│   │   ├── PageHeading.jsx
│   │   ├── SectionHeading.jsx
│   │   └── TopGameCard.jsx
│   ├── data/
│   │   └── games.js         # All site data (games, categories, filters, nav)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetails.jsx
│   │   └── Contact.jsx
│   ├── App.jsx              # Root component: page navigation + shared state
│   ├── main.jsx             # App entry point
│   └── styles.css           # Global styles
├── index.html
├── package.json
└── vite.config.js
```
 
---
 
## 🧠 React Concepts Demonstrated
 
- **Components & props:** `Header`, `GameCard`, `TopGameCard`, `CategoryCard`, `SectionHeading`, `MainButton`
- **`children` prop:** `SectionHeading`, `MainButton`, `PageHeading`
- **Lists with `map` and `key`:** every grid and list is rendered from data in `src/data/games.js`
- **Event handling:** `onClick`, `onChange`, `onSubmit` with `preventDefault`
- **`useState`:** mobile menu, tabs, filters, pagination, quantity, forms, page navigation
- **Lifting state up:** `App` owns the current page, selected game, and search text
- **Controlled inputs:** search box, newsletter, quantity, contact form
- **`useEffect` with cleanup:** preloader timer, scroll listener, `document.title`
- **Conditional rendering:** old prices, search notes, tabs, success messages
- **Immutable state updates:** `setForm({ ...form, [name]: value })`
- **Derived state:** the filtered shop list is calculated from state, not stored in it
---
 
## 🖼️ Customizing Images
 
All images live in `public/images/`. To use your own, replace a file with one of the **same file name**:
 
| File | Where it appears |
|------|------------------|
| `logo.png` | Header logo |
| `banner-image.jpg` | Home hero (right side) |
| `banner-bg.jpg` | Blue home banner background |
| `featured-01.png` – `04.png` | Home feature cards |
| `trending-01.jpg` – `04.jpg` | Trending section and Shop cards |
| `top-game-01.jpg` – `06.jpg` | "Most Played" section |
| `categories-01.jpg` – `05.jpg` | Categories and Related Games |
| `single-game.jpg` | Product Details main image |
| `page-heading-bg.jpg` | Page headings and footer background |
| `caption-dec.png` | Red squiggle under "GAMING" |
| `cta-bg.jpg` | Call-to-action section |
| `map.jpg` | Contact map placeholder |
 
To change the games, prices, and categories, edit `src/data/games.js`.
 
---
 