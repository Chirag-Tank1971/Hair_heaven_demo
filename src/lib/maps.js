/**
 * Google Maps URLs for embed iframe + directions.
 * Uses `maps.placeQuery` (business name + full address) when set — better than address alone.
 * Optional: `maps.lat` + `maps.lng` or paste `embedSrc` / `directionsUrl` from Google Maps → Share.
 */

function getMapsQueryRaw(salon) {
  const { maps, contact } = salon || {};
  return maps?.placeQuery?.trim() || contact?.address?.trim() || '';
}

export function getMapEmbedUrl(salon) {
  const { maps } = salon;
  if (!maps) return '';
  const custom = maps.embedSrc?.trim();
  if (custom) return custom;

  if (maps.lat != null && maps.lng != null) {
    return `https://maps.google.com/maps?q=${maps.lat},${maps.lng}&z=17&hl=en&output=embed`;
  }

  const raw = getMapsQueryRaw(salon);
  if (!raw) return '';

  const q = encodeURIComponent(raw);
  /** `www.google.com/maps?q=…&output=embed` often geocodes named businesses more reliably */
  return `https://www.google.com/maps?q=${q}&z=17&hl=en&output=embed`;
}

export function getDirectionsUrl(salon) {
  const { maps } = salon;
  if (!maps) return '';
  const custom = maps.directionsUrl?.trim();
  if (custom) return custom;

  if (maps.lat != null && maps.lng != null) {
    return `https://www.google.com/maps/dir/?api=1&destination=${maps.lat},${maps.lng}`;
  }

  const raw = getMapsQueryRaw(salon);
  if (!raw) return '';

  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(raw)}`;
}

/** Opens the place in full Google Maps */
export function getOpenInMapsUrl(salon) {
  const { maps } = salon;
  if (!maps) return '';

  if (maps.lat != null && maps.lng != null) {
    return `https://www.google.com/maps/search/?api=1&query=${maps.lat},${maps.lng}`;
  }

  const raw = getMapsQueryRaw(salon);
  if (!raw) return '';

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(raw)}`;
}
