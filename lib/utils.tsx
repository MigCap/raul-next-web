import parse from "html-react-parser";

import { routesConfig, categoriesConfig, ROUTES_IDS, IRoute } from "lib";

function getDate(date: any) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// function throttle(func: any, wait: number = 100) {
//   let timer: any = null;
//   return function (...args: any) {
//     if (timer === null) {
//       timer = setTimeout(() => {
//         // @ts-ignore
//         func.apply(this, args);
//         timer = null;
//       }, wait);
//     }
//   };
// }

function getRoutePathById(id: ROUTES_IDS) {
  return routesConfig.find((route: IRoute) => route.id === id)?.path as string;
}

function getCategoryNameFromConfig(id: number) {
  if (!id) return;
  return categoriesConfig?.find((category: any) => category.id === id)?.name;
}

function debounce(func: () => void, wait: number = 100, immediate?: boolean) {
  let timeout: any;
  return function () {
    const context: any = this;
    const args: any = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function getHtmlTagContentFromString(htmlString: string, tag: "p" | "a") {
  // const regex = new RegExp(``, "i");
  return htmlString?.match(/<p>(.*?)<\/p>/g)?.join("") || "";
}

export {
  parse,
  getDate,
  debounce,
  getRoutePathById,
  getCategoryNameFromConfig,
  getHtmlTagContentFromString,
};
