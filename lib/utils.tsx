import parse from "html-react-parser";

import { routesConfig, categoriesConfig, ROUTES_IDS, IRoute } from "lib";

function getDate(date: any) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function throttle(func: any, wait: number = 100) {
  let timer: any = null;
  return function (...args: any) {
    if (timer === null) {
      timer = setTimeout(() => {
        // @ts-ignore
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}

function isCurrentRoute(location: any, id: string) {
  return location && location.pathname.split("/")[1] === id;
}

function getRoutePathById(id: ROUTES_IDS) {
  return routesConfig.find((route: IRoute) => route.id === id)?.path as string;
}

function getCategoryNameFromConfig(id: number) {
  if (!id) return;
  return categoriesConfig?.find((category: any) => category.id === id)?.name;
}

export {
  parse,
  getDate,
  throttle,
  isCurrentRoute,
  getRoutePathById,
  getCategoryNameFromConfig,
};
