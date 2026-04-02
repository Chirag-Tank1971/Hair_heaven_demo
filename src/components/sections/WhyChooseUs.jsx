import { motion } from 'framer-motion';
import { salon } from '../../config/salon';
import { ServiceIcon } from '../../lib/icons';

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-heaven-blush via-heaven-cream to-heaven-blush" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">
              <span className="text-gradient-gold">Why</span>{' '}
              <span className="text-heaven-ink">choose us</span>
            </h2>
            <p className="mt-4 text-heaven-muted">
              We obsess over the details — from sectioning to sanitation — so you only feel the glow.
            </p>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-heaven-gold/40 to-transparent lg:block" />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {salon.whyUs.map((w, i) => (
            <motion.article
              key={w.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-heaven-ink/8 bg-white/90 p-6 shadow-glass"
            >
              <motion.div
                className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-heaven-pink/20 to-heaven-purple/15 text-heaven-deep shadow-[0_8px_28px_rgba(255,107,157,0.2)]"
                whileHover={{ rotate: [0, -6, 6, 0], scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <ServiceIcon name={w.icon} className="h-7 w-7" />
              </motion.div>
              <h3 className="font-display text-xl text-heaven-ink">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-heaven-muted">{w.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
