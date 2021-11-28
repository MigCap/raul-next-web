import parse from "html-react-parser";

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

export { parse, getDate, throttle };
