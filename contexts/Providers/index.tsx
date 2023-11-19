'use client'

import { GdprProvider } from "contexts/gdpr";
import { WorksProvider } from "contexts/works";

export function Providers({ children }: any) {
  return (
    <>
      <GdprProvider>
        <WorksProvider>
          {children}
        </WorksProvider>
      </GdprProvider>
    </>
  );
}
