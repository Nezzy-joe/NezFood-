/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Offer } from "../types";

export const offers: Offer[] = [
  {
    id: "o1",
    title: "Welcome to NezFood Feast",
    description: "Experience food prepared with care, speed, and love. Unlock 20% off your entire initial online order.",
    discountCode: "NEZWELCOME",
    discountPercentage: 20,
    badge: "First Order Special",
    expiryDate: "June 30, 2026",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "o2",
    title: "Express Lunch Special",
    description: "Beat the lunch rush with our quick preparation. Pre-order or schedule your lunch for pickup or direct delivery with 15% off.",
    discountCode: "EXPRESS15",
    discountPercentage: 15,
    badge: "Lunch Hour Deal",
    expiryDate: "July 12, 2026",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "o3",
    title: "NezFood Signature Feast",
    description: "Enjoy an elegant premium family combination of 2 signature mains, 2 shared plates, and 2 decadent desserts with 25% off.",
    discountCode: "FEAST25",
    discountPercentage: 25,
    badge: "Family Feast Package",
    expiryDate: "August 01, 2026",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
  }
];
