

export function pushToDataLayer(payload) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

export function trackFormSubmit(details = {}) {
  pushToDataLayer({ event: "form_submit", ...details });
}
