/**
 * LAUTECH Life — Planned Client Networking Architecture (Phase 1A)
 * Reference: PRODUCT_SPEC.md Section 14, 15, and 16
 *
 * NOTE: Network calls are not implemented in Phase 1A.
 * This file documents the client contract for future integration with lautech-life-backend.
 */

export const NETWORK_CONTRACTS = {
  // Authoritative REST endpoints hosted on lautech-life-backend (:4000)
  endpoints: {
    health: '/api/health',
    profile: '/api/player/profile',
    wallet: '/api/player/wallet',
    hostelRent: '/api/player/hostel/rent',
    academicsAttend: '/api/player/academic/attend',
    hustleClaim: '/api/player/hustle/claim',
    shopBuy: '/api/shop/buy',
  },

  // Real-time multiplayer rooms managed by Socket.IO (:4000)
  socketEvents: {
    joinRoom: 'player:join',
    leaveRoom: 'player:leave',
    moveUpdate: 'player:move',
    chatMessage: 'chat:message',
    invitation: 'activity:invite',
  },
};
