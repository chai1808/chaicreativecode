import { importOrReload } from '../importOrReload';

export async function reportWebVitals() {
    if (typeof window === 'undefined') {
      return;
    }
  
    const {
      onLCP,
      onINP,
      onCLS,
      onFCP,
      onTTFB,
    } = await importOrReload(() => import('web-vitals'));
  
    const noop = () => {};

    onLCP(noop);
    onINP(noop);
    onCLS(noop);
    onFCP(noop);
    onTTFB(noop);
  }