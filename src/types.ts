/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tags: string[];
  spicy: boolean;
  popular: boolean;
  vegetarian: boolean;
  calories: number;
  rating: number;
  prepTime: string; // e.g. "10-15 mins"
  aiConfidence?: string; // AI recommendations match percentage or reason, e.g. "98% Match"
  ingredients?: string[];
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discountCode: string;
  discountPercentage?: number;
  badge: string;
  expiryDate: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  role: string;
  comment: string;
  tags: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  customizations?: string;
  selectedIngredients?: string[];
}
