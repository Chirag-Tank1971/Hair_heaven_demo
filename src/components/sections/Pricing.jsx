import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { salon } from '../../config/salon';

export function Pricing() {
  const { pricing } = salon;
  if (!pricing?.categories?.length) return null;

  return (
    <section id="pricing" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-heaven-cream via-heaven-blush/40 to-heaven-cream" />
      <div className="pointer-events-none absolute left-1/4 top-20 h-64 w-64 rounded-full bg-heaven-pink/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-48 w-48 rounded-full bg-heaven-purple/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-heaven-pink/25 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-heaven-deep"
          >
            <Sparkles className="h-3.5 w-3.5 text-heaven-gold" aria-hidden />
            Transparent rates
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-semibold sm:text-5xl"
          >
            <span className="text-gradient">{pricing.heading}</span>
          </motion.h2>
          {pricing.sub && (
            <p className="mt-4 text-heaven-muted">{pricing.sub}</p>
          )}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {pricing.categories.map((cat, ci) => (
            <motion.article
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: ci * 0.08 }}
              className="group relative flex flex-col"
            >
              <div className="absolute -inset-px rounded-[1.35rem] bg-gradient-to-br from-heaven-pink/50 via-heaven-purple/35 to-heaven-gold/30 opacity-70 blur-[0.5px] transition group-hover:opacity-100" />
              <div className="relative flex flex-1 flex-col overflow-hidden rounded-[1.25rem] border border-white/80 bg-white/90 shadow-[0_20px_50px_-12px_rgba(26,21,32,0.12)] backdrop-blur-sm">
                <div className="relative overflow-hidden bg-gradient-to-br from-heaven-pink/[0.12] via-white to-heaven-purple/[0.08] px-5 pb-4 pt-5">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-heaven-pink/20 blur-2xl" />
                  <h3 className="relative font-display text-xl font-semibold tracking-tight text-heaven-ink">
                    {cat.name}
                  </h3>
                  <div className="relative mt-3 h-px w-12 bg-gradient-to-r from-heaven-pink to-heaven-purple" />
                </div>

                <ul className="flex flex-1 flex-col gap-0 px-3 pb-4 pt-2">
                  {cat.items.map((item, ii) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.05 + ii * 0.04 }}
                      className="rounded-xl px-2 py-3 transition hover:bg-heaven-cream/80"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium leading-snug text-heaven-ink">{item.name}</p>
                          {item.note && (
                            <p className="mt-1 text-xs leading-relaxed text-heaven-muted">{item.note}</p>
                          )}
                        </div>
                        <span className="shrink-0 rounded-lg bg-gradient-to-br from-heaven-pink/15 to-heaven-purple/10 px-2.5 py-1 font-display text-sm font-semibold tabular-nums text-heaven-deep ring-1 ring-heaven-pink/15">
                          {item.price}
                        </span>
                      </div>
                      {ii < cat.items.length - 1 && (
                        <div className="mx-1 mt-3 h-px bg-gradient-to-r from-transparent via-heaven-ink/10 to-transparent" />
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {pricing.note && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-12 max-w-xl rounded-2xl border border-heaven-ink/8 bg-white/60 px-5 py-4 text-center text-sm text-heaven-muted backdrop-blur-sm"
          >
            {pricing.note}
          </motion.p>
        )}
      </div>
    </section>
  );
}
