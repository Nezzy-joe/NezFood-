/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface NezFoodLogoProps {
  className?: string;
  size?: number | string;
}

export default function NezFoodLogo({ className = "h-10 w-10", size }: NezFoodLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Absolute exact recreation of the original N-house blue shield logo */}
      
      {/* Navy Shield Base with Stepped Custom Tech-Cutout in top-right corner */}
      <path
        d="M 25,17 
           H 70 
           V 21 
           H 75 
           V 70 
           L 50,90 
           L 25,70 
           Z"
        fill="#2c346a"
      />

      {/* Cyber/Tech Connected Squares in top-right area */}
      <rect x="71.5" y="17.5" width="3.5" height="3.5" fill="#00aeef" />
      <rect x="75.5" y="17.5" width="2.5" height="2.5" fill="#ffffff" />
      <rect x="75.5" y="21" width="3" height="3" fill="#00aeef" />
      <rect x="71.5" y="22" width="2" height="2" fill="#ffffff" />
      
      {/* Decorative connection nodes/lines for high-tech culinary vibe */}
      <line x1="73.25" y1="19.25" x2="77" y2="19.25" stroke="#ffffff" strokeWidth="0.75" />
      <line x1="77" y1="19.25" x2="77" y2="22.5" stroke="#00aeef" strokeWidth="0.75" />

      {/* House contour structure in brilliant white */}
      {/* Triangular Roof with proper peak and overhangs */}
      <path
        d="M 31,45 
           L 50,26 
           L 69,45"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      
      {/* Clean vertical Chimney on the right slope of the roof */}
      <path
        d="M 59,34 
           V 26 
           H 64 
           V 39"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />

      {/* Left House Column/Pillar */}
      <path
        d="M 36.5,45 
           V 72"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="square"
      />

      {/* Right House Column/Pillar */}
      <path
        d="M 63.5,45 
           V 72"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="square"
      />

      {/* The majestic cyan central 'N' inside the house walls */}
      <path
        d="M 43,72 
           V 49 
           L 57,72 
           V 49"
        stroke="#00aeef"
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
