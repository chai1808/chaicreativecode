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
    } = await import('web-vitals');
  
    const noop = () => {};

    onLCP(noop);
    onINP(noop);
    onCLS(noop);
    onFCP(noop);
    onTTFB(noop);
  }