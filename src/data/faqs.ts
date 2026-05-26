/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQ } from "../types";

export const faqs: FAQ[] = [
  {
    id: "f1",
    question: "How do you guarantee food freshness during delivery?",
    answer: "Every single dish is prepared completely fresh to order. We never keep pre-cooked foods in warming cabinets. We seal all orders in state-of-the-art eco-friendly, heat-retaining packaging, meaning your hand-crafted pizza, warm salmon, or signature burger stays piping hot and fresh all the way to your door.",
    category: "Kitchen & Delivery"
  },
  {
    id: "f2",
    question: "What are your delivery areas, timing, and fee structures?",
    answer: "We offer delivery to most residential and commercial addresses within a 15-mile radius of our central kitchens (operating daily from 11:00 AM to 10:00 PM). Best of all, standard delivery on all orders placed via our website is completely free with no hidden convenience fees!",
    category: "Kitchen & Delivery"
  },
  {
    id: "f3",
    question: "How do I place an order for immediate or scheduled pickup?",
    answer: "Placing an order is simple: navigate to our Fresh Menu, select your delicious meals, customize ingredients as desired, and click 'Order Now'. You can choose between immediate delivery/pickup or schedule your feast for a future time slot. If you pre-order, we will time things so your food is fresh out of the oven exactly 2 minutes before you arrive or our driver leaves.",
    category: "Ordering & Pickup"
  },
  {
    id: "f4",
    question: "Can I customize ingredients or add complex dietary requests?",
    answer: "Absolutely! Every customer is unique and deserving of food tailored with care. Open any dish on our menu page to edit ingredients (add or remove items), choose gluten-free sourdough crusts, or specify custom sauce weights (Keto Avocado Oil, Spicy Kick, etc.). This makes clean and wholesome dining effortless.",
    category: "Ordering & Pickup"
  },
  {
    id: "f5",
    question: "What payment methods are supported on your platform?",
    answer: "We support all major payment types including Visa, Mastercard, American Express, Apple Pay, Google Pay, and direct digital voucher codes (e.g., 'NEZWELCOME' or 'FEAST25'). In this frontend simulation, all payments are safely mocked, but in production, they route securely through Stripe with end-to-end encryption.",
    category: "Payments & Policy"
  },
  {
    id: "f6",
    question: "What is your refund and cancellation policy?",
    answer: "Your ultimate satisfaction is our kitchen's proudest metric. If you need to cancel, you can do so up to 15 minutes before your scheduled kitchen slot. In the rare event that an order arrives cold, incorrect, or doesn't meet your expectations, simply reach out to our active support channels of email/phone, and we will issue a 100% full refund or prepare a fresh replacement immediately.",
    category: "Payments & Policy"
  },
  {
    id: "f7",
    question: "Where do you source your organic ingredients from?",
    answer: "We source 100% of our vegetables, greens, and fresh herbs from certified local premium farms within 35 miles of our core operations. Our prime salmon, grass-fed beef, and cheeses are selected with strict oversight to guarantee clean food, completely free of chemical additives, industrial starch, or artificial coloring.",
    category: "Sourcing & Sustainability"
  }
];
