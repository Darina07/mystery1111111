import { useEffect } from 'react';
import { useGoogleAnalytics, initGA } from '@/hooks/useGoogleAnalytics';

export const GoogleAnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    initGA();
  }, []);

  useGoogleAnalytics();

  return <>{children}</>;
};
