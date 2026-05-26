/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { faqs } from "../data/faqs";
import { HelpCircle, ChevronDown, ChevronUp, Search, Sparkles } from "lucide-react";

export default function FAQPreview() {
  const [openFAQId, setOpenFAQId] = useState<string | null>("f1");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Kitchen & Delivery", "Ordering & Pickup", "Payments & Policy", "Sourcing & Sustainability"];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: string) => {
    setOpenFAQId(openFAQId === id ? null : id);
  };

  return (
    <section className="bg-purple-dark text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-purple-light/20">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 rounded-full bg-pink-primary/10 border border-pink-primary/30 px-3 py-1">
            <HelpCircle className="h-3.5 w-3.5 text-pink-glow animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-pink-glow">Interactive Knowledge Base</span>
          </div>
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl text-white">
            Platform FAQs &amp; <span className="text-pink-glow">Kitchen Answers</span>
          </h2>
          <p className="font-sans text-neutral-subtle font-light text-xs">
            Learn more about our fresh organic sourcing, customized recipe preparations, pristine delivery, and refund policies.
          </p>
        </div>

        {/* Search and category filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search specific questions (e.g. customized ingredients, organic, gluten)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-purple-light/70 bg-purple-card/75 py-3 pl-11 pr-4 text-xs text-white placeholder-neutral-subtle focus:border-pink-primary/60 focus:outline-none focus:ring-1 focus:ring-pink-primary/30"
            />
            <Search className="absolute left-4 top-3.5 h-4.5 w-4.5 text-neutral-subtle" />
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 text-2xs font-semibold border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-pink-primary border-pink-primary text-white shadow-md"
                    : "bg-purple-card/60 border-purple-light/50 text-neutral-subtle hover:border-pink-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ Cards */}
        {filteredFAQs.length > 0 ? (
          <div className="space-y-3">
            {filteredFAQs.map((faq) => {
              const isOpen = openFAQId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-purple-light/75 bg-purple-card/60 overflow-hidden transition-all duration-300 hover:border-pink-primary/35"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-purple-light/10 focus:outline-none"
                  >
                    <span className="font-display text-sm font-bold text-white pr-4">
                      {faq.question}
                    </span>
                    <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg bg-purple-light text-pink-glow">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-purple-light/30 bg-purple-darker/60 p-5 text-left font-sans text-xs text-neutral-subtle font-light leading-relaxed space-y-2">
                      <p>{faq.answer}</p>
                      <div className="flex items-center space-x-1.5 pt-2 border-t border-purple-light/20 font-mono text-[9px] text-pink-glow uppercase">
                        <Sparkles className="h-3 w-3" />
                        <span>Category: {faq.category} • Certified Safe</span>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center rounded-2xl border border-dashed border-purple-light/60 p-12 space-y-2">
            <HelpCircle className="h-8 w-8 text-neutral-subtle mx-auto animate-pulse" />
            <h4 className="font-display text-sm font-bold text-white">No Matching Questions Found</h4>
            <p className="font-sans text-xs text-neutral-subtle">Try adjusting your filters or keyword query above.</p>
          </div>
        )}

      </div>
    </section>
  );
}
