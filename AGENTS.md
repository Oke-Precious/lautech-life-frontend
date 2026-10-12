# LAUTECH Life — Developer & Agent Guidelines (AGENTS.md)

This file documents the permanent rules and architectural boundaries for developers and automated coding agents working on `lautech-life-frontend`.

---

## 1. Source of Truth & Project Governance
- **PRODUCT_SPEC.md Version 0.2** (dated 9 October 2026) is the sole approved source of truth for all requirements, economy rules, and architecture.
- Do not implement future phases (Phase 2+, 3D gameplay, player characters, wallets, hostels, multiplayer rooms) without explicit authorization.
- Always check and preserve existing working code before applying edits.

---

## 2. Technical Stack & Language Constraints
- **Frontend Only**: This repository is strictly frontend-only. Never generate an Express backend, database server, or server-side gameplay authority inside this repository. The backend is maintained separately in `lautech-life-backend`.
- **Programming Language**: JavaScript only (`.js`, `.jsx`). Do **not** introduce TypeScript (`.ts`, `.tsx`), Next.js, or alternative meta-frameworks.
- **Framework & Bundler**: React 18+ and Vite.
- **Styling**: Lightweight CSS / Tailwind CSS. Avoid heavy external animation libraries, bulky CSS component packages, or massive icon suites.
- **3D Graphics Engine (Future Phases)**: Three.js and React Three Fiber (`@react-three/fiber`).
- **Database & Authentication Target**: Supabase PostgreSQL and Supabase Auth (confirmed for future phases via the backend).
- **Multiplayer Networking Target**: Socket.IO client (confirmed for future multiplayer sync with the backend).

---

## 3. Architectural Separation of Concerns
```
Browser Client (lautech-life-frontend)
   │
   ├─► Supabase Auth (Client-side token authentication flows)
   │
   ├─► Express REST API (lautech-life-backend :4000)
   │      └─► Supabase PostgreSQL (Atomic transactions, wallets, progression)
   │
   └─► Socket.IO Server (lautech-life-backend :4000)
          └─► Real-time multiplayer presence & room chat
```
- **Express Authority**: The backend Express server maintains exclusive authority over virtual naira balances, rewards, item purchases, hostel leases, academic credits, and task sequences. The frontend client submits intentions and must never execute direct mutations or calculate balances client-side.

---

## 4. Mobile Performance & Android Baseline
- Target device baseline: **3 GB RAM entry-level Android smartphone** operating on standard mobile networks.
- Performance gates:
  - Initial compressed transfer: **≤ 8 MB**
  - Complete zone compressed assets: **≤ 20 MB**
  - Visible triangles on low quality: **≤ 100,000**
  - Draw calls at busiest view: **≤ 100**
  - Target frame rate: **≥ 30 FPS** median
  - Device pixel ratio capped at **1.0 – 1.5**
  - Touch targets minimum: **44 × 44 CSS px**
- No heavy decorative animations, uncompressed textures, or full-viewport background video loops.

---

## 5. Security & Credential Hygiene
- **Never expose secrets**: Do not commit Supabase service-role keys, database passwords, or private API tokens to frontend files or `.env` examples.
- Variables prefixed with `VITE_` are public by design and visible in the browser bundle.
- Keep `.env.example` populated with placeholder strings and local endpoints (`http://localhost:4000`).

---

## 6. Zero-Cost Development Principle
- Total development budget is strictly **₦0**.
- Use only free, open-source software, free tiers, and original or public-domain assets.
- Never integrate paid APIs, paid hosting add-ons, or premium asset packages.

---

## 7. Branding & Legal Policy
- **Independent Project**: LAUTECH Life is an independent fictional student simulation inspired by student life around LAUTECH and Ogbomoso.
- Never use the official LAUTECH crest, registered trademarks, campus administration seals, or copyrighted photos without recorded rights.
- Maintain persistent independence disclaimers across public views.
- Virtual naira (₦) has **zero monetary value**; no real-world cash-out, deposits, or gambling mechanics are permitted.

---

## 8. Verification & Delivery Workflow
- Always run dependency checks (`npm install`) and production builds (`npm run build`).
- Verify dev server operation on port 3000 (`0.0.0.0:3000`).
- Report actual command outputs and test results honestly. Never fabricate or assume success.
- Request user approval before pushing or committing to GitHub.
