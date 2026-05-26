/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import FAQPreview from "../components/FAQPreview";
import { HelpCircle, Sparkles, MessageSquare } from "lucide-react";

interface FAQPageProps {
  setCurrentPage: (page: string) => void;
}

export default function FAQ({ setCurrentPage }: FAQPageProps) {
  return (
    <div id="faq-view" className="bg-purple-dark text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-12 animate-fadeIn">
      <div className="mx-auto max-w-7xl">
        
        {/* Core Expandable Accordions FAQ Panel */}
        <FAQPreview />

        {/* Dynamic Help Center Card Callout below Accordion */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-dashed border-purple-light/80 bg-purple-card/45 p-6 text-center space-y-4">
          <HelpCircle className="h-8 w-8 text-pink-glow mx-auto animate-pulse" />
          <div className="space-y-1">
            <h3 className="font-display text-base font-bold text-white">Still Have Questions?</h3>
            <p className="font-sans text-xs text-neutral-subtle font-light max-w-lg mx-auto leading-relaxed">
              Our hospitality team and expert chefs are available to assist with custom recipes, large-scale catering options, or family event planning.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentPage("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center space-x-1.5 rounded-xl bg-purple-light/60 border border-purple-light px-4 py-2.5 text-xs font-bold text-white hover:bg-pink-primary/25 hover:border-pink-primary/45 transition-all focus:outline-none"
          >
            <MessageSquare className="h-4 w-4 text-pink-glow" />
            <span>Chat with our Assistant</span>
          </button>
        </div>

      </div>
    </div>
  );
}
