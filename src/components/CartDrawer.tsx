/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { MenuItem, CartItem } from "../types";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, AlertCircle, CheckCircle2, RefreshCw, MapPin } from "lucide-react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number, customizations?: string) => void;
  onRemoveItem: (itemId: string, customizations?: string) => void;
  appliedPromo: string | null;
  onApplyPromoCode: (code: string) => void;
  onClearCart?: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  appliedPromo,
  onApplyPromoCode,
  onClearCart,
}: CartDrawerProps) {
  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState("");
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "submitting" | "tracking">("cart");
  const [trackingStage, setTrackingStage] = useState(0);

  // Auto-sync or preset promo input field if appliedPromo is set by pages
  useEffect(() => {
    if (appliedPromo) {
      setPromoInput(appliedPromo);
      setPromoSuccess(`Voucher ${appliedPromo} verified! Saved on your order.`);
    }
  }, [appliedPromo]);

  // Handle step-by-step order tracker simulator triggers
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (checkoutStep === "submitting") {
      timer = setTimeout(() => {
        setCheckoutStep("tracking");
        setTrackingStage(0);
      }, 2000);
    } else if (checkoutStep === "tracking" && trackingStage < 3) {
      timer = setTimeout(() => {
        setTrackingStage((prev) => prev + 1);
      }, 5000); // Progress tracking steps every 5 seconds
    }
    return () => clearTimeout(timer);
  }, [checkoutStep, trackingStage]);

  if (!isOpen) return null;

  // Calculators
  const subtotal = cart.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  
  // Calculate promo discount percentage
  const getPromoPercentage = () => {
    if (!appliedPromo) return 0;
    const code = appliedPromo.toUpperCase();
    if (code === "NEZWELCOME") return 20;
    if (code === "EXPRESS15") return 15;
    if (code === "FEAST25") return 25;
    if (code === "NEZLOVE") return 30;
    return 0;
  };

  const discountPercentage = getPromoPercentage();
  const discountAmount = subtotal * (discountPercentage / 100);
  const total = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const query = promoInput.trim().toUpperCase();
    if (["NEZWELCOME", "EXPRESS15", "FEAST25", "NEZLOVE"].includes(query)) {
      onApplyPromoCode(query);
      setPromoSuccess(`Promotional coupon verified! Activated -${getPromoPercentage()}% discount.`);
      setPromoError("");
    } else {
      setPromoError("Invalid promotion code. Please check the spelling of the voucher.");
      setPromoSuccess("");
    }
  };

  const handlePlaceOrder = () => {
    setCheckoutStep("submitting");
  };

  const handleResetCheckout = () => {
    setCheckoutStep("cart");
    setTrackingStage(0);
    if (onClearCart) onClearCart();
  };

  const trackingStages = [
    { label: "Order Received", details: "We have received your order and are selecting fresh ingredients." },
    { label: "Preparing Your Feast", details: "Our expert chefs are cooking your meal with focus, care, and love." },
    { label: "Packaged with Care", details: "Sealed in eco-friendly, heat-retaining packaging to stay fresh and warm." },
    { label: "Out for Delivery", details: "Your delicious meals are on their way to you, fresh and satisfying!" }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans text-xs">
      {/* Black backdrop overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full pl-10 flex">
        <div className="w-screen max-w-md bg-purple-dark text-white border-l border-purple-light/40 flex flex-col justify-between shadow-2xl relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-primary via-purple-bright to-pink-primary" />
          
          {/* Header section of cart drawer */}
          <div className="p-6 border-b border-purple-light/40 flex items-center justify-between text-left">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-4.5 w-4.5 text-pink-glow animate-pulse" />
              <h2 className="font-display text-sm font-bold tracking-widest uppercase">
                {checkoutStep === "tracking" ? "Order Status" : "Your Cart"}
              </h2>
            </div>
            <button
               onClick={onClose}
              className="text-neutral-subtle hover:text-white rounded-lg h-8 w-8 flex items-center justify-center border border-purple-light/45 hover:border-white focus:outline-none"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* MAIN INTERNAL CONTENT STREAM */}
          {checkoutStep === "cart" && (
            <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col">
              
              {cart.length > 0 ? (
                <>
                  {/* Cart items listing */}
                  <div className="space-y-4 flex-1">
                    {cart.map((item, idx) => (
                      <div
                        key={`${item.menuItem.id}-${idx}`}
                        className="rounded-xl border border-purple-light/70 bg-purple-card/75 p-4 flex items-start justify-between space-x-3 text-left transition-all hover:border-pink-primary/30"
                      >
                        {/* Food Image thumbnail */}
                        <img
                          src={item.menuItem.image}
                          alt={item.menuItem.name}
                          referrerPolicy="no-referrer"
                          className="h-14 w-14 rounded-lg object-cover border border-purple-light shrink-0"
                        />

                        {/* Details and quantity trigger */}
                        <div className="flex-1 space-y-1">
                          <h4 className="font-display text-xs font-bold text-white leading-tight">
                            {item.menuItem.name}
                          </h4>
                          {item.customizations && (
                            <p className="font-mono text-[9px] text-pink-glow leading-none font-medium">
                              {item.customizations}
                            </p>
                          )}
                          <p className="font-mono text-[10px] text-neutral-subtle">
                            ${item.menuItem.price.toFixed(2)} each
                          </p>

                          {/* Minus, Quantity state, Plus indicators */}
                          <div className="flex items-center space-x-2 pt-1.5">
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, Math.max(1, item.quantity - 1), item.customizations)}
                              className="h-6 w-6 rounded bg-purple-light flex items-center justify-center hover:bg-pink-primary/20 hover:text-pink-glow transition-all"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="font-mono font-bold text-white text-xs px-1.5">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity + 1, item.customizations)}
                              className="h-6 w-6 rounded bg-purple-light flex items-center justify-center hover:bg-pink-primary/20 hover:text-pink-glow transition-all"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>

                        {/* Delete Trash icon button */}
                        <div className="text-right flex flex-col justify-between h-16 items-end">
                          <span className="font-display font-medium text-white">
                            ${(item.menuItem.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => onRemoveItem(item.menuItem.id, item.customizations)}
                            className="text-neutral-subtle hover:text-red-400 p-1 rounded hover:bg-purple-light/40 transition-colors cursor-pointer"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>

                      </div>
                    ))}
                  </div>

                  {/* Promo Coupons Input terminal */}
                  <div className="border-t border-purple-light/40 pt-5 space-y-2">
                    <p className="font-mono text-[9px] text-neutral-subtle uppercase font-bold tracking-wide">Enter Promo Code</p>
                    <form onSubmit={handleApplyPromo} className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="E.G. NEURAL20"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        className="w-full rounded-lg border border-purple-light/75 bg-purple-dark px-3 py-2 text-2xs text-white uppercase tracking-wider font-mono"
                      />
                      <button
                        type="submit"
                        className="rounded-lg bg-purple-light border border-purple-light hover:border-pink-primary/40 px-4 py-2 text-2xs font-extrabold text-white transition-all cursor-pointer"
                      >
                        Apply
                      </button>
                    </form>
                    {promoError && <p className="font-sans text-[10px] text-red-400 font-light text-left">{promoError}</p>}
                    {promoSuccess && <p className="font-sans text-[10px] text-emerald-400 font-semibold text-left">✓ {promoSuccess}</p>}
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center space-y-3.5 text-center my-auto">
                  <div className="h-14 w-14 rounded-full bg-purple-light flex items-center justify-center text-neutral-subtle">
                    <ShoppingBag className="h-6 w-6 animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white">Your Cart is Empty</h4>
                    <p className="font-sans text-xs text-neutral-subtle font-light max-w-xs mx-auto">
                      Explore our delicious dishes in the Menu section and add them to your cart.
                    </p>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* LOADING CULINARY STEPS SEQUENCE */}
          {checkoutStep === "submitting" && (
            <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-4 text-center my-auto animate-fadeIn">
              <RefreshCw className="h-10 w-10 text-pink-glow animate-spin" />
              <div className="space-y-1">
                <h4 className="font-display text-sm font-extrabold text-white">Submitting your order</h4>
                <p className="font-sans text-xs text-neutral-subtle font-light max-w-xs">
                  Sending your selections to NezFood professional kitchen. Sourcing ingredients and coordinating chefs for swift preparation.
                </p>
              </div>
            </div>
          )}

          {/* DYNAMIC PIPELINE ORDER TRACKER */}
          {checkoutStep === "tracking" && (
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-left animate-fadeIn">
              
              <div className="rounded-xl border border-pink-primary/40 bg-purple-card p-4 space-y-3 text-left">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-[10px] text-pink-glow font-bold uppercase">ORDER ID</span>
                  <span className="font-mono text-[10px] text-white">#NZF-8201</span>
                </div>
                <div className="h-1.5 w-full bg-purple-dark rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-pink-primary to-pink-glow rounded-full transition-all duration-1000"
                    style={{ width: `${((trackingStage + 1) / 4) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-[9px] text-neutral-subtle font-mono uppercase">
                  <span>SENT</span>
                  <span>COOKING</span>
                  <span>PACKING</span>
                  <span>ON THE WAY</span>
                </div>
              </div>

              {/* Steps timeline display */}
              <div className="space-y-6 relative pl-6">
                
                {/* Vertical tracking bar line */}
                <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-purple-light/40" />

                {trackingStages.map((stage, idx) => {
                  const isActive = trackingStage >= idx;
                  const isCurrent = trackingStage === idx;
                  return (
                    <div key={idx} className="relative space-y-1">
                      {/* Left timeline bubble indicators */}
                      <span
                        className={`absolute -left-[21px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border text-[8px] font-black font-mono transition-all ${
                          isCurrent
                            ? "bg-pink-primary border-pink-glow text-white ring-4 ring-pink-primary/20 scale-110 animate-pulse"
                            : isActive
                            ? "bg-emerald-600 border-emerald-400 text-white"
                            : "bg-purple-dark border-purple-light/60 text-neutral-subtle"
                        }`}
                      >
                        {isActive ? "✓" : idx + 1}
                      </span>

                      <h5 className={`font-display text-xs font-bold leading-none ${isActive ? "text-white" : "text-neutral-subtle font-medium"}`}>
                        {stage.label}
                      </h5>
                      <p className="font-sans text-[11px] text-neutral-subtle font-light leading-normal">
                        {stage.details}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Complete ready instructions inside tracker */}
              {trackingStage === 3 && (
                <div className="flex items-start space-x-2.5 rounded-xl bg-emerald-600/10 border border-emerald-500/20 p-4 animate-scaleUp">
                  <MapPin className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5 animate-bounce" />
                  <div className="space-y-1">
                    <p className="font-sans text-xs text-neutral-light font-bold">Courier En Route!</p>
                    <p className="font-sans text-[10px] text-neutral-subtle leading-normal font-light">
                      Your NezFood order is prepared, packaged under pristine hygiene standards, and is actively being delivered straight to you with care and love.
                    </p>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* LOWER FIXED PRICE CALCULATIONS CARD & SUBMIT FOOTER */}
          <div className="p-6 border-t border-purple-light/40 bg-purple-card/75 space-y-4">
            
            {checkoutStep === "cart" && cart.length > 0 && (
              <div className="space-y-3.5">
                <div className="space-y-1.5 font-sans text-xs font-light text-neutral-subtle leading-none">
                  <div className="flex justify-between">
                    <span>Menu Subtotal</span>
                    <span className="text-white font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  {discountPercentage > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Voucher Discount (-{discountPercentage}%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className="text-emerald-400 font-semibold uppercase">FREE</span>
                  </div>
                </div>

                <div className="flex justify-between border-t border-purple-light/40 pt-3 text-left">
                  <div className="space-y-0.5">
                    <p className="font-mono text-[9px] text-neutral-subtle uppercase leading-none">TOTAL AMOUNT</p>
                    <p className="font-display text-xl font-black text-white leading-none mt-0.5">${total.toFixed(2)}</p>
                  </div>

                  <button
                    onClick={handlePlaceOrder}
                    className="flex items-center space-x-2 rounded-xl bg-pink-primary hover:bg-pink-hover text-white text-xs font-bold px-6 py-3 shadow-lg shadow-pink-primary/15 whitespace-nowrap cursor-pointer transition-colors focus:outline-none"
                  >
                    <span>Order Now</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            )}

            {checkoutStep === "tracking" && (
              <button
                onClick={handleResetCheckout}
                className="w-full rounded-xl bg-purple-light hover:bg-purple-light/90 text-white text-xs font-bold py-3 text-center focus:outline-none"
              >
                Order Again
              </button>
            )}

            {cart.length === 0 && checkoutStep === "cart" && (
              <button
                onClick={onClose}
                className="w-full rounded-xl bg-purple-light hover:bg-purple-light/90 text-neutral-subtle hover:text-white text-xs font-bold py-3 text-center focus:outline-none cursor-pointer"
              >
                Close Cart
              </button>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
