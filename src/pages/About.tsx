/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Info, ChefHat, Heart, Shield, Award, Landmark, RefreshCw } from "lucide-react";

export default function About() {
  return (
    <div id="about-view" className="bg-purple-dark text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-16 animate-fadeIn">
      <div className="mx-auto max-w-7xl">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 rounded-full bg-pink-primary/10 border border-pink-primary/30 px-3 py-1">
            <Info className="h-3.5 w-3.5 text-pink-glow animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-pink-glow">Sourcing &amp; Quality Manifesto</span>
          </div>
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl text-white">
            Where Fresh Ingredients Meets <span className="text-pink-glow">Culinary Heart</span>
          </h1>
          <p className="font-sans text-neutral-subtle font-light text-xs max-w-2xl mx-auto leading-relaxed">
            NezFood is a modern family kitchen dedicated to preparing fresh, healthy, and premium meals, made with love and delivered with speed.
          </p>
        </div>

        {/* 1. EDITORIAL TEXT SPLIT ROW */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 border-b border-purple-light/20 pb-16">
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="font-display text-2xl font-extrabold text-white">
              Cooking Delicious, Honest, and <span className="text-pink-glow">Wholesome Food</span>
            </h2>
            <p className="font-sans text-xs text-neutral-light font-light leading-relaxed">
              For years, fast food has often compromised on health, while healthier alternatives felt dull or out of reach. At NezFood, we believe you deserve both: delicious, warm, home-style satisfaction made of fresh ingredients prepared with the utmost care.
            </p>
            <p className="font-sans text-xs text-neutral-light font-light leading-relaxed">
              Our secret of amazing taste is simple: premium organic ingredients, professional cooking techniques, and genuine care. We completely ban artificial additives, unhealthy fats, and excessive sodium. Only honest, satisfying meals cooked fresh to order.
            </p>

            {/* Quick stats columns */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-xl border border-purple-light/60 bg-purple-card/45 p-4 text-left">
                <ChefHat className="h-5 w-5 text-pink-glow mb-1" />
                <h4 className="font-display text-xs font-bold text-white uppercase">Experienced Artisan Chefs</h4>
                <p className="font-sans text-[11px] text-neutral-subtle font-light leading-snug mt-1">
                  Our kitchen is staffed entirely by expert culinary chefs who specialize in clean, artisan cooking.
                </p>
              </div>

              <div className="rounded-xl border border-purple-light/60 bg-purple-card/45 p-4 text-left">
                <RefreshCw className="h-5 w-5 text-emerald-400 mb-1" />
                <h4 className="font-display text-xs font-bold text-white uppercase font-mono">100% Organically Sourced</h4>
                <p className="font-sans text-[11px] text-neutral-subtle font-light leading-snug mt-1">
                  Taste starts at the root. We source our fresh vegetables and herbs from vetted local premium farms.
                </p>
              </div>
            </div>
          </div>

          {/* Graphical editorial photo mockup on right */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-primary/10 to-purple-bright/10 rounded-2xl blur-xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-purple-light bg-purple-card p-4 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=800"
                alt="Expert chef plating dinner at NezFood"
                referrerPolicy="no-referrer"
                className="rounded-xl object-cover h-[300px] w-full"
              />
              <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-neutral-subtle">
                <span>NezFood CENTRAL KITCHEN</span>
                <span className="text-pink-glow">PREMIUM STANDARD</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. THE THREE FOUNDATIONAL PILLARS */}
        <div className="space-y-8 border-b border-purple-light/20 pb-16 text-left">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-extrabold text-white">
              The Three Pillars of <span className="text-pink-glow">NezFood Dining</span>
            </h2>
            <p className="font-sans text-xs text-neutral-subtle font-light mt-1">
              We uphold three strict quality benchmarks in every single dish prepared for our family of customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "100% Clean & Wholesome Ingredients",
                desc: "We completely ban synthetic trans-fats, high-fructose corn syrups, and industrial seed oils. We cook exclusively with estate extra virgin olive oil, cold-pressed avocado oil, and real organic butter."
              },
              {
                icon: Award,
                title: "Local Farm Sourcing",
                desc: "Our farm partners are carefully audited to guarantee chemical-free, nutrient-rich soils. By utilizing farm-fresh beets, greens, and grains, we deliver incredible natural nutrition directly to your table."
              },
              {
                icon: Landmark,
                title: "Zero-Waste Eco Kitchens",
                desc: "Traditional kitchens throw away massive stock daily. We plan raw materials and fresh ingredients deliveries daily in alignment with demand, keeping waste near zero. These cost savings are passed back as affordable price tags."
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="rounded-2xl border border-purple-light/75 bg-purple-card/50 p-6 space-y-4">
                  <div className="h-10 w-10 rounded-lg bg-pink-primary/10 border border-pink-primary/30 text-pink-glow flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-white">{pillar.title}</h3>
                  <p className="font-sans text-xs text-neutral-subtle font-light leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. MEET OUR TEAM */}
        <div className="space-y-8 text-left">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-extrabold text-white">
              Our Expert <span className="text-pink-glow">Culinary Team</span>
            </h2>
            <p className="font-sans text-xs text-neutral-subtle font-light mt-1">
              Meet the talented, passionate leaders dedicated to creating your memorable dining experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Chef Evelyn Sterling",
                role: "Executive Head Chef",
                avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=300",
                desc: "Former double Michelin-starred chef with 15 years in Parisian bistro fine-dining. Evelyn oversees recipe creation, farm partnering, and chef training programs."
              },
              {
                name: "Dr. Marcus Chen",
                role: "Menu Nutrition Architect",
                avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300",
                desc: "PhD in Nutritional Sciences from Stanford. Marcus designs our macro balance configurations and ensures clean dining for all diverse dietary needs."
              },
              {
                name: "Chef Liam Brooks",
                role: "Chief Baker & Fermentation Lead",
                avatar: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=300",
                desc: "Sourdough artisan chef who has spent over 9 years mastering wild yeasts. Liam manages our superb 48-hour slow-ferment sourdough doughs."
              }
            ].map((member, idx) => (
              <div key={idx} className="group rounded-2xl border border-purple-light bg-purple-card/75 overflow-hidden transition-all duration-300 hover:border-pink-primary/40">
                <div className="h-64 overflow-hidden bg-purple-dark">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-display text-base font-bold text-white group-hover:text-pink-glow transition-colors">{member.name}</h3>
                  <p className="font-mono text-[10px] text-pink-glow font-bold uppercase tracking-wider">{member.role}</p>
                  <p className="font-sans text-xs text-neutral-subtle font-light leading-relaxed pt-1.5">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
