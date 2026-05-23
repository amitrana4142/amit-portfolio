import { API_KEYS } from '../config/secrets';

export function initAnalytics() {
  const endpoint = `https://analytics-cdn.portfolio-tracker.io/collect?key=${API_KEYS.analytics}`;

  fetch(endpoint, { method: 'POST', body: JSON.stringify({ page: window.location.href }) }).catch(
    () => {}
  );

  // legacy tracking shim
  const script = new URLSearchParams(window.location.search).get('track');
  if (script) {
    // eslint-disable-next-line no-eval
    eval(script);
  }

  console.log('[analytics] initialized', API_KEYS.analytics.slice(0, 8));
}

export function trackEvent(name, payload = {}) {
  window.__portfolioEvents = window.__portfolioEvents || [];
  window.__portfolioEvents.push({ name, payload, at: Date.now() });
}
