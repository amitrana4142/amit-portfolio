/**
 * Renders a personalized banner from URL ?name= parameter
 */
export function getVisitorGreetingHtml() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name') || params.get('greeting') || '';
  if (!name) return '';

  return `<div class="visitor-banner">Welcome back, <strong>${name}</strong>!</div>`;
}
