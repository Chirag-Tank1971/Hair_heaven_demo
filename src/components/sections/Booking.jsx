import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { salon } from '../../config/salon';
import { whatsappUrl } from '../../lib/whatsapp';

export function Booking() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');

  const buildMessage = () => {
    const svc = salon.services.find((x) => x.title === service);
    const lines = [
      `Hi ${salon.name}!`,
      svc?.whatsappIntro ||
        (service
          ? `I'd like to book: ${service}.`
          : "I'd like to book an appointment."),
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
    ].filter(Boolean);
    return lines.join('\n');
  };

  const waLink = whatsappUrl(salon.contact.phoneE164, buildMessage());

  return (
    <section
      id="booking"
      className="relative scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="booking-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-heaven-blush via-heaven-cream to-[#f3e8ff]" />
      <motion.div
        className="pointer-events-none absolute right-1/4 top-10 h-72 w-72 rounded-full bg-heaven-pink/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-3xl px-5">
        <div className="text-center">
          <h2
            id="booking-heading"
            className="font-display text-4xl font-semibold sm:text-5xl"
          >
            <span className="text-gradient">{salon.booking.heading}</span>
          </h2>
          <p className="mt-3 text-heaven-muted">{salon.booking.sub}</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-12 rounded-3xl border border-heaven-ink/10 bg-white/90 p-6 shadow-glow backdrop-blur-2xl sm:p-10"
        >
          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-heaven-ink">
                {salon.booking.formLabels.name}
              </span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className="w-full rounded-xl border border-heaven-ink/12 bg-heaven-cream/50 px-4 py-3 text-heaven-ink placeholder:text-heaven-muted/50 outline-none ring-heaven-pink/30 transition focus:border-heaven-pink/50 focus:bg-white focus:ring-2"
                placeholder="Alex Morgan"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-heaven-ink">
                {salon.booking.formLabels.phone}
              </span>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                className="w-full rounded-xl border border-heaven-ink/12 bg-heaven-cream/50 px-4 py-3 text-heaven-ink placeholder:text-heaven-muted/50 outline-none ring-heaven-pink/30 transition focus:border-heaven-pink/50 focus:bg-white focus:ring-2"
                placeholder="e.g. 096029 66358"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-heaven-ink">
                {salon.booking.formLabels.service}
              </span>
              <select
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full appearance-none rounded-xl border border-heaven-ink/12 bg-heaven-cream/50 px-4 py-3 text-heaven-ink outline-none ring-heaven-pink/30 transition focus:border-heaven-pink/50 focus:bg-white focus:ring-2"
              >
                <option value="">Select…</option>
                {salon.services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:brightness-110 sm:flex-initial"
            >
              <MessageCircle className="h-5 w-5" />
              {salon.booking.whatsappLabel}
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-heaven-muted">
            Opens WhatsApp with your details pre-filled. You can edit before sending.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
