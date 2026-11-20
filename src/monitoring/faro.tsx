import { initializeFaro } from '@grafana/faro-react';

export const faro =
  typeof window !== 'undefined' &&
  import.meta.env.VITE_FARO_URL
    ? initializeFaro({
        url: import.meta.env.VITE_FARO_URL,
        app: {
          name: 'my-react-app',
          environment: import.meta.env.MODE,
        },
      })
    : undefined;
