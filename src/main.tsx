import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import "./index.css";

// Lazy load App for better code splitting
const App = lazy(() => import("./App.tsx"));

// Simple loading fallback
const LoadingFallback = () => (
  <div style={{ minHeight: '100vh', background: '#fff' }} />
);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </HelmetProvider>
);
