/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { offers } from "../data/offers";
import { Tag, Calendar, Check, Copy, ArrowRight } from "lucide-react";

interface FeaturedOffersProps {
  setCurrentPage: (page: string) => void;
  onApplyPromoCode?: (code: string) => void;
}

export default function FeaturedOffers({ setCurrentPage, onApplyPromoCode }: FeaturedOffersProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    try {
      navigator.clipboard.writeText(code);
      setCopiedCode(code);
      if (onApplyPromoCode) {
        onApplyPromoCode(code);
      }
      setTimeout(() => {
        setCopiedCode(null);
      }, 3000);
    } catch (err) {
      setCopiedCode(code);
      setTimeout(() => {
        setCopiedCode(null);
      }, 3000);
    }
  };

  return (
    <section className="bg-purple-dark text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-purple-light/20 relative animate-fadeIn">
      <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-purple-bright/5 blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 rounded-full bg-pink-primary/10 border border-pink-primary/30 px-3 py-1">
            <Tag className="h-3.5 w-3.5 text-pink-glow" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-pink-glow">Delicious Rewards</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl text-white">
            Special Dining <span className="text-pink-glow">Offers &amp; Deals</span>
          </h2>
          <p className="font-sans text-neutral-subtle font-light text-sm">
            Claim your exclusive discount code below to enjoy fantastic warm meals cooked with fresh ingredients, speed, and love.
          </p>
        </div>

        {/* Promo Grid list */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-purple-light/70 bg-purple-card/60 transition-all duration-300 hover:border-pink-primary/50 hover:shadow-xl hover:shadow-pink-primary/5"
            >
              <div>
                {/* Promo Header Image banner */}
                <div className="relative h-48 overflow-hidden bg-purple-dark">
                  <div className="absolute top-3 left-3 z-10 rounded-full bg-pink-primary px-3 py-1 font-display text-[10px] font-extrabold uppercase text-white shadow-md">
                    {offer.badge}
                  </div>
                  <img
                    src={offer.image}
                    alt={offer.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-card via-purple-card/20 to-transparent" />
                </div>

                {/* Offer details */}
                <div className="p-6 space-y-3 text-left">
                  <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-pink-glow">
                    {offer.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-subtle font-light leading-relaxed">
                    {offer.description}
                  </p>
                </div>
              </div>

              {/* Offer actions and Coupon Code */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex items-center justify-between border-t border-purple-light/40 pt-4">
                  <div className="text-left space-y-1">
                    <p className="font-mono text-[9px] text-neutral-subtle leading-none uppercase">COUPON CODE</p>
                    <button
                      onClick={() => handleCopyCode(offer.discountCode)}
                      className="mt-1 flex items-center space-x-1.5 rounded-lg bg-purple-dark border border-purple-light hover:border-pink-primary/50 px-3 py-1.5 text-xs font-mono font-bold text-pink-glow transition-all active:scale-95 focus:outline-none cursor-pointer"
                    >
                      <span>{offer.discountCode}</span>
                      {copiedCode === offer.discountCode ? (
                        <Check className="h-3.5 w-3.5 text-green-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5 text-neutral-subtle" />
                      )}
                    </button>
                  </div>

                  <div className="text-right space-y-1">
                    <p className="font-mono text-[9px] text-neutral-subtle leading-none uppercase">EXPIRES</p>
                    <div className="flex items-center space-x-1 text-xs text-neutral-light justify-end mt-1.5 font-medium">
                      <Calendar className="h-3 w-3 text-pink-glow" />
                      <span>{offer.expiryDate}</span>
                    </div>
                  </div>
                </div>

                {/* Instant Feedback Toast inside Card if Copied */}
                {copiedCode === offer.discountCode && (
                  <p className="text-left font-sans text-[11px] font-semibold text-green-400 select-none animate-pulse">
                    ✓ Code applied &amp; copied! Add items to try it.
                  </p>
                )}

                <button
                  onClick={() => {
                    handleCopyCode(offer.discountCode);
                    setCurrentPage("menu");
                  }}
                  className="w-full flex items-center justify-center space-x-2 rounded-xl bg-purple-light/70 border border-purple-light text-center py-2.5 text-xs font-bold text-white hover:bg-pink-primary/20 hover:border-pink-primary/40 transition-all focus:outline-none cursor-pointer"
                >
                  <span>Claim Offer</span>
                  <ArrowRight className="h-3.5 w-3.5 text-pink-glow" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
