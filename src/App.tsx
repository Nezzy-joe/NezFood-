/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import CartDrawer from "./components/CartDrawer";
import { MenuItem, CartItem } from "./types";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  // High-performance User taste profile alignment state
  const [userTasteProfile, setUserTasteProfile] = useState({
    highProtein: false,
    lowCalorie: false,
    glutenFree: false,
    vegetarian: false,
    spicyLoved: false,
  });

  // Global cart operations
  const handleAddToCart = (
    item: MenuItem,
    customizations?: string,
    selectedIngredients?: string[]
  ) => {
    setCart((prev) => {
      // Find if entry matching itemId AND customizations already exists
      const existingIdx = prev.findIndex(
        (c) =>
          c.menuItem.id === item.id &&
          (c.customizations || "") === (customizations || "")
      );

      if (existingIdx > -1) {
        const cloned = [...prev];
        cloned[existingIdx].quantity += 1;
        return cloned;
      } else {
        return [
          ...prev,
          {
            menuItem: item,
            quantity: 1,
            customizations: customizations,
            selectedIngredients: selectedIngredients,
          },
        ];
      }
    });
  };

  const handleUpdateQuantity = (
    itemId: string,
    newQty: number,
    customizations?: string
  ) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (
            item.menuItem.id === itemId &&
            (item.customizations || "") === (customizations || "")
          ) {
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (itemId: string, customizations?: string) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.menuItem.id === itemId &&
            (item.customizations || "") === (customizations || "")
          )
      )
    );
  };

  const handleApplyPromoCode = (code: string) => {
    setAppliedPromo(code);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleOpenTastePredictor = () => {
    setCurrentPage("menu");
    setUserTasteProfile({
      highProtein: true, // Auto-expand options to make it active and fun
      lowCalorie: false,
      glutenFree: false,
      vegetarian: false,
      spicyLoved: false,
    });
    // Scroll directly to the taste engine widget smoothly
    setTimeout(() => {
      const widget = document.getElementById("menu-view");
      if (widget) {
        widget.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Render Page dispatcher
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Home
            setCurrentPage={setCurrentPage}
            onOpenTastePredictor={handleOpenTastePredictor}
            onApplyPromoCode={handleApplyPromoCode}
          />
        );
      case "menu":
        return (
          <Menu
            onAddToCart={handleAddToCart}
            cart={cart}
            setIsCartOpen={setIsCartOpen}
            userTasteProfile={userTasteProfile}
            setUserTasteProfile={setUserTasteProfile}
          />
        );
      case "offers":
        return (
          <Offers
            setCurrentPage={setCurrentPage}
            onApplyPromoCode={handleApplyPromoCode}
            appliedPromo={appliedPromo}
          />
        );
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "faq":
        return <FAQ setCurrentPage={setCurrentPage} />;
      default:
        return (
          <Home
            setCurrentPage={setCurrentPage}
            onOpenTastePredictor={handleOpenTastePredictor}
            onApplyPromoCode={handleApplyPromoCode}
          />
        );
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-purple-darker overflow-x-hidden selection:bg-pink-primary selection:text-white">
      {/* Absolute Dynamic Grid backdrop lines */}
      <div className="fixed inset-0 h-full w-full bg-[linear-gradient(to_right,#2a133d_1px,transparent_1px),linear-gradient(to_bottom,#2a133d_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.15] select-none pointer-events-none" />

      {/* Styled top navbar header */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cart={cart}
        setIsCartOpen={setIsCartOpen}
        onOpenTastePredictor={handleOpenTastePredictor}
      />

      {/* Page Content Area viewport */}
      <main className="flex-1 relative z-10">{renderPage()}</main>

      {/* Persistent global footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Sliding portal drawer matching checkout items */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        appliedPromo={appliedPromo}
        onApplyPromoCode={handleApplyPromoCode}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
