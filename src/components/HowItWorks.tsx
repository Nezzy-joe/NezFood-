/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Heart, ShoppingBag, Send, Hourglass, ChefHat, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Heart,
      title: "Set Food Preferences",
      description: "Filter our menu by your exact preferences. Find options tailored for high protein, low calorie, gluten-free, or vegetarian needs instantly."
    },
    {
      number: "02",
      icon: ChefHat,
      title: "Chefs Prepare Fresh",
      description: "Our professional chefs prepare dishes using fresh, premium ingredients and wholesome, carefully sourced local produce."
    },
    {
      number: "03",
      icon: Hourglass,
      title: "Fast & Fresh Delivery",
      description: "We prepare your dishes fresh to order so they are packaged and ready to enjoy exactly when you need them—never cold or stale."
    },
    {
      number: "04",
      icon: CheckCircle2,
      iconColor: "text-emerald-400",
      title: "Enjoy Your Meal",
      description: "Tuck into rich, satisfying, and delicious meals delivered straight to you with care, supreme quality, and love."
    }
  ];

  return (
    <section className="bg-purple-darker text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-purple-light/20 relative">
      <div className="absolute top-1/2 left-1/3 h-72 w-72 rounded-full bg-pink-primary/5 blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 rounded-full bg-purple-light/55 border border-purple-light px-3 py-1">
            <Heart className="h-3.5 w-3.5 text-pink-glow" />
            <span className="text-[10px] uppercase font-mono tracking-widest text-pink-glow">Easy Ordering Process</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Delicious Food, <span className="text-gradient-pink">Made For You</span>
          </h2>
          <p className="font-sans text-neutral-subtle font-light text-base">
            We deliver top-quality fresh meals fast, combining premium local ingredients with easy and smart online ordering.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 relative">
          
          {/* Connector Line on Desktop */}
          <div className="hidden md:block absolute top-12 left-12 right-12 h-0.5 border-t border-dashed border-purple-light/35 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center group space-y-4">
                
                {/* Visual Circle Bubble */}
                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-purple-card border border-purple-light/80 transition-all duration-300 group-hover:border-pink-primary/50 group-hover:shadow-lg group-hover:shadow-pink-primary/5">
                  <Icon className={`h-10 w-10 ${step.iconColor || "text-pink-glow"} group-hover:scale-105 transition-transform duration-300`} />
                  <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-lg bg-pink-primary text-[10px] font-black font-mono tracking-tighter text-white shadow">
                    {step.number}
                  </span>
                </div>

                {/* Step Metadata text */}
                <div className="space-y-1.5 px-3">
                  <h3 className="font-display text-base font-bold text-white group-hover:text-pink-glow transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-subtle font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
