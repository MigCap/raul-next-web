// import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/router";

import { getRoutePathById, ROUTES_IDS } from "lib";

export function useCustomRouter() {
  const router = useRouter();
  const { pathname } = router;

  const isHomePage = pathname === getRoutePathById(ROUTES_IDS.HOME);
  const isAboutPage = pathname === getRoutePathById(ROUTES_IDS.ABOUT);
  const isWorkDetail = pathname?.startsWith("/works/");
  const isPortfolioCategories =
    pathname?.startsWith("/portfolio-categories/") ||
    pathname === "/portfolio-categories";

  function isCurrentRoute(id: ROUTES_IDS) {
    return pathname.split("/")[1] === id;
  }

  return {
    router,
    isHomePage,
    isAboutPage,
    isWorkDetail,
    isPortfolioCategories,
    isCurrentRoute,
  };
}
