import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export function useViewTransition() {
  const router = useRouter();

  const navigateWithTransition = useCallback((href: string) => {
    if (!document.startViewTransition) {
      // Fallback for browsers that don't support view transitions
      router.push(href);
      return;
    }

    document.startViewTransition(() => {
      router.push(href);
    });
  }, [router]);

  return { navigateWithTransition };
}