# NezFood — Frontend MVP

NezFood is a modern, high-performance, and visually gorgeous web application for a tech-forward restaurant and smart food delivery ecosystem. Built with a responsive, high-fidelity dark-themed user interface, NezFood features real-time interactive cart calculations, food category filtering, smooth animated transitions, and a custom high-fidelity recreation of the original **NezFood** house-shield navy/cyan logo.

This repository represents the completed **Frontend MVP** phase, optimized for lightning-fast performance, static asset reliability, and clean code hygiene.

---

## 🚀 Techtack & Framework Setup

- **Framework**: [Vite](https://vitejs.dev/) + [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type safety, explicit layout interfaces)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Direct utility-driven dark styling, responsive layouts)
- **Animations**: [Motion](https://motion.dev/) (Staggered entering transitions, micro-interactions, modal fly-outs)
- **Icons**: [Lucide React](https://lucide.dev/) (Unified modern vector icon set)

---

## 📂 Project Directory Structure

Below is the complete file structure of the NezFood frontend project:

```text
nezfood-frontend/
├── index.html                 # Main SPA entry point
├── package.json               # Node.js project manifest & script commands
├── tsconfig.json              # TypeScript compilation specifications
├── vite.config.ts             # Vite configuration with Tailwind v4 integrations
├── .gitignore                 # Standard file exclusions for git repositories
├── .env.example               # Example variables template (keys, client endpoints)
├── README.md                  # This file
└── src/
    ├── main.tsx               # Primary mounting script
    ├── App.tsx                # Core router-state coordinator & layout housing
    ├── types.ts               # Shared interfaces (MenuItem, CartItem, Testimonial, etc.)
    ├── index.css              # Global styles, fonts import, and Tailwind v4 theme configuration
    ├── data/                  # Hardcoded, high-fidelity static datasets
    │   ├── faqs.ts            # FAQ accordion data (delivery, payment, organic prep)
    │   ├── menuItems.ts       # Accurate culinary menus (exact covers, tags, ingredients, prep times)
    │   ├── offers.ts          # Featured coupon/discount promotional cards
    │   └── testimonials.ts    # Customer feedback, ratings, and avatar links
    ├── pages/                 # Full screen layouts
    │   ├── Home.tsx           # Launch page (Hero, active features, testimonials preview, quick map)
    │   ├── Menu.tsx           # Live Menu (Category tabs, live searches, allergen tags, add-to-cart clicks)
    │   ├── Offers.tsx         # Active promotions, limited coupons with copyable voucher codes
    │   ├── About.tsx          # Our mission, heritage story, and culinary leadership profiles
    │   ├── Contact.tsx        # Geolocation, physical address, support forms, and phone links
    │   └── FAQ.tsx            # Full interactive FAQ hub with smooth search and tag filters
    └── components/            # Extracted UI components
        ├── Navbar.tsx         # Sticky navigation, logo wrapper, responsive drawer, cart badge
        ├── Hero.tsx           # Immersive landing unit, quick actions, featured highlight slot
        ├── Features.tsx       # Value propositions (Eco packaging, rapid dispatch, chef-crafted)
        ├── FeaturedOffers.tsx # Rotating slider / list of dynamic promotional vouchers
        ├── HowItWorks.tsx     # Step-by-step interactive workflow guides
        ├── Testimonials.tsx   # Elegant grid of authenticated user responses
        ├── FAQPreview.tsx     # Snappy accordion preview for common questions
        ├── LocationPreview.tsx# Mini interactive contact cards, hours, embed links
        ├── NezFoodLogo.tsx    # Complete custom recreation of the original house-shield logo SVG
        ├── MenuCard.tsx       # Individual menu units with cover photo (object-cover), ratings, ingredients
        ├── CartDrawer.tsx     # Animated slide-over slide-in drawer with real-time tax/total calculators
        └── Footer.tsx         # Clean footer with quick links, social matrices, copyright blocks
```

---

## 💻 Local Workspace Initialization (Ubuntu / macOS / Windows)

Follow these instructions to run the **NezFood** project locally on your machine.

### Prerequisites
Make sure you have **Node.js** (v18.x or greater recommended) and **npm** installed:
```bash
# Check Node.js version
node -v

# Check npm version
npm -v
```

### 1. Project Directory Transfer
Create a new directory on your machine, enter it, and copy your project files inside:
```bash
mkdir nezfood-frontend
cd nezfood-frontend
```

### 2. Install Project Dependencies
Run `npm install` inside the folder to install Vite, React, Tailwind, and Motion:
```bash
npm install
```

### 3. Start the Local Development Server
Launch the development server in watch mode:
```bash
npm run dev
```
The application will boot up and run on [http://localhost:3000](http://localhost:3000) (unless port 3000 is occupied, in which case it will fallback to the next available port).

### 4. Code Compliance Audit
To run static type checking, verify compilation safety, and confirm code cleanliness:
```bash
npm run lint
```

### 5. Production Application Compilation
To compile the application into super-optimized, static assets prepared for delivery or static hosting (served from the `dist/` directory):
```bash
npm run build
```

---

## 🐙 Publishing Code to GitHub

Follow these quick commands to create a repository and publish your first commits:

```bash
# Initialize git in inside your project folder
git init

# Add all project source files (excluding hidden files via your gitignore)
git add .

# Pin down your initial commit
git commit -m "feat: complete high-fidelity NezFood frontend MVP"

# Set default master branch to main
git branch -M main

# Link your local working tree with your GitHub repository resource
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/nezfood-frontend.git

# Push changes securely up to your Github account
git push -u origin main
```

---

## 🔮 Next Roadmap Milestones

Now that your **Frontend MVP** is fully stable, tested, and optimized, the next development phase may include:
1. **Dynamic Backend Services**: Writing an Express API backend (using typescript and tsx) to process real order requests.
2. **Persistent Databases**: Integrating Firebase Firestore, MongoDB, or PostgreSQL to manage menus, save user accounts, and record historic sales.
3. **Payment Gateways**: Connecting Stripe, Paystack, or Flutterwave checkouts safely via backend route proxies.
4. **Smart Automation Tools**: Triggering Gemini AI APIs to suggest custom menu choices or synthesize personalized food recommendations based on historical customer baskets.
