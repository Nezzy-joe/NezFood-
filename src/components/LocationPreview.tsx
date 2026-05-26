/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MapPin, Navigation, Clock, ShieldCheck, HelpCircle } from "lucide-react";

export default function LocationPreview() {
  const hubs = [
    {
      name: "NezFood Central Kitchen",
      address: "482 Tech Parkway, Suite 100, San Francisco",
      hours: "9:00 AM - 11:30 PM Everyday",
      tele: "+1 (415) 555-0192",
      badge: "Central Kitchen"
    },
    {
      name: "NezFood Downtown Express",
      address: "105 Pine St, Boston",
      hours: "10:00 AM - 10:00 PM Everyday",
      tele: "+1 (617) 555-0143",
      badge: "Express Hub"
    }
  ];

  return (
    <section className="bg-purple-darker text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-purple-light/20 relative">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
          
          {/* Text and list details on the left */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 rounded-full bg-pink-primary/10 border border-pink-primary/30 px-3 py-1">
                <Navigation className="h-3.5 w-3.5 text-pink-glow animate-bounce" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-pink-glow">Kitchen Locations</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold sm:text-4xl text-white">
                Fresh local kitchens <br />
                <span className="text-gradient-pink">built inside active hubs</span>
              </h2>
              <p className="font-sans text-xs text-neutral-subtle font-light leading-relaxed max-w-xl">
                We operate modern, pristine local kitchens in active districts. Each hub guarantees rapid 15-minute express curbside pickup as well as optimized delivery to ensure your meals arrive hot and fresh.
              </p>
            </div>

            {/* List of active hubs */}
            <div className="space-y-5">
              {hubs.map((hub, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-purple-light/75 bg-purple-card/75 p-5 flex items-start space-x-4 transition-all hover:border-pink-primary/45 hover:bg-purple-card"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-primary/10 border border-pink-primary/30 text-pink-glow shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-1 text-left">
                    <div className="flex items-center space-x-2">
                       <h3 className="font-display text-sm font-bold text-white">{hub.name}</h3>
                      <span className="rounded bg-pink-primary/20 px-1.5 py-0.5 text-[9px] font-bold text-pink-glow">
                        {hub.badge}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-neutral-subtle font-light">{hub.address}</p>
                    <div className="flex items-center space-x-3 pt-1 text-[11px] text-neutral-subtle font-mono">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3.5 w-3.5 text-pink-glow" />
                        <span>{hub.hours}</span>
                      </div>
                      <span>•</span>
                      <span>{hub.tele}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Extra assurance */}
            <div className="rounded-xl border border-dashed border-purple-light/50 bg-purple-light/10 p-4 flex items-center space-x-3 max-w-lg">
              <ShieldCheck className="h-6 w-6 text-emerald-400 shrink-0" />
              <p className="font-sans text-xs text-neutral-subtle leading-normal">
                All NezFood kitchens adhere to premium hygiene and safety standards. We use eco-friendly prep methods and secure bio-degradable packaging.
              </p>
            </div>

          </div>

          {/* Styled Tech-Map mockup visual on the right */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-primary/5 to-purple-bright/5 rounded-3xl pointer-events-none" />
            
            <div className="relative w-full h-[350px] sm:h-[450px] rounded-3xl overflow-hidden border border-purple-light/60 bg-purple-card shadow-2xl p-6 flex flex-col justify-between">
              
              {/* Graphic background styled as tech coordinates */}
              <div className="absolute inset-0 opacity-[0.06] select-none pointer-events-none">
                <div className="w-full h-full bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]" />
              </div>

              {/* Fake dynamic HUD indicators */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center space-x-1.5 rounded-md bg-purple-darker/90 border border-purple-light px-2.5 py-1">
                  <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-ping" />
                  <span className="font-mono text-[9px] text-neutral-subtle uppercase">KITCHENS: ACTIVE</span>
                </div>
                <span className="font-mono text-[10px] text-pink-glow">NezFood HUB: SF-01</span>
              </div>

              {/* Styled geometric interactive circles representing locations */}
              <div className="absolute inset-0 m-auto h-48 w-48 rounded-full bg-pink-primary/5 border border-pink-primary/15 flex items-center justify-center">
                <div className="h-32 w-32 rounded-full bg-pink-primary/5 border border-pink-primary/20 flex items-center justify-center animate-pulse">
                  <div className="h-16 w-16 rounded-full bg-pink-primary/20 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-pink-glow shadow-md shadow-pink-glow" />
                  </div>
                </div>
              </div>

              {/* Static overlay pointers */}
              <div className="absolute top-[30%] left-[35%] z-10 text-center animate-bounce">
                <div className="rounded-lg bg-pink-primary/95 text-white py-1 px-2 font-display text-[10px] font-bold shadow-lg">
                  Central Kitchen
                </div>
                <div className="w-0.5 h-4 bg-pink-primary mx-auto" />
              </div>

              <div className="absolute bottom-[25%] right-[28%] z-10 text-center" style={{ animationDelay: '1s' }}>
                <div className="rounded-lg bg-purple-bright/95 text-white py-1 px-2 font-display text-[10px] font-bold shadow-lg">
                  Express Hub
                </div>
                <div className="w-0.5 h-4 bg-purple-bright mx-auto" />
              </div>

              {/* Legend details below Map mockup */}
              <div className="rounded-xl bg-purple-darker/90 border border-purple-light/50 p-4 z-10 flex justify-between space-x-4">
                <div className="text-left space-y-0.5">
                  <h4 className="font-display text-xs font-bold text-white">Direct Freshness Circle</h4>
                  <p className="font-sans text-[11px] text-neutral-subtle font-light font-mono">Express delivery zones listed in glow</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[9px] text-pink-glow uppercase">RADIUS</p>
                  <p className="font-display text-xs font-extrabold text-white">5.5 MILES</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
