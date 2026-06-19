"use client";

import { useEffect } from "react";

/**
 * On every page load / refresh, land on the hero (top of the page) instead of
 * restoring the previous scroll position or jumping to a #section hash.
 */
export function ScrollToTopOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Drop any #hash so the browser doesn't auto-scroll to that section.
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}
