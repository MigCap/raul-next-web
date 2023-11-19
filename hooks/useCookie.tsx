'use client'

import { useCallback, useState } from "react";

const setCookie = (name: any, value: any, days: any, path: any) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  window.document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=${path}`;
};

const getCookie = (name: any) => {
  if (typeof window !== "undefined") {
    return window.document.cookie.split("; ").reduce((r, v) => {
      const parts = v.split("=");
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, "");
  }
};

function useCookie(cookieName: string, initialValue: any) {
  const [cookieValue, setCookieValue] = useState(
    () => getCookie(cookieName) || initialValue
  );

  const updateCookie = useCallback((value: any, days = 365, path = "/") => {
    setCookieValue(value);
    setCookie(cookieName, value, days, path);
  }, []);

  const deleteCookie = useCallback((path = "/") => {
    updateCookie("", -1, path);
    setCookieValue(null);
  }, []);

  return [cookieValue, updateCookie, deleteCookie];
}

export default useCookie;
