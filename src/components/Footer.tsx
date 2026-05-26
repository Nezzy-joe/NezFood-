/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Send, Instagram, Twitter, Heart } from "lucide-react";
import NezFoodLogo from "./NezFoodLogo";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleLinkClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-purple-darker border-t border-purple-light/40 text-neutral-subtle font-sans text-xs">
      
      {/* Top newsletter and description block */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-purple-light/35 pb-10">
          
          {/* Brand description and social */}
          <div className="md:col-span-12 lg:col-span-5 space-y-5 text-left">
            <button
              onClick={() => handleLinkClick("home")}
              className="group flex items-center space-x-3 text-left focus:outline-none cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <NezFoodLogo className="h-full w-full" />
              </div>
              <div>
                <span className="font-display text-base font-extrabold tracking-tight text-white">NezFood</span>
                <p className="text-[10px] text-neutral-subtle font-light mt-0.5">Delivered with love</p>
              </div>
            </button>
            
            <p className="font-sans text-xs text-neutral-subtle font-light leading-relaxed max-w-md">
              Fresh meals, smart ordering, delivered with love. Order your favorite satisfying dishes cooked fresh by artisan chefs and delivered with care and speed.
            </p>

            <div className="flex space-x-3">
              <a href="#instagram" className="h-8 w-8 rounded-lg bg-purple-light/50 border border-purple-light hover:border-pink-primary/50 text-neutral-subtle hover:text-white flex items-center justify-center transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#twitter" className="h-8 w-8 rounded-lg bg-purple-light/50 border border-purple-light hover:border-pink-primary/50 text-neutral-subtle hover:text-white flex items-center justify-center transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick directory links */}
          <div className="md:col-span-6 lg:col-span-3 space-y-4 text-left">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 font-medium">
              {[
                { id: "home", label: "Home" },
                { id: "menu", label: "Menu" },
                { id: "offers", label: "Offers" },
                { id: "about", label: "About" },
                { id: "contact", label: "Contact" },
                { id: "faq", label: "FAQs" }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className="hover:text-pink-glow text-neutral-subtle hover:underline text-left cursor-pointer transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter subscription form */}
          <div className="md:col-span-6 lg:col-span-4 space-y-4 text-left">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">NezFood Newsletter</h4>
            <p className="font-sans text-xs text-neutral-subtle font-light leading-relaxed">
              Subscribe to get recipe updates, special menu details, and exclusive vouchers delivered right to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex space-x-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-purple-light/75 bg-purple-card/75 px-4 py-2 text-xs text-white placeholder-neutral-subtle focus:border-pink-primary/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-pink-primary hover:bg-pink-hover text-white px-4 py-2 transition-colors flex items-center justify-center shrink-0"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              {subscribed && (
                <p className="font-sans text-[11px] text-green-400 font-semibold animate-pulse">
                  ✓ Subscribed! Welcome pack is on its way.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Lower copyright block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-sans text-neutral-subtle space-y-4 sm:space-y-0 text-left">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-1 sm:space-y-0">
            <p className="text-[11px] font-light">
              &copy; {new Date().getFullYear()} NezFood. All rights reserved. Fresh meals, smart ordering, delivered with love.
            </p>
          </div>
          <div className="flex items-center space-x-1.5 text-[11px] font-medium text-neutral-subtle">
            <span>Delivered with</span>
            <Heart className="h-3.5 w-3.5 text-pink-primary fill-pink-primary animate-pulse" />
            <span>and absolute care</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
