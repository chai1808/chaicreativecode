import {
    onLCP,
    onINP,
    onCLS,
    onFCP,
    onTTFB,
  } from 'web-vitals';
  
  export function reportWebVitals() {
    onLCP(console.log);
    onINP(console.log);
    onCLS(console.log);
    onFCP(console.log);
    onTTFB(console.log);
  }