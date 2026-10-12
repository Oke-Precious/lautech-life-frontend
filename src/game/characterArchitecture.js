/**
 * LAUTECH Life — Character & Input Architecture (Phase 1A Scaffolding)
 * Reference: PRODUCT_SPEC.md Section 6 (Character creation) & Section 15 (Controls)
 */

export const CHARACTER_DEFAULTS = {
  skinTones: ['#8d5524', '#593110', '#38200b', '#c68642', '#6d4323'],
  shirtColors: ['#1e3a8a', '#047857', '#b45309', '#991b1b', '#e2e8f0'],
  trousersColors: ['#1e293b', '#78716c', '#0f172a', '#1e40af'],
  hairstyles: ['short_afro', 'fade_waves', 'box_braids', 'dreads'],
};

export const INPUT_MAPPINGS = {
  desktop: {
    moveForward: ['KeyW', 'ArrowUp'],
    moveBackward: ['KeyS', 'ArrowDown'],
    moveLeft: ['KeyA', 'ArrowLeft'],
    moveRight: ['KeyD', 'ArrowRight'],
    sprint: ['ShiftLeft', 'ShiftRight'],
    interact: ['KeyE'],
    menu: ['Escape'],
  },
  mobile: {
    leftZone: 'virtual_joystick',
    rightZone: 'camera_touch_drag',
    actionButton: 'large_touch_target_min_44px',
  },
};
