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
  
    onLCP(console.log);
    onINP(console.log);
    onCLS(console.log);
    onFCP(console.log);
    onTTFB(console.log);
  }