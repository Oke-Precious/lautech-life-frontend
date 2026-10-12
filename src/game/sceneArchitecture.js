/**
 * LAUTECH Life — 3D Scene Architecture Specification (Phase 1A Scaffolding)
 * Reference: PRODUCT_SPEC.md Section 8 (World Design) & Section 18 (Performance)
 *
 * This module defines the architectural contracts and budget constraints
 * for the Three.js / React Three Fiber game world to be implemented in Phase 2.
 */

export const SCENE_CONFIG = {
  // Spatial dimensions (approx 120 x 120 game meters)
  worldBounds: {
    minX: -60,
    maxX: 60,
    minZ: -60,
    maxZ: 60,
  },

  // Planned Landmark Anchors
  landmarks: [
    { id: 'arrival_gate', name: 'Campus Main Gate (Adenike Road)', position: [0, 0, 20] },
    { id: 'senate_building', name: 'Senate Administrative Complex', position: [-25, 0, -5] },
    { id: 'hostel_adenike', name: 'Adenike Campus Villa Hostel', position: [25, 0, -10] },
    { id: 'lecture_theatre', name: '1200 Seat Lecture Complex', position: [-22, 0, -30] },
    { id: 'kiosk_shade', name: "Mama Shade Provisions Kiosk", position: [18, 0, 10] },
    { id: 'hustle_dispatcher', name: 'Dayo Dispatch Corner', position: [10, 0, 8] },
    { id: 'faculty_engineering', name: 'Faculty of Engineering Deanery', position: [-10, 0, -35] },
    { id: 'central_park', name: 'Student Union Plaza & Fountain', position: [0, 0, -8] },
  ],

  // Performance Budgets (from Section 18 of PRODUCT_SPEC.md)
  budgets: {
    maxInitialDownloadMB: 8,
    maxZoneAssetsMB: 20,
    maxVisibleTriangles: 100000,
    maxDrawCalls: 100,
    targetMinFPS: 30,
    maxDevicePixelRatio: 1.5,
  },
};
