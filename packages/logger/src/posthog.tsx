import posthog from 'posthog-js';
import { PostHog } from 'posthog-node';

export * from 'posthog-js/react';
if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST as string,
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
  });
}

function PostHogClient() {
  const posthogClient = new PostHog(
    process.env.NEXT_PUBLIC_POSTHOG_KEY as string,
    {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      flushAt: 1,
      flushInterval: 0,
    },
  );
  return posthogClient;
}
export { posthog, PostHogClient };
