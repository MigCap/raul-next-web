import { useState, useEffect, useCallback, useRef } from "react";

import { useScrollListener } from "hooks/useScrollListener";

import { debounce, DeviceSize, headerHeight } from "lib";

export function useMenu() {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const hamburgerRef = useRef(null);
  const listItemRef = useRef(null);

  const [scrollDirection, setScrollDirection] = useState<any>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<any>(false);
  const [isMounted, setIsMounted] = useState<any>(false);

  const scroll = useScrollListener();

  const handleResize = useCallback(() => {
    if (window.innerWidth > DeviceSize?.mobile && isMobileMenuOpen) {
      toggleMenu();
    }
  }, []);

  const handleKeydown = useCallback((evt: any) => {
    if (isMounted) {
      if (!isMobileMenuOpen) {
        return;
      }

      if (evt.key === "Escape" || evt.key === "Esc") {
        toggleMenu();
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => debounce(handleResize));
    window.addEventListener("keydown", (e) => handleKeydown(e));
    const timeout = setTimeout(() => setIsMounted(true), 100);

    setIsMounted(true);
    return () => {
      setIsMounted(false);

      window.removeEventListener("resize", () => handleResize());
      window.removeEventListener("keydown", (e) => handleKeydown(e));
      clearTimeout(timeout);
    };
  }, []);

  const toggleMenu = useCallback(() => {
    if (!isMounted) return;
    if (isMounted) setIsMobileMenuOpen((prev: boolean) => !prev);
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      if (scroll.y > scroll.prevY) {
        if (scroll.y > headerHeight) {
          setScrollDirection((prev: any) => (prev !== "down" ? "down" : prev));
        } else {
          setScrollDirection((prev: any) => (prev !== "" ? "" : prev));
        }
      } else if (scroll.prevY > scroll.y && scroll.y !== 0) {
        setScrollDirection((prev: any) => (prev !== "up" ? "up" : prev));
      } else if (scroll.y === 0) {
        setScrollDirection((prev: any) => (prev !== "none" ? "none" : prev));
      }
    }
  }, [scroll.y, scroll.prevY]);

  return {
    scrollDirection,
    isMounted,
    isMobileMenuOpen,
    toggleMenu,
    headerRef,
    logoRef,
    hamburgerRef,
    listItemRef,
  };
}
