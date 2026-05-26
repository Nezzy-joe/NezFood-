/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Utensils, Heart } from "lucide-react";

interface HeroProps {
  setCurrentPage: (page: string) => void;
  onOpenTastePredictor: () => void;
}

export default function Hero({ setCurrentPage, onOpenTastePredictor }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-purple-darker px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      {/* Absolute Ambient Background Lights - Warmer red and yellow */}
      <div className="absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-1/10 bottom-1/4 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Main Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Pulsing smart badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5"
            >
              <Heart className="h-4 w-4 text-red-500 fill-red-500/20 animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-red-400 uppercase font-mono">Fresh. Tasty. Made for You.</span>
            </motion.div>

            {/* Headline with warmer inline gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl leading-tight"
            >
              Delicious Meals, <br />
              <span className="bg-gradient-to-r from-red-500 via-rose-500 to-yellow-500 bg-clip-text text-transparent">Delivered Fast.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl font-sans text-lg text-neutral-subtle font-light leading-relaxed"
            >
              Order your favourite meals from NezFood and enjoy fresh, satisfying dishes delivered with speed, care, and love.
            </motion.p>

            {/* Interactive Call to Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => setCurrentPage("menu")}
                className="group inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-500 hover:to-pink-400 px-6 py-3.5 text-sm font-extrabold text-white shadow-xl shadow-red-600/20 transition-all focus:outline-none cursor-pointer"
              >
                <span>Order Now</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => setCurrentPage("menu")}
                className="inline-flex items-center space-x-2 rounded-xl bg-purple-light/50 border border-purple-light/80 px-6 py-3.5 text-sm font-extrabold text-neutral-light transition-all hover:bg-purple-light/80 hover:text-white focus:outline-none cursor-pointer"
              >
                <Utensils className="h-4 w-4 text-yellow-400" />
                <span>View Menu</span>
              </button>

              <button
                onClick={onOpenTastePredictor}
                className="inline-flex w-full sm:w-auto items-center justify-center space-x-2 rounded-xl border border-dashed border-yellow-500/50 bg-yellow-400/5 px-6 py-3.5 text-sm font-semibold text-yellow-400 hover:bg-yellow-400/10 transition-all text-center cursor-pointer"
              >
                <Heart className="h-4 w-4 text-yellow-400 fill-yellow-400/20 animate-pulse" />
                <span>Food Preferences</span>
              </button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-purple-light/30 max-w-lg"
            >
              <div>
                <p className="font-display text-2xl font-extrabold text-yellow-400">4.9 ★</p>
                <p className="font-sans text-xs text-neutral-subtle font-medium">9k+ Happy Customers</p>
              </div>
              <div>
                <p className="font-display text-2xl font-extrabold text-white">&lt;20m</p>
                <p className="font-sans text-xs text-neutral-subtle font-medium">Average Delivery Time</p>
              </div>
              <div>
                <p className="font-display text-2xl font-extrabold text-white">100%</p>
                <p className="font-sans text-xs text-neutral-subtle font-medium">Fresh Ingredients</p>
              </div>
            </motion.div>

          </div>

          {/* Majestic Hero Graphical Mockup on the Right */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Halo Ring */}
            <div className="absolute inset-0 h-[400px] w-[400px] rounded-full border border-red-500/10 animate-pulse my-auto mx-auto" />
            <div className="absolute inset-0 h-[480px] w-[480px] rounded-full border border-yellow-500/10 animate-spin my-auto mx-auto" style={{ animationDuration: '40s' }} />

            {/* Image card container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl border border-purple-light/60 bg-purple-card/70 p-4 shadow-2xl max-w-md hover:border-red-500/40 transition-colors"
            >
              
              {/* Overlay smart overlay HUD */}
              <div className="absolute top-8 left-8 z-10 flex items-center space-x-2 rounded-lg bg-purple-darker/90 border border-red-500/40 px-3 py-1.5 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
                <span className="font-mono text-[11px] font-bold text-white tracking-wider flex items-center gap-1">
                  <Zap className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                  <span>COOKED FRESH & HOT</span>
                </span>
              </div>

              <div className="absolute bottom-8 right-8 z-10 rounded-lg bg-gradient-to-r from-red-650 to-red-600 bg-red-600 border border-red-400 text-white px-4 py-2 font-display text-xs font-bold shadow-lg">
                Customer Favourite
              </div>

              {/* Main Food Photo */}
              <div className="overflow-hidden rounded-2xl aspect-1 my-auto bg-purple-dark">
                <img
                  src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800"
                  alt="Gourmet dinner setup"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Micro specs overlay panel inside card */}
              <div className="mt-4 flex items-center justify-between border-t border-purple-light/40 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-purple-light/80 flex items-center justify-center text-yellow-400">
                    <Zap className="h-4 w-4 fill-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold text-white font-sans">NezFood Smoky Jollof Platter</h4>
                    <p className="font-mono text-[10px] text-neutral-subtle font-light">Spiced Basmati • Plantains • Grilled Chicken</p>
                  </div>
                </div>
                <div className="rounded-md border border-purple-light bg-purple-dark px-2.5 py-1 text-center">
                  <p className="font-mono text-[9px] text-neutral-subtle leading-none font-bold">PREP TIME</p>
                  <p className="font-display text-xs font-bold text-yellow-400 mt-0.5">12 mins</p>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
