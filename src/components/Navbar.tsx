/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ShoppingBag, Menu, X, Heart, Phone, HelpCircle, Utensils, Info, Tag } from "lucide-react";
import { CartItem } from "../types";
import NezFoodLogo from "./NezFoodLogo";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  cart: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  onOpenTastePredictor: () => void;
}

export default function Navbar({
  currentPage,
  setCurrentPage,
  cart,
  setIsCartOpen,
  onOpenTastePredictor,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Utensils },
    { id: "menu", label: "Menu", icon: Utensils },
    { id: "offers", label: "Offers", icon: Tag },
    { id: "about", label: "About", icon: Info },
    { id: "contact", label: "Contact", icon: Phone },
    { id: "faq", label: "FAQs", icon: HelpCircle },
  ];

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header id="app-navbar" className="sticky top-0 z-40 w-full border-b border-purple-light/40 bg-purple-darker/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="group flex items-center space-x-3 text-left focus:outline-none cursor-pointer"
        >
          <div className="relative shrink-0 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <NezFoodLogo className="h-full w-full" />
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-display text-base md:text-lg font-extrabold tracking-tight text-white">NezFood</span>
            </div>
            <p className="font-sans text-[10px] text-neutral-subtle font-light tracking-wide leading-none">Fresh meals with love</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex items-center space-x-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all group focus:outline-none cursor-pointer ${
                  isActive
                    ? "text-pink-glow bg-purple-light/40"
                    : "text-neutral-subtle hover:text-white hover:bg-purple-light/20"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-pink-primary rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Meal Preferences Micro-Badge */}
          <button
            onClick={onOpenTastePredictor}
            className="hidden lg:flex items-center space-x-1.5 rounded-full border border-pink-primary/40 bg-pink-primary/10 px-3.5 py-1.5 text-xs font-semibold text-pink-glow hover:bg-pink-primary/20 transition-all cursor-pointer shadow-sm shadow-pink-primary/10"
          >
            <Heart className="h-3.5 w-3.5 animate-pulse text-pink-primary fill-pink-primary/20" />
            <span>Meal Preferences</span>
          </button>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex h-10 px-4 items-center justify-center space-x-2 rounded-xl bg-purple-light/50 border border-purple-light/80 text-white hover:bg-pink-primary/10 hover:border-pink-primary/40 transition-all cursor-pointer"
          >
            <ShoppingBag className="h-4.5 w-4.5 text-pink-glow" />
            <span className="font-display font-medium text-xs">Cart</span>
            {totalItems > 0 && (
              <span className="flex h-5 min-w-[20px] px-1.5 items-center justify-center rounded-full bg-pink-primary text-[10px] font-bold text-white animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-light/80 text-neutral-subtle md:hidden hover:border-white focus:outline-none"
          >
            {isMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Sidebar Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-purple-light/30 bg-purple-dark px-4 py-3 space-y-2 animate-fadeIn shadow-2xl">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex w-full items-center space-x-3 rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-all ${
                  isActive
                    ? "text-pink-glow bg-purple-light/60 border-l-4 border-pink-primary"
                    : "text-neutral-subtle hover:text-white hover:bg-purple-light/30"
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
          {/* Mobile Meal Preferences Widget Callout */}
          <div className="pt-2 border-t border-purple-light/30">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenTastePredictor();
              }}
              className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-pink-primary to-purple-bright px-4 py-2.5 text-center text-sm font-bold text-white hover:opacity-90"
            >
              <Heart className="h-4 w-4 text-white fill-white/20" />
              <span>Food Preferences</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
