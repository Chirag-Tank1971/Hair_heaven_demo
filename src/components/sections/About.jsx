import { motion } from 'framer-motion';
import { salon } from '../../config/salon';

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-heaven-purple/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 ml-0 sm:ml-8">
              <div className="overflow-hidden rounded-2xl border border-heaven-ink/10 bg-white shadow-glass">
                <img
                  src={salon.about.imageMain}
                  alt="Salon atmosphere"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -left-4 bottom-10 z-20 w-[55%] max-w-xs overflow-hidden rounded-2xl border border-white/80 shadow-glow sm:-left-2"
            >
              <img
                src={salon.about.imageAccent}
                alt="Salon detail"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <div className="absolute -bottom-6 right-4 z-0 h-40 w-40 rounded-full bg-gradient-to-tr from-heaven-pink/40 to-transparent blur-2xl" />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-semibold uppercase tracking-[0.25em] text-heaven-rose"
            >
              About us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-3 font-display text-4xl font-semibold sm:text-5xl"
            >
              <span className="text-heaven-ink">{salon.about.heading}</span>
            </motion.h2>
            <div className="mt-6 space-y-4 text-heaven-muted">
              {salon.about.paragraphs.map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <ul className="mt-10 space-y-4">
              {salon.about.highlights.map((h, i) => (
                <motion.li
                  key={h.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 rounded-xl border border-heaven-ink/8 bg-white/80 p-4 shadow-sm backdrop-blur-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-heaven-gold/35 to-heaven-pink/25 font-display text-lg font-semibold text-heaven-deep">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-heaven-ink">{h.title}</p>
                    <p className="mt-1 text-sm text-heaven-muted">{h.detail}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
