/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, HelpCircle, CheckCircle2, User, Heart } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", msg: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Simulated Chat state
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([
    { sender: "bot", text: "Hello! I am your NezFood customer helper. Ask me about our fresh organic ingredients, delivery areas, food customizations, or reward and discount codes!" }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isBotThinking, setIsBotThinking] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.msg) {
      setIsSubmitted(true);
      setFormState({ name: "", email: "", msg: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChatTrigger = (question: string) => {
    if (isBotThinking) return;
    
    // Add User message
    const updatedMsgs = [...messages, { sender: "user" as const, text: question }];
    setMessages(updatedMsgs);
    setIsBotThinking(true);

    // Compute answer dynamically based on keywords
    setTimeout(() => {
      let reply = "I couldn't find a precise match for that. Feel free to ask me about our fresh ingredients, delivery areas, or promo codes!";
      
      const normalized = question.toLowerCase();
      if (normalized.includes("sourcing") || normalized.includes("organic") || normalized.includes("farm") || normalized.includes("beets") || normalized.includes("ingredients")) {
        reply = "We source 100% of our vegetables, herbs, and ingredients from verified local premium farms. Every dish is cooked using clean, organic olive oil or real butter, ensuring premium nutrition and natural richness.";
      } else if (normalized.includes("prep") || normalized.includes("wait") || normalized.includes("pickup") || normalized.includes("arrive") || normalized.includes("timing")) {
        reply = "Our kitchen prepares meals to order. If you order for pickup, we time our baking and searing so that your food is packaged precisely 2 minutes before your arrival, keeping it fresh, hot, and delicious.";
      } else if (normalized.includes("coupon") || normalized.includes("discount") || normalized.includes("code") || normalized.includes("save") || normalized.includes("promo")) {
        reply = "You can use code 'NEZWELCOME' for 20% off your first order! We also have code 'EXPRESS15' if you're ordering during our weekday lunch hours.";
      } else if (normalized.includes("custom") || normalized.includes("gluten") || normalized.includes("allergen") || normalized.includes("vegan")) {
        reply = "Yes, absolutely! Open any dish details on our menu to customize options. You can exclude specific ingredients, choose gluten-free crusts, or toggle dietary preferences directly.";
      } else if (normalized.includes("hi") || normalized.includes("hello") || normalized.includes("hey")) {
        reply = "Hello! Thanks for reaching out to NezFood. How can I help you today with your menu selection or order questions?";
      }

      setMessages((prev) => [...prev, { sender: "bot" as const, text: reply }]);
      setIsBotThinking(false);
    }, 1200);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isBotThinking) return;
    const txt = chatInput;
    setChatInput("");
    handleChatTrigger(txt);
  };

  return (
    <div id="contact-view" className="bg-purple-dark text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-12 animate-fadeIn">
      <div className="mx-auto max-w-7xl">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 rounded-full bg-pink-primary/10 border border-pink-primary/30 px-3 py-1">
            <MessageSquare className="h-3.5 w-3.5 text-pink-glow animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-pink-glow">Support &amp; Chat</span>
          </div>
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl text-white">
            Contact Us &amp; <span className="text-pink-glow">Live Chat</span>
          </h1>
          <p className="font-sans text-neutral-subtle font-light text-xs max-w-xl mx-auto leading-relaxed">
            Have questions about NezFood? Send us a message below, or chat with our automated virtual helper for instant support and guidance.
          </p>
        </div>

        {/* 2-COLUMN LAYOUT: TICKET FORM (LEFT) & CHATBOT (RIGHT) */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 max-w-6xl mx-auto">
          
          {/* LEFT COMPONENT: SUBMIT DIGITAL TICKET */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-purple-light bg-purple-card/75 p-6 sm:p-8 text-left space-y-6">
            
            <div className="space-y-2">
              <h3 className="font-display text-lg font-bold text-white tracking-tight">Send Us a Message</h3>
              <p className="font-sans text-xs text-neutral-subtle font-light">
                Fill out our form and our customer support team will reply via email within 4 hours.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="font-mono text-[9px] text-pink-glow uppercase font-bold">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="E.g. Elon Miller"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-xl border border-purple-light/70 bg-purple-dark px-4 py-3 text-xs text-white focus:border-pink-primary/60 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[9px] text-pink-glow uppercase font-bold">Your Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="E.g. elon@miller.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-xl border border-purple-light/70 bg-purple-dark px-4 py-3 text-xs text-white focus:border-pink-primary/60 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[9px] text-pink-glow uppercase font-bold">Your Message / Dietary Notes</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Type your notes on food preferences, catering requests, or delivery feedback..."
                  value={formState.msg}
                  onChange={(e) => setFormState({ ...formState, msg: e.target.value })}
                  className="w-full rounded-xl border border-purple-light/70 bg-purple-dark px-4 py-3 text-xs text-white focus:border-pink-primary/60 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-pink-primary hover:bg-pink-hover text-white text-xs font-bold py-3.5 shadow-lg shadow-pink-primary/10 transition-colors flex items-center justify-center space-x-2 cursor-pointer focus:outline-none"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </button>

              {isSubmitted && (
                <div className="flex items-start space-x-2 rounded-xl bg-emerald-600/10 border border-emerald-500/20 p-3 animate-scaleUp">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                  <p className="font-sans text-[11px] text-neutral-light leading-normal">
                    ✓ Message sent successfully! Expect an email reply shortly.
                  </p>
                </div>
              )}
            </form>

            {/* Contact Details */}
            <div className="border-t border-purple-light/35 pt-6 space-y-4 font-sans text-xs text-neutral-subtle font-light">
              <div className="space-y-3">
                <div className="flex items-center space-x-2.5">
                  <Phone className="h-4 w-4 text-pink-glow" />
                  <span>+1 (415) 555-0192 (Central Hub)</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Mail className="h-4 w-4 text-pink-glow" />
                  <span>support@nezfood.com</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <MapPin className="h-4 w-4 text-pink-glow" />
                  <span>482 Tech Parkway, Suite 100, San Francisco, CA</span>
                </div>
              </div>

              {/* WhatsApp Button Placeholder */}
              <div className="pt-2">
                <a
                  href="https://wa.me/14155550192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 transition-colors shadow-lg shadow-emerald-600/10 focus:outline-none cursor-pointer"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.022-.014-.507-.25-1.114-.3c-.607-.05-1.018.15-1.246.425-.228.275-.858 1.075-1.05 1.288-.192.213-.383.242-.717.074a9.141 9.141 0 0 1-2.616-1.614 9.124 9.124 0 0 1-1.81-2.253c-.188-.328-.02-.507.147-.674.15-.15.33-.383.495-.575.165-.192.22-.328.33-.547.11-.219.055-.411-.027-.575-.082-.164-.718-1.73-.984-2.373-.26-.627-.522-.54-1.114-.54l-.423-.004c-.39 0-.916.148-1.268.53a3.578 3.578 0 0 0-1.115 2.654c0 1.564 1.14 3.072 1.3 3.284.16.213 2.23 3.4 5.4 4.773.753.327 1.342.523 1.802.668.756.24 1.442.206 1.986.126.607-.09 1.866-.763 2.132-1.46.267-.697.267-1.298.188-1.423-.075-.125-.28-.199-.54-.338zM12 2C6.477 2 2 6.477 2 12a9.96 9.96 0 0 0 2.593 6.697l-1.69 4.975 5.145-1.353A9.959 9.959 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.07-1.11l-.29-.172-3.028.797.81-2.385-.19-.304A7.96 7.96 0 1 1 12 20z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COMPONENT: PLAYABLE CHATBOT COMPONENT */}
          <div className="lg:col-span-6 rounded-2xl border border-pink-primary/40 bg-purple-card/75 p-6 flex flex-col justify-between text-left relative overflow-hidden h-[540px]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-primary via-purple-bright to-pink-primary" />
            
            {/* Chatbot Header */}
            <div className="flex items-center justify-between border-b border-purple-light/40 pb-4 mb-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-pink-primary/10 text-pink-glow border border-pink-primary/30 flex items-center justify-center">
                  <Heart className="h-4 w-4 fill-pink-primary/10 text-pink-glow" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase">NezFood Chat Assistant</h4>
                  <p className="font-mono text-[9px] text-pink-glow">ONLINE &amp; READY TO HELP</p>
                </div>
              </div>
            </div>

            {/* Messages Log area */}
            <div className="flex-1 overflow-y-auto space-y-3.5 pr-2 mb-4 scrollbar-thin">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
                >
                  <div
                    className={`rounded-2xl px-4 py-3 text-xs max-w-[85%] leading-relaxed ${
                      m.sender === "user"
                        ? "bg-pink-primary/20 border border-pink-primary/30 text-white"
                        : "bg-purple-dark text-neutral-light border border-purple-light"
                    }`}
                  >
                    <p className="font-sans font-light leading-normal">{m.text}</p>
                    <p className="text-[8px] text-neutral-subtle font-mono text-right mt-1 uppercase">
                      {m.sender === "user" ? "user query" : "assistant response"}
                    </p>
                  </div>
                </div>
              ))}

              {isBotThinking && (
                <div className="flex justify-start">
                  <div className="rounded-2xl px-4 py-3 text-xs bg-purple-dark text-neutral-subtle border border-purple-light/50 flex items-center space-x-1.5 font-light animate-pulse">
                    <Sparkles className="h-3 w-3 animate-spin text-pink-glow" />
                    <span>Typing...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick suggestions helper */}
            <div className="space-y-1.5 pb-3">
              <span className="font-mono text-[9px] text-neutral-subtle font-bold uppercase tracking-wide">Suggested questions:</span>
              <div className="flex flex-wrap gap-1">
                {[
                  "Where do you source ingredients?",
                  "Active coupons code?",
                  "Gluten allergen adjustments?",
                  "Tell me about cooking times!"
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => handleChatTrigger(q)}
                    disabled={isBotThinking}
                    className="rounded bg-purple-dark hover:bg-purple-light border border-purple-light/60 hover:border-pink-primary/40 px-2 py-1 text-[9px] font-semibold text-pink-glow cursor-pointer disabled:opacity-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input form for Chat */}
            <form onSubmit={handleCustomSend} className="flex space-x-2">
              <input
                type="text"
                disabled={isBotThinking}
                placeholder="Ask about ingredients, delivery or offers..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="w-full rounded-xl border border-purple-light/70 bg-purple-dark px-4 py-3 text-xs text-white placeholder-neutral-subtle disabled:opacity-50 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isBotThinking}
                className="rounded-xl bg-pink-primary text-white p-3 shrink-0 disabled:opacity-50 hover:bg-pink-hover"
              >
                <Send className="h-4.5 w-4.5" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </div>
  );
}
