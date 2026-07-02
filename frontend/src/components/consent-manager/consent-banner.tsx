"use client";

import { useConsentManager } from "@c15t/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function CustomConsentBanner() {
  const { activeUI, saveConsents } = useConsentManager();
  const [isExpanded, setIsExpanded] = useState(false);

  // Sequence the animation: Wait for the initial spring to settle, then expand
  useEffect(() => {
    if (activeUI === "banner") {
      const timer = setTimeout(() => setIsExpanded(true), 600);
      return () => clearTimeout(timer);
    } else {
      setIsExpanded(false); // Reset state if the banner is closed
    }
  }, [activeUI]);

  if (activeUI !== "banner") return null;

  return (
    // Wrapper handles the fixed centering so the expansion morphs perfectly from the middle
    <div className="fixed bottom-4 sm:bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.div
        layout // This prop automatically animates width, height, and layout shifts
        initial={{ opacity: 0, y: 100, scale: 0.5, borderRadius: "50%" }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          // Morphs from a perfect circle to a pill-shape
          borderRadius: isExpanded ? "32px" : "50%",
        }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        transition={{
          layout: { type: "spring", bounce: 0.15, duration: 0.6 },
          y: { type: "spring", damping: 14, stiffness: 200 },
          scale: { type: "spring", damping: 14, stiffness: 200 },
        }}
        // pointer-events-auto ensures the banner is clickable, while the wrapper isn't blocking the page
        className={`pointer-events-auto bg-white/95 backdrop-blur-xl border border-blue-100 shadow-[0_20px_60px_-15px_rgba(5,150,105,0.3)] overflow-hidden flex items-center ${
          isExpanded ? "w-[92vw] max-w-xl flex-col sm:flex-row px-6 py-4 gap-4" : "w-14 h-14 justify-center" // Initial minimal round state
        }`}>
        {/* The minimal cookie icon */}
        <motion.div
          layout="position" // Keeps the icon smoothly placed during the layout shift
          className={`shrink-0 flex items-center justify-center ${isExpanded ? "hidden sm:flex p-2.5 bg-blue-50 rounded-full text-blue-600" : "text-blue-600"}`}>
          <svg width={isExpanded ? "20" : "26"} height={isExpanded ? "20" : "26"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isExpanded ? "2.5" : "2"} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
            <path d="M8.5 8.5v.01"></path>
            <path d="M16 12.5v.01"></path>
            <path d="M12 16a3 3 0 0 0 0-6"></path>
            <path d="M12 7v.01"></path>
          </svg>
        </motion.div>

        {/* The Rest of the Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)", x: -10 }}
              animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
              transition={{ delay: 0.15, duration: 0.4, type: "spring" }}
              className="flex flex-col sm:flex-row items-center gap-4 flex-1 w-full">
              <p className="flex-1 text-sm text-zinc-600 leading-relaxed m-0 text-center sm:text-left">I use basic cookies to measure site traffic. No personal data is ever tracked.</p>

              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center sm:justify-end">
                <button
                  onClick={() => saveConsents("all")}
                  className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 rounded-full transition-transform active:scale-95 cursor-pointer whitespace-nowrap">
                  Sure, go ahead
                </button>
                <button onClick={() => saveConsents("necessary")} aria-label="Dismiss" className="p-2.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
