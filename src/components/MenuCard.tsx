/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MenuItem } from "../types";
import { Flame, Star, Clock, Sparkles, Check, ChevronRight, Plus, Heart } from "lucide-react";

interface MenuCardProps {
  key?: string | number;
  item: MenuItem;
  onAddToCart: (item: MenuItem, customizations?: string, selectedIngredients?: string[]) => void;
  userTasteProfile?: {
    highProtein: boolean;
    lowCalorie: boolean;
    glutenFree: boolean;
    vegetarian: boolean;
    spicyLoved: boolean;
  };
}

export default function MenuCard({ item, onAddToCart, userTasteProfile }: MenuCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const [showSmartCustomizer, setShowSmartCustomizer] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(item.ingredients || []);
  const [customSauce, setCustomSauce] = useState("Original");

  // Compute live match score based on user taste profile toggles
  const computeMatchScore = () => {
    if (!userTasteProfile) return null;
    let matches = 0;
    let totalFilters = 0;

    const lowerNameAndDesc = (item.name + " " + item.description).toLowerCase();

    if (userTasteProfile.highProtein) {
      totalFilters++;
      if (lowerNameAndDesc.includes("protein") || lowerNameAndDesc.includes("salmon") || lowerNameAndDesc.includes("burger") || lowerNameAndDesc.includes("gyoza") || item.tags.some(t => t.toLowerCase().includes("protein"))) {
        matches++;
      }
    }
    if (userTasteProfile.lowCalorie) {
      totalFilters++;
      if (item.calories < 500) {
        matches++;
      }
    }
    if (userTasteProfile.glutenFree) {
      totalFilters++;
      const isGF = item.tags.some(t => t.toLowerCase().includes("gluten")) || item.id === "m1" || item.id === "m5";
      if (isGF) matches++;
    }
    if (userTasteProfile.vegetarian) {
      totalFilters++;
      if (item.vegetarian) {
        matches++;
      }
    }
    if (userTasteProfile.spicyLoved) {
      totalFilters++;
      if (item.spicy) {
        matches++;
      }
    }

    if (totalFilters === 0) return null;
    const pct = Math.round((matches / totalFilters) * 40 + 60); // range 60% to 100% for premium feel
    return pct;
  };

  const matchScore = computeMatchScore();

  const handleToggleIngredient = (ing: string) => {
    if (selectedIngredients.includes(ing)) {
      setSelectedIngredients(selectedIngredients.filter(i => i !== ing));
    } else {
      setSelectedIngredients([...selectedIngredients, ing]);
    }
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const customSummary = `Ingredients: ${selectedIngredients.length === item.ingredients?.length ? 'Original' : selectedIngredients.join(', ')} | Sauce: ${customSauce}`;
    onAddToCart(item, customSummary, selectedIngredients);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-purple-light bg-purple-card/75 transition-all duration-300 hover:border-pink-primary/45 hover:shadow-xl hover:shadow-pink-primary/5">
      
      {/* Upper part of Card containing image and badges */}
      <div className="relative">
        
        {/* Dynamic Taste Profile Rating */}
        {matchScore !== null && (
          <div className="absolute top-3 left-3 z-20 flex items-center space-x-1 rounded-full bg-pink-primary px-2.5 py-1 text-[10px] font-bold text-white shadow-lg animate-bounce">
            <Heart className="h-3 w-3 fill-white text-pink-primary" />
            <span>{matchScore}% Preference Match</span>
          </div>
        )}

        {/* Traditional badges on top/right */}
        <div className="absolute top-3 right-3 z-20 flex flex-col gap-1.5 items-end">
          {item.spicy && (
            <span className="flex items-center space-x-1 rounded-full bg-red-600 px-2 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase shadow-sm">
              <Flame className="h-2.5 w-2.5 text-white animate-pulse" />
              <span>SPICY</span>
            </span>
          )}
          {item.popular && (
            <span className="rounded-full bg-purple-bright bg-opacity-90 px-2 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase shadow-sm">
              POPULAR
            </span>
          )}
          {item.vegetarian && (
            <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase shadow-sm">
              VEG
            </span>
          )}
        </div>

        {/* Thumbnail Image display */}
        <div className="relative overflow-hidden h-48 sm:h-52 w-full rounded-t-2xl bg-purple-dark">
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-card via-transparent to-transparent opacity-90" />
        </div>

        {/* Content details */}
        <div className="p-5 space-y-2">
          
          {/* Metadata Bar (Cal, Time, Star) */}
          <div className="flex items-center space-x-3 text-[11px] text-neutral-subtle font-mono">
            <div className="flex items-center space-x-0.5">
              <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
              <span className="font-bold text-white">{item.rating}</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{item.prepTime}</span>
            </div>
            <span>•</span>
            <span>{item.calories} Calories</span>
          </div>

          <h3 className="font-display text-lg font-bold text-white tracking-tight group-hover:text-pink-glow transition-colors">
            {item.name}
          </h3>

          <p className="font-sans text-xs text-neutral-subtle font-light leading-relaxed line-clamp-2">
            {item.description}
          </p>

          {/* Sourcing Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1.5">
            {item.tags.map(tag => (
              <span key={tag} className="rounded bg-purple-light/50 border border-purple-light px-1.5 py-0.5 text-[9px] font-semibold text-pink-glow font-mono">
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Button controls and price footer */}
      <div className="p-5 pt-0 space-y-4">
        
        {/* Expanded customizer toggle */}
        {showSmartCustomizer ? (
          <div className="rounded-xl bg-purple-dark border border-purple-light/60 p-3 space-y-2 animate-fadeIn text-left">
            <p className="font-mono text-[9px] text-pink-glow uppercase font-bold tracking-wide">Customize Your Dish</p>
            
            {/* Ingredients pickers */}
            <div className="space-y-1.5">
              <p className="font-sans text-[10px] text-neutral-subtle">Exclude specific ingredients:</p>
              <div className="flex flex-wrap gap-1">
                {item.ingredients?.map(ing => {
                  const isChecked = selectedIngredients.includes(ing);
                  return (
                    <button
                      key={ing}
                      onClick={() => handleToggleIngredient(ing)}
                      className={`rounded px-2 py-0.5 text-[9px] font-semibold border transition-all ${
                        isChecked 
                        ? "bg-purple-light/80 border-pink-primary/40 text-white" 
                        : "bg-purple-darker border-purple-light/30 text-neutral-subtle line-through opacity-50"
                      }`}
                    >
                      {ing}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sauce choice selector */}
            <div className="flex justify-between items-center pt-1 border-t border-purple-light/20">
              <span className="font-sans text-[10px] text-neutral-subtle">Choose Sauce Option:</span>
              <select
                value={customSauce}
                onChange={(e) => setCustomSauce(e.target.value)}
                className="bg-purple-darker border border-purple-light/40 rounded px-1.5 py-0.5 text-[10px] font-semibold text-white focus:outline-none"
              >
                <option value="Original">Original Recipe Sauce</option>
                <option value="Light">Light Sauce</option>
                <option value="Spicy Kick">Double Spicy Chili Kick</option>
                <option value="Keto Avocado Oil">Keto Avocado-Oil Drizzle</option>
              </select>
            </div>

            <button
              onClick={() => setShowSmartCustomizer(false)}
              className="w-full text-center font-display text-[10px] font-extrabold text-neutral-subtle hover:text-white transition-all pt-1"
            >
              Done Customizing
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center text-left">
            <button
              onClick={() => setShowSmartCustomizer(true)}
              className="font-mono text-[10px] font-bold text-neutral-subtle hover:text-pink-glow transition-all flex items-center space-x-0.5 cursor-pointer underline font-mono"
            >
              <span>Customize</span>
              <ChevronRight className="h-3 w-3" />
            </button>
            {item.aiConfidence && (
              <span className="font-mono text-[9px] text-emerald-400 font-semibold">{item.aiConfidence}</span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between border-t border-purple-light/30 pt-3.5">
          <div className="text-left">
            <p className="font-mono text-[9px] text-neutral-subtle leading-none uppercase font-bold">PRICE</p>
            <p className="font-display text-xl font-black text-white mt-0.5">${item.price.toFixed(2)}</p>
          </div>

          <button
            onClick={handleAddToCartClick}
            className={`flex items-center space-x-1.5 rounded-xl px-4 py-2.5 text-xs font-extrabold shadow-md transition-all cursor-pointer ${
              isAdded
                ? "bg-emerald-600 text-white"
                : "bg-pink-primary text-white hover:bg-pink-hover shadow-pink-primary/10"
            }`}
          >
            {isAdded ? <Check className="h-4 w-4 animate-scaleUp" /> : <Plus className="h-4 w-4" />}
            <span>{isAdded ? "Added!" : "Add to Cart"}</span>
          </button>
        </div>

      </div>

    </div>
  );
}
