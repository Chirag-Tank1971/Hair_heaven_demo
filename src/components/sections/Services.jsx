import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { salon } from '../../config/salon';
import { ServiceIcon } from '../../lib/icons';
import { whatsappUrl, whatsappServiceMessage } from '../../lib/whatsapp';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-heaven-cream via-heaven-blush to-heaven-cream" />
      <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-heaven-pink/25 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="font-display text-4xl font-semibold sm:text-5xl"
          >
            <span className="text-gradient">Signature</span>{' '}
            <span className="text-heaven-ink">services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-heaven-muted"
          >
            Elevated techniques, transparent pricing, and looks that turn heads — not damage hair.
          </motion.p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {salon.services.map((s) => (
            <motion.li
              key={s.id}
              variants={item}
              className="group relative"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-heaven-pink/50 via-heaven-purple/40 to-heaven-gold/30 opacity-60 blur-[1px] transition group-hover:opacity-100" />
              <div className="relative flex h-full flex-col rounded-2xl glass p-6 shadow-glass transition duration-300 group-hover:-translate-y-1 group-hover:shadow-glow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-heaven-pink/30 to-heaven-purple/30 text-heaven-rose">
                  <ServiceIcon name={s.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl text-heaven-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-heaven-muted">{s.description}</p>
                <a
                  href={whatsappUrl(
                    salon.contact.phoneE164,
                    whatsappServiceMessage(salon.name, s)
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-heaven-pink/30 bg-white/80 px-4 py-2.5 text-xs font-semibold text-heaven-deep transition hover:border-heaven-pink/60 hover:bg-white"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" aria-hidden />
                  Book on WhatsApp
                </a>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
