/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { testimonials } from "../data/testimonials";
import { Star, Quote, Award } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-purple-dark text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-purple-light/20">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 rounded-full bg-pink-primary/10 border border-pink-primary/30 px-3 py-1">
            <Award className="h-3.5 w-3.5 text-pink-glow" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-pink-glow">Verified Gastronomy Reviews</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl text-white">
            What Food Enthusiasts <span className="text-pink-glow">Are Saying</span>
          </h2>
          <p className="font-sans text-neutral-subtle font-light text-base">
            Read critical breakdowns from biochemists, tech professionals, and culinary writers who trust our precision dishes.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="relative flex flex-col justify-between rounded-2xl border border-purple-light/70 bg-purple-card/60 p-6 shadow-xl transition-all hover:border-pink-primary/35 hover:shadow-2xl"
            >
              {/* Quote icon accent on upper-right */}
              <Quote className="absolute top-5 right-5 h-8 w-8 text-purple-light/30 pointer-events-none" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex space-x-1">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="font-sans text-xs text-neutral-light italic font-light leading-relaxed">
                  "{test.comment}"
                </p>
                
                {/* Highlight Tags */}
                <div className="flex flex-wrap gap-1">
                  {test.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-pink-primary/10 border border-pink-primary/20 px-2 py-0.5 text-[9px] font-bold text-pink-glow font-mono"
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* User Bio Footer */}
              <div className="mt-6 flex items-center space-x-3 border-t border-purple-light/30 pt-4 text-left">
                <img
                  src={test.avatar}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="h-11 w-11 rounded-xl object-cover border border-purple-light"
                />
                <div>
                  <h4 className="font-display text-sm font-bold text-white">{test.name}</h4>
                  <p className="font-sans text-[11px] text-neutral-subtle leading-tight">{test.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
