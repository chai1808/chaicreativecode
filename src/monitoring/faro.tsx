
import {
    initializeFaro,
    createReactRouterV6DataOptions,
    ReactIntegration,
    getWebInstrumentations,
  } from '@grafana/faro-react';
  
  import { matchRoutes } from 'react-router-dom';
  import { TracingInstrumentation } from '@grafana/faro-web-tracing';
  
  if (typeof window !== 'undefined') {
    const faroUrl = import.meta.env.VITE_FARO_URL;
  
    if (faroUrl) {
      initializeFaro({
        url: faroUrl,
  
        app: {
          name: 'ポートフォリオ',
          version: '1.0.0',
          environment: import.meta.env.MODE,
        },
  
        instrumentations: [
          ...getWebInstrumentations(),
  
          new TracingInstrumentation(),
  
          new ReactIntegration({
            router: createReactRouterV6DataOptions({
              matchRoutes,
            }),
          }),
        ],
      });
    }
  }
  