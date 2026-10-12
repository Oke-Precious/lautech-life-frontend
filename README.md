# LAUTECH Life — Frontend (Phase 1A)

> **"Your Campus. Your Story. Your Life."**  
> A lightweight browser-based 3D university-life simulation inspired by student life around Ladoke Akintola University of Technology (LAUTECH) and Ogbomoso, Oyo State, Nigeria.

---

## 1. Project Overview

**LAUTECH Life** is an independent student simulation where players explore a fictionalized campus environment, balance academic attendance, rent hostel rooms, earn virtual naira through legitimate student hustles, and connect with peers.

This repository (`lautech-life-frontend`) contains the **frontend presentation layer**. It is decoupled from the backend service (`lautech-life-backend`), which manages authoritative economy logic, PostgreSQL database records, and Socket.IO multiplayer networking.

- **Current Status**: **Phase 1A: Project Setup & Architecture Landing Page**
- **Development Budget**: **₦0** (strict zero-cost constraint using free and open-source tooling)
- **Programming Language**: **JavaScript (ES Modules + JSX)** — No TypeScript

---

## 2. Technology Stack

- **Runtime & Bundler**: Node.js 22, [Vite 6](https://vitejs.dev/)
- **UI Framework**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **3D Graphics Engine (Future Phases)**: [Three.js](https://threejs.org/) & [React Three Fiber](https://r3f.docs.pmnd.rs/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database & Auth (Future Integration)**: [Supabase](https://supabase.com/) via backend
- **Backend Service (Separate Repo)**: Node.js, Express, Socket.IO (`lautech-life-backend`)

---

## 3. Prerequisites & Installation Requirements

Before running the project on your development machine (Windows, macOS, or Linux):

1. **Node.js**: Version 20 or 22 LTS ([Download Node.js](https://nodejs.org/))
2. **Package Manager**: `npm` (bundled automatically with Node.js)
3. **Code Editor**: Recommended [Visual Studio Code](https://code.visualstudio.com/)

Verify your Node and npm versions in PowerShell or Terminal:
```bash
node -v   # Should output v20.x or v22.x
npm -v    # Should output v10.x or higher
```

---

## 4. Project Folder Structure

```
lautech-life-frontend/
├── .env.example              # Public client environment variables template
├── .gitignore                # Git exclusions (node_modules, .env, dist)
├── AGENTS.md                 # Permanent Codex & developer guidelines
├── index.html                # HTML entry point with synchronized meta tags
├── package.json              # Project dependencies, scripts, and npm metadata
├── package-lock.json         # Exact dependency lockfile
├── PRODUCT_SPEC.md           # Master source of truth specification (v0.2)
├── README.md                 # Project documentation and beginner setup guide
├── vite.config.js            # Vite configuration with React & Tailwind plugins
└── src/
    ├── App.jsx               # LAUTECH Life Phase 1A landing page interface
    ├── index.css             # Global CSS and Tailwind layers
    ├── main.jsx              # React application root mounting point
    ├── assets/               # Future static image and audio assets
    ├── components/           # Reusable UI cards, headers, modals
    ├── controls/             # Input mappings (WASD keyboard, mobile joystick)
    ├── game/                 # Architectural specifications and 3D scene scaffolding
    │   ├── sceneArchitecture.js      # Planned 120x120m zone bounds and budgets
    │   ├── characterArchitecture.js  # Appearance presets and input matrices
    │   └── ThreeCanvasPreview.jsx    # Prepared R3F canvas preview
    ├── hooks/                # Custom React hooks
    ├── services/             # Planned API and Socket.IO client connections
    └── utils/                # Helper functions and formatting utilities
```

---

## 5. Getting Started (Step-by-Step)

### Step 1: Clone the repository
```bash
git clone https://github.com/Oke-Precious/lautech-life-frontend.git
cd lautech-life-frontend
```

### Step 2: Install dependencies using npm
```bash
npm install
```

### Step 3: Configure local environment variables
Copy `.env.example` to create `.env`:
```bash
# On Windows (PowerShell):
Copy-Item .env.example .env

# On macOS/Linux:
cp .env.example .env
```

The default values are configured for local development:
```dotenv
VITE_API_BASE_URL=http://localhost:4000
VITE_SOCKET_URL=http://localhost:4000
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
```

> **Security Note**: Never place database passwords, Supabase service-role keys, or private backend secrets in `.env`. Variables starting with `VITE_` are publicly accessible in the client browser.

### Step 4: Start the development server
```bash
npm run dev
```
Open your browser to [http://localhost:3000](http://localhost:3000).

### Step 5: Build for production
```bash
npm run build
```
This compiles optimized HTML, CSS, and JavaScript into the `dist/` directory.

### Step 6: Preview the production build locally
```bash
npm run preview
```

---

## 6. Testing on Mobile Devices

Because LAUTECH Life targets ordinary Android smartphones (3GB RAM baseline):

1. Ensure your phone and development computer are connected to the same Wi-Fi network.
2. In PowerShell, find your computer's local IP address using `ipconfig` (e.g., `192.168.1.50`).
3. Start Vite with host binding:
   ```bash
   npm run dev
   ```
4. On your mobile phone browser (Chrome / Firefox on Android), navigate to:
   ```
   http://192.168.1.50:3000
   ```
5. Test responsive touch navigation, typography readability, and load speed.

---

## 7. How Frontend & Backend Will Connect (Later Phases)

In future phases, the frontend and backend will communicate as follows:

1. **Authentication**: The frontend uses `@supabase/supabase-js` solely to exchange login credentials with Supabase Auth and acquire access tokens.
2. **Authoritative Gameplay API**: All wallet debits/credits, hostel leases, lecture attendance, and item purchases are sent as `fetch` requests with a Bearer JWT to the Express server at `http://localhost:4000/api/...`. The browser cannot mutate balances directly.
3. **Multiplayer Networking**: Low-latency player positions and room chat are streamed via a client-side Socket.IO connection at `http://localhost:4000`.

---

## 8. Current Status & Next Steps

- [x] **Phase 1A**: Project foundation, npm configuration, environment templates, architecture scaffolding, and responsive landing page.
- [ ] **Phase 1B (Planned)**: Basic HUD wireframes and mock state stores (waiting on explicit instruction).
- [ ] **Phase 2 (Planned)**: Initial Three.js low-poly 120×120m world rendering and character movement.
- [ ] **Phase 3 (Planned)**: Full-stack integration with `lautech-life-backend` and Supabase.

---

## 9. Legal & Independence Disclaimer

**LAUTECH Life** is an independent, fictional simulation project created for educational and entertainment purposes. It is **not** an official service, course registration platform, or representative of Ladoke Akintola University of Technology (LAUTECH) or any governmental institution. No university trademarks or crests are utilized. All virtual naira (₦) currency is purely fictional without monetary value.
