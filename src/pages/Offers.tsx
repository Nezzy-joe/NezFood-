/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import FeaturedOffers from "../components/FeaturedOffers";
import { Tag, Sparkles, CheckCircle2, Ticket, Gift, AlertTriangle, Send, Heart } from "lucide-react";
import { offers } from "../data/offers";

interface OffersProps {
  setCurrentPage: (page: string) => void;
  onApplyPromoCode: (code: string) => void;
  appliedPromo: string | null;
}

export default function Offers({ setCurrentPage, onApplyPromoCode, appliedPromo }: OffersProps) {
  const [typedCode, setTypedCode] = useState("");
  const [purchasedGift, setPurchasedGift] = useState<string | null>(null);
  const [validationResult, setValidationResult] = useState<{
    status: "idle" | "success" | "invalid";
    msg: string;
    pct?: number;
  }>({ status: "idle", msg: "" });

  const handleValidateCode = (e: React.FormEvent) => {
    e.preventDefault();
    const query = typedCode.trim().toUpperCase();
    
    // Look up in offers list
    const found = offers.find(o => o.discountCode === query);
    
    if (found) {
      setValidationResult({
        status: "success",
        msg: `Promotional code ${found.discountCode} applied successfully! enjoy ${found.discountPercentage}% discount on your active cart.`,
        pct: found.discountPercentage
      });
      onApplyPromoCode(found.discountCode);
    } else if (query === "NEZLOVE") {
      setValidationResult({
        status: "success",
        msg: "Secret welcome promotional code applied successfully! enjoyed 30% discount on your order.",
        pct: 30
      });
      onApplyPromoCode("NEZLOVE");
    } else {
      setValidationResult({
        status: "invalid",
        msg: "Invalid promotion code. Ensure character spelling matches our official vouchers listed below."
      });
    }
  };

  const handleGiftPurchase = (amount: string, title: string) => {
    setPurchasedGift(`Successfully purchased the ${title} (${amount})! This simulation would connect to your checkout payment gateway.`);
    setTimeout(() => {
      setPurchasedGift(null);
    }, 6000);
  };

  return (
    <div id="offers-view" className="bg-purple-dark text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-12 animate-fadeIn">
      <div className="mx-auto max-w-7xl">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 rounded-full bg-red-650/10 border border-red-500/30 px-3 py-1">
            <Heart className="h-3.5 w-3.5 text-yellow-400 animate-pulse fill-yellow-400/20" />
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-yellow-400">Tasty Rewards &amp; Coupons</span>
          </div>
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl text-white">
            Special Offers &amp; <span className="bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">Vouchers</span>
          </h1>
          <p className="font-sans text-neutral-subtle font-light text-xs max-w-2xl mx-auto leading-relaxed">
            Use the discount codes below to enjoy savings on your favourite dishes. Looking to spread some love? Surprise a loved one with a digital gift card instantly.
          </p>
        </div>

        {/* 1. INTERACTIVE CODE VALIDATOR BOX */}
        <div className="max-w-2xl mx-auto rounded-2xl border border-purple-light bg-purple-card/75 p-6 text-left space-y-4 hover:border-red-500/30 transition-colors duration-300">
          
          <div className="space-y-1">
            <h3 className="font-display text-sm font-bold text-white uppercase flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
              <span>Enter Your Promo Code</span>
            </h3>
            <p className="font-sans text-[11px] text-neutral-subtle font-light">
              Submit your voucher code below to immediately apply a discount on your order.
            </p>
          </div>

          <form onSubmit={handleValidateCode} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              required
              placeholder="Enter code (e.g. NEZWELCOME, EXPRESS15, NEZLOVE)..."
              value={typedCode}
              onChange={(e) => setTypedCode(e.target.value)}
              className="w-full rounded-xl border border-purple-light/75 bg-purple-dark px-4 py-3 text-xs text-white placeholder-neutral-subtle uppercase tracking-widest font-mono font-bold focus:border-red-500/60 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-500 hover:to-pink-400 text-white text-xs font-bold px-6 py-3 transition-all shrink-0 flex items-center justify-center space-x-1.5 focus:outline-none cursor-pointer shadow-md shadow-red-600/10"
            >
              <span>Validate Code</span>
            </button>
          </form>

          {/* Validation Feedbacks */}
          {validationResult.status === "success" && (
            <div className="flex items-start space-x-3 rounded-xl bg-emerald-600/10 border border-emerald-500/20 p-4 animate-scaleUp">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-sans text-xs text-neutral-light font-medium leading-normal">
                  {validationResult.msg}
                </p>
                {validationResult.pct && (
                  <p className="font-mono text-[10px] text-emerald-400 font-bold">
                    ✓ DISCOUNT OF {validationResult.pct}% APPLIED SUCCESSFULLY
                  </p>
                )}
              </div>
            </div>
          )}

          {validationResult.status === "invalid" && (
            <div className="flex items-start space-x-3 rounded-xl bg-red-600/10 border border-red-500/20 p-4 animate-scaleUp">
              <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
              <p className="font-sans text-xs text-neutral-light leading-normal font-light">
                {validationResult.msg}
              </p>
            </div>
          )}

          {appliedPromo && validationResult.status === "idle" && (
            <div className="flex items-center space-x-2 text-[11px] font-mono text-pink-glow">
              <span className="h-2 w-2 rounded-full bg-pink-glow animate-pulse" />
              <span>ACTIVE COUPON CARD: {appliedPromo}</span>
            </div>
          )}

        </div>

        {/* 2. CORE OFFERS GALLERY */}
        <FeaturedOffers setCurrentPage={setCurrentPage} onApplyPromoCode={onApplyPromoCode} />

        {/* 3. DIGITAL GIFT VOUCHERS GALLERY (Extra Premium Feature) */}
        <div className="border-t border-purple-light/20 pt-12 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-2 rounded-full bg-purple-light/50 border border-purple-light px-3 py-1">
              <Gift className="h-3.5 w-3.5 text-yellow-400" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-yellow-400 font-mono">NezFood Gift Card</span>
            </div>
            <h2 className="font-display text-2xl font-extrabold text-white">
              Share the Joy of <span className="bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent font-display font-extrabold">Perfect Food</span>
            </h2>
            <p className="font-sans text-xs text-neutral-subtle font-light max-w-xl mx-auto leading-relaxed">
              Order dynamic digital gift vouchers immediately delivered via active email blocks, tailored with premium neon themes.
            </p>
          </div>

          {purchasedGift && (
            <div className="max-w-2xl mx-auto rounded-xl bg-purple-card animate-scaleUp border border-red-550/30 p-4 text-center">
              <p className="text-emerald-400 text-xs font-semibold">🎉 {purchasedGift}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { amount: "$25", title: "NezFood Quick Treat", color: "from-red-650 from-red-600 to-pink-500", desc: "Perfect for a heart-warming lunch or a delicious dessert treat." },
              { amount: "$50", title: "NezFood Cozy Dining", color: "from-red-600 to-yellow-500", desc: "Delight a pair of foodies with full customizable double main courses." },
              { amount: "$100", title: "NezFood Grand Feast", color: "from-red-600 via-rose-550 to-yellow-400", desc: "Perfect for family meals or major celebrations setup to spark joy." }
            ].map((gift, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-purple-light bg-purple-card/60 p-6 text-left transition-all duration-300 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10"
              >
                <div className="space-y-4">
                  
                  {/* Voucher Card Graphic Mockup */}
                  <div className={`rounded-xl bg-gradient-to-tr ${gift.color} p-5 aspect-16/10 relative overflow-hidden shadow-lg shadow-black/40`}>
                    
                    {/* Glowing graphic overlay */}
                    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-xl font-mono" />
                    
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="rounded-md bg-white/20 px-1.5 py-0.5 text-[8px] font-black uppercase text-white font-mono tracking-widest">NEZFOOD CARD</span>
                        <p className="font-display text-xs font-bold text-white mt-1">{gift.title}</p>
                      </div>
                      <Sparkles className="h-5 w-5 text-white/80" />
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                      <p className="font-mono text-[9px] text-white/70 tracking-widest">**** **** **** LOVE</p>
                      <h4 className="font-display text-3xl font-black text-white leading-none">{gift.amount}</h4>
                    </div>

                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display text-base font-bold text-white group-hover:text-pink-glow transition-colors">{gift.title} - {gift.amount}</h3>
                    <p className="font-sans text-xs text-neutral-subtle font-light leading-relaxed">{gift.desc}</p>
                  </div>

                </div>

                <div className="pt-4 border-t border-purple-light/20 mt-4">
                  <button
                    onClick={() => handleGiftPurchase(gift.amount, gift.title)}
                    className="w-full flex items-center justify-center space-x-2 rounded-xl bg-purple-light/80 border border-purple-light py-2 text-xs font-bold text-white hover:bg-pink-primary/10 hover:border-pink-primary/40 transition-all cursor-pointer focus:outline-none"
                  >
                    <span>Purchase Digital Code</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
