/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import FeaturedOffers from "../components/FeaturedOffers";
import Testimonials from "../components/Testimonials";
import LocationPreview from "../components/LocationPreview";
import FAQPreview from "../components/FAQPreview";
import { Sparkles, ArrowRight, Zap, Target, Heart } from "lucide-react";

interface HomeProps {
  setCurrentPage: (page: string) => void;
  onOpenTastePredictor: () => void;
  onApplyPromoCode: (code: string) => void;
}

export default function Home({
  setCurrentPage,
  onOpenTastePredictor,
  onApplyPromoCode,
}: HomeProps) {
  return (
    <div id="home-view" className="animate-fadeIn">
      {/* Hero Header */}
      <Hero setCurrentPage={setCurrentPage} onOpenTastePredictor={onOpenTastePredictor} />

      {/* Culinary Vision Bento Grid banner */}
      <section className="bg-purple-dark text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-purple-light/20 relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 rounded-full bg-pink-primary/10 border border-pink-primary/30 px-3 py-1">
              <Zap className="h-3.5 w-3.5 text-pink-glow animate-pulse" />
              <span className="text-[10px] uppercase font-mono tracking-widest text-pink-glow">CRAFTED WITH FRESHNESS</span>
            </div>
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Why Customers Love <span className="text-pink-glow">NezFood</span>
            </h2>
            <p className="font-sans text-xs text-neutral-subtle font-light">
              We cook with clean, premium ingredients, natural seasonings, organic local farm produce, and standard-setting care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-purple-light/70 bg-purple-card/75 text-left space-y-4">
              <div className="h-10 w-10 rounded-lg bg-pink-primary/10 text-pink-glow flex items-center justify-center border border-pink-primary/30">
                <Heart className="h-5 w-5 fill-pink-primary/15" />
              </div>
              <h3 className="font-display text-base font-bold text-white">Pristine Quality &amp; Taste</h3>
              <p className="font-sans text-xs text-neutral-subtle font-light leading-relaxed">
                Our fine-dining culinary team selects premium ingredients and natural herbs to make every dish burst with rich, home-style juices and satisfying flavor.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-purple-light/70 bg-purple-card/75 text-left space-y-4">
              <div className="h-10 w-10 rounded-lg bg-purple-bright/10 text-pink-glow flex items-center justify-center border border-purple-bright/30">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-white">Swift Scheduled Pre-Orders</h3>
              <p className="font-sans text-xs text-neutral-subtle font-light leading-relaxed">
                We time our kitchen preparation with your requested pickup or delivery clock. Your food is completed minutes before your order is handed over, ensuring it is hot and fresh.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-purple-light/70 bg-purple-card/75 text-left space-y-4">
              <div className="h-10 w-10 rounded-lg bg-emerald-600/10 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-white">100% Organically Sourced</h3>
              <p className="font-sans text-xs text-neutral-subtle font-light leading-relaxed">
                Every slice of prime beef, ripe avocado, and fresh organic herbs is selected carefully from regional organic farms located close to our central kitchens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Ordering Flow */}
      <HowItWorks />

      {/* Featured Offers Promo widget */}
      <FeaturedOffers setCurrentPage={setCurrentPage} onApplyPromoCode={onApplyPromoCode} />

      {/* Reviews Section */}
      <Testimonials />

      {/* Hub Locations preview */}
      <LocationPreview />

      {/* Interactive Accordion FAQs */}
      <FAQPreview />

      {/* Final Call To Action panel */}
      <section className="bg-gradient-to-br from-purple-purple-nav via-purple-card to-purple-purple-dark text-white py-16 px-4 text-center border-t border-purple-light/35 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-primary to-transparent" />
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl text-white">
            Ready to enjoy <span className="text-gradient-pink font-display font-extrabold">delicious, warm meals?</span>
          </h2>
          <p className="max-w-xl mx-auto font-sans text-neutral-subtle text-xs font-light leading-relaxed">
            Set your custom food preferences, select your favorite delicious meals, and taste the difference that fresh ingredients and love make.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <button
              onClick={() => setCurrentPage("menu")}
              className="bg-pink-primary hover:bg-pink-hover text-white text-xs font-bold rounded-xl px-5 py-3 shadow-xl shadow-pink-primary/20 cursor-pointer"
            >
              Order Now
            </button>
            <button
              onClick={() => setCurrentPage("menu")}
              className="bg-purple-light/40 border border-purple-light hover:bg-purple-light/70 text-white text-xs font-semibold rounded-xl px-5 py-3 cursor-pointer"
            >
              View Menu
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
