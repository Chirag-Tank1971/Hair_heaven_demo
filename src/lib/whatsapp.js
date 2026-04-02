/**
 * Build WhatsApp URL with optional prefilled message (UTF-8 encoded).
 * @param {string} phoneE164 - digits only, country code included, no +
 */
export function whatsappUrl(phoneE164, message = '') {
  const base = `https://wa.me/${phoneE164}`;
  if (!message) return base;
  const params = new URLSearchParams({ text: message });
  return `${base}?${params.toString()}`;
}

/**
 * Prefilled message for booking a specific service (from salon.services).
 */
export function whatsappServiceMessage(salonName, service) {
  if (!service?.whatsappIntro) {
    return `Hi ${salonName}! I'd like to book an appointment.`;
  }
  return `Hi ${salonName}!\n${service.whatsappIntro}`;
}
