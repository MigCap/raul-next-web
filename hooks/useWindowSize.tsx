import { useCallback, useMemo } from "react";

export interface IWindowSizeSinListener {
  windowSize: {
    width: number | undefined;
    height: number | undefined;
  };
  isXLarge(): boolean | 0;
  isLarge(): boolean | 0;
  isMedium(): boolean | 0;
  isSmall(): boolean | 0;
}

export function useWindowSizeSinListener() {
  // Initialize state with undefined width/height so server and client renders match
  // const [windowSize, setWindowSize] = React.useState<IWindowSize>({
  //     width: undefined,
  //     height: undefined,
  // })

  const windowSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const isXLarge = useCallback(() => {
    const minSizePx = 1400;
    const rule = windowSize?.width && windowSize?.width > minSizePx;
    return rule;
  }, []);
  const isLarge = useCallback(() => {
    const minSizePx = 1200;
    const rule = windowSize?.width && windowSize?.width > minSizePx;
    return rule;
  }, []);
  const isMedium = useCallback(() => {
    const minSizePx = 768;
    const rule = windowSize?.width && windowSize?.width > minSizePx;
    return rule;
  }, []);
  const isSmall = useCallback(() => {
    const minSizePx = 600;
    const rule = windowSize?.width && windowSize?.width > minSizePx;
    return rule;
  }, []);

  // React.useEffect(() => {
  //     // Handler to call on window resize
  //     function handleResize() {
  //         // Set window width/height to state
  //         setWindowSize({
  //             width: window.innerWidth,
  //             height: window.innerHeight,
  //         })
  //     }
  //     // Add event listener
  //     window.addEventListener('resize', handleResize)
  //     // Call handler right away so state gets updated with initial window size
  //     handleResize()
  //     // Remove event listener on cleanup
  //     return () => window.removeEventListener('resize', handleResize)
  // }, []) // Empty array ensures that effect is only run on mount

  const windowSizeSinListener = useMemo<IWindowSizeSinListener>(
    (): IWindowSizeSinListener => ({
      windowSize,
      isXLarge: () => isXLarge(),
      isLarge: () => isLarge(),
      isMedium: () => isMedium(),
      isSmall: () => isSmall(),
    }),
    []
  );

  return windowSizeSinListener;
}
