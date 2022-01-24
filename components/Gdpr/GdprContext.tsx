import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import useCookie from "hooks/useCookie";

const GdprContext = createContext<ReturnType<typeof useGdprContext> | null>(
  null
);

function GdprProvider({ children }: any) {
  const [gdprCookie, setGdpr, deleteGdpr] = useCookie("gdpr", false);

  const [gdrpState, setGdrpState] = useState({
    showDialog: true,
  });

  const setShowDialog = useCallback((val: boolean) => {
    setGdrpState((prev: any) => ({
      ...prev,
      showDialog: val,
    }));
  }, []);

  const onAcceptCookies = useCallback(() => {
    setShowDialog(false);
    setGdpr(true);
  }, []);

  const onDenyCookies = useCallback(() => {
    setShowDialog(false);
    setGdpr(false);
  }, []);

  useLayoutEffect(() => {
    if (gdprCookie && gdrpState?.showDialog) {
      setShowDialog(false);
    } else {
      setShowDialog(true);
    }
  }, []);

  const gdpr = {
    showDialog: gdrpState?.showDialog,
    setShowDialog,
    onAcceptCookies,
    onDenyCookies,
  };

  return <GdprContext.Provider value={gdpr}>{children}</GdprContext.Provider>;
}

function useGdprContext() {
  const context: any = useContext(GdprContext)!;

  if (context === undefined) {
    throw new Error("useGdrp must be used within a GdrpProvider");
  }
  return context;
}

export { GdprProvider, useGdprContext };
