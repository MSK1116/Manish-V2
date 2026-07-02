"use client";

import type { ReactNode } from "react";
import { ConsentManagerProvider } from "@c15t/nextjs";

// import { DevTools } from "@c15t/dev-tools/react";
import ConsentBanner from "./consent-banner";
import ConsentDialog from "./consent-dialog";
import { theme } from "./theme";

import { gtag } from "@c15t/scripts/google-tag";
import { clarity } from "@c15t/scripts/microsoft-clarity";

interface Props {
  children: ReactNode;
}

/**
 * Client-side consent manager provider with compound components.
 * @see https://c15t.com/docs/frameworks/nextjs/quickstart
 */
export default function ConsentManagerClient({ children }: Props) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "offline",
        theme,
        scripts: [gtag({ id: "G-QPW8JGJVH5", category: "measurement" }), clarity({ id: "mtc9m2c1sz" })],
        // overrides: { country: "DE" },
      }}>
      <ConsentBanner />
      <ConsentDialog />
      {/* <DevTools disabled={process.env.NODE_ENV === "production"} /> */}
      {children}
    </ConsentManagerProvider>
  );
}
