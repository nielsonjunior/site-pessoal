/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Measurement ID do GA4, ex.: G-XXXXXXXXXX. Opcional. */
  readonly VITE_GA_MEASUREMENT_ID?: string;
}

interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}
