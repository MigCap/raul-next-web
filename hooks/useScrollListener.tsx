/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect, useCallback } from "react";

import { debounce } from "lib";

export interface IScrollListener {
  x: number;
  y: number;
  prevX: number;
  prevY: number;
}

export function useScrollListener() {
  const [data, setData] = useState<IScrollListener>({
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
  });

  const handleScroll = useCallback(
    debounce(() => {
      setData((prev: any) => {
        return {
          x: window.scrollX,
          y: window.scrollY,
          prevX: prev.x,
          prevY: prev.y,
        };
      });
    }, 100),
    []
  );

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return data;
}
