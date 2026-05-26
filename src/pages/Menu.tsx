/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { menuItems } from "../data/menuItems";
import MenuCard from "../components/MenuCard";
import { MenuItem, CartItem } from "../types";
import { Search, Filter, Sliders, CheckCircle2, ChevronRight, ShoppingCart, Heart } from "lucide-react";

interface MenuProps {
  onAddToCart: (item: MenuItem, customizations?: string, selectedIngredients?: string[]) => void;
  cart: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  userTasteProfile: {
    highProtein: boolean;
    lowCalorie: boolean;
    glutenFree: boolean;
    vegetarian: boolean;
    spicyLoved: boolean;
  };
  setUserTasteProfile: React.Dispatch<React.SetStateAction<{
    highProtein: boolean;
    lowCalorie: boolean;
    glutenFree: boolean;
    vegetarian: boolean;
    spicyLoved: boolean;
  }>>;
}

export default function Menu({
  onAddToCart,
  cart,
  setIsCartOpen,
  userTasteProfile,
  setUserTasteProfile,
}: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPreferencesWidget, setShowPreferencesWidget] = useState(true);

  // Normal food categories requested by the user
  const categories = ["All", "Rice Meals", "Swallow", "Grills", "Snacks", "Drinks", "Soups", "Specials"];

  // Filters calculation
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const cartTotal = cart.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const toggleTasteFilter = (filterKey: keyof typeof userTasteProfile) => {
    setUserTasteProfile((prev) => ({
      ...prev,
      [filterKey]: !prev[filterKey],
    }));
  };

  const handleResetTasteProfile = () => {
    setUserTasteProfile({
      highProtein: false,
      lowCalorie: false,
      glutenFree: false,
      vegetarian: false,
      spicyLoved: false,
    });
  };

  const activeFiltersCount = Object.values(userTasteProfile).filter(Boolean).length;

  return (
    <div id="menu-view" className="bg-purple-dark text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="mx-auto max-w-7xl">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 rounded-full bg-pink-primary/10 border border-pink-primary/30 px-3 py-1">
            <Heart className="h-3.5 w-3.5 text-pink-glow animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-pink-glow">NezFood Culinary Menu</span>
          </div>
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl text-white">
            Explore <span className="text-pink-glow">Our Delicious Menu</span>
          </h1>
          <p className="font-sans text-neutral-subtle font-light text-xs leading-relaxed">
            Filter our dishes by ingredients and lifestyle, or save your Food Preferences to highlight perfect matches for your dinner.
          </p>
        </div>

        {/* 1. FOOD PREFERENCES CENTER */}
        {showPreferencesWidget && (
          <div className="mb-10 rounded-2xl border border-pink-primary/40 bg-purple-card/75 p-5 sm:p-6 shadow-2xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 h-1 bg-gradient-to-r from-pink-primary via-purple-bright to-pink-primary w-full" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Heart className="h-4.5 w-4.5 text-pink-primary fill-pink-primary/20 animate-pulse" />
                  <h3 className="font-display text-sm font-bold text-white uppercase">Your Food Preferences</h3>
                </div>
                <p className="font-sans text-[11px] text-neutral-subtle font-light">
                  Select your favorite dining choices below to instantly find delicious dishes matching your preferred dining style.
                </p>
              </div>

              {activeFiltersCount > 0 && (
                <button
                  onClick={handleResetTasteProfile}
                  className="text-right font-mono text-[10px] text-pink-glow hover:underline cursor-pointer focus:outline-none"
                >
                  Clear Active Preferences ({activeFiltersCount})
                </button>
              )}
            </div>

            {/* Preferences options */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              {[
                { key: "highProtein", label: "High Protein Focus", desc: "Show delicious meat & fish plates" },
                { key: "lowCalorie", label: "Lighter Meals", desc: "Under 500 calorie recipes" },
                { key: "glutenFree", label: "Gluten-Free Recipes", desc: "No gluten ingredients added" },
                { key: "vegetarian", label: "Vegetarian Selections", desc: "Plant-focused options" },
                { key: "spicyLoved", label: "Spicy & Peppered", desc: "Perfect spice levels" },
              ].map((filter) => {
                const isActive = userTasteProfile[filter.key as keyof typeof userTasteProfile];
                return (
                  <button
                    key={filter.key}
                    onClick={() => toggleTasteFilter(filter.key as keyof typeof userTasteProfile)}
                    className={`flex flex-col items-start px-4 py-3 rounded-xl border text-left transition-all duration-200 select-none cursor-pointer focus:outline-none shrink-0 ${
                      isActive
                        ? "bg-pink-primary/20 border-pink-primary text-white shadow-md shadow-pink-primary/5"
                        : "bg-purple-dark border-purple-light/50 text-neutral-subtle hover:border-pink-primary/30"
                    }`}
                  >
                    <span className="font-display text-[11px] font-bold flex items-center space-x-1.5 leading-none">
                      <span className={`h-2 w-2 rounded-full ${isActive ? 'bg-pink-glow animate-ping' : 'bg-purple-light'}`} />
                      <span>{filter.label}</span>
                    </span>
                    <span className="font-sans text-[9px] text-neutral-subtle font-light mt-1.5 leading-none block">
                      {filter.desc}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Preferences indicators */}
            {activeFiltersCount > 0 ? (
              <div className="mt-4 flex items-center space-x-2 rounded-lg bg-emerald-600/10 border border-emerald-500/20 p-3 text-left">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                <p className="font-sans text-[11px] text-neutral-light font-light leading-normal">
                  <span className="font-bold text-white">Food Preferences Match Active :</span> The delicious menu has been customized to highlight items matching your chosen preferences. Enjoy your meal!
                </p>
              </div>
            ) : (
              <p className="mt-4 font-mono text-[9px] text-neutral-subtle italic">
                *Preferences are currently matching all items. Match choices above to highlight matches.
              </p>
            )}

          </div>
        )}

        {/* 2. SEARCH & CATEGORIES BAR */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8 border-b border-purple-light/30 pb-6 text-left">
          
          {/* Category tabs navigation */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="h-4 w-4 text-pink-glow shrink-0 hidden sm:block" />
            <div className="flex space-x-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-bold shrink-0 transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-pink-primary text-white shadow-md"
                      : "bg-purple-card border border-purple-light text-neutral-subtle hover:border-pink-primary/35"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Field */}
          <div className="relative min-w-[280px]">
            <input
              type="text"
              placeholder="Search specific meals or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-purple-light/75 bg-purple-card/75 py-2.5 pl-10 pr-4 text-xs text-white placeholder-neutral-subtle focus:border-pink-primary/60 focus:outline-none"
            />
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-neutral-subtle" />
          </div>

        </div>

        {/* 3. MENU ITEMS GRID DISPLAY */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onAddToCart={onAddToCart}
                userTasteProfile={activeFiltersCount > 0 ? userTasteProfile : undefined}
              />
            ))}
          </div>
        ) : (
          <div className="text-center rounded-2xl border border-dashed border-purple-light/60 p-16 space-y-3">
            <Sliders className="h-10 w-10 text-neutral-subtle mx-auto animate-pulse" />
            <h4 className="font-display text-base font-bold text-white">No Matching Dishes Found</h4>
            <p className="font-sans text-xs text-neutral-subtle max-w-sm mx-auto">
              Our kitchen team couldn't locate recipe matches for your exact filter queries. Try adjusting category headers or removing keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                handleResetTasteProfile();
              }}
              className="mt-2 rounded-xl bg-pink-primary px-4 py-2 text-xs font-bold text-white hover:bg-pink-hover cursor-pointer"
            >
              Reset Filters &amp; Reload Menu
            </button>
          </div>
        )}

      </div>

      {/* 4. STICKY DYNAMIC CART PREVIEW DRAGGER (Requested) */}
      {cartItemsCount > 0 && (
        <div className="fixed bottom-6 right-6 z-30 animate-scaleUp">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center space-x-3 rounded-2xl bg-gradient-to-r from-pink-primary to-purple-bright border border-pink-primary/40 px-5 py-4 text-sm font-bold text-white shadow-2xl cursor-pointer hover:opacity-95 transform active:scale-95 transition-all outline-none"
          >
            <div className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2.5 -right-2.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-white text-[9px] font-black text-pink-primary">
                {cartItemsCount}
              </span>
            </div>
            <div className="text-left leading-none space-y-0.5">
              <span className="text-[10px] text-neutral-light font-light uppercase tracking-wider block">Checkout Order Preview</span>
              <span className="font-display text-sm font-black">${cartTotal.toFixed(2)}</span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}

    </div>
  );
}
