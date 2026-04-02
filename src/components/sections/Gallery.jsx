import { motion } from 'framer-motion';
import { salon } from '../../config/salon';

export function Gallery() {
  return (
    <section id="gallery" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="absolute inset-0 bg-heaven-cream" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-heaven-blush to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-semibold sm:text-5xl"
          >
            <span className="text-heaven-ink">The </span>
            <span className="text-gradient">moodboard</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-4 text-heaven-muted"
          >
            A peek inside our chairs — color, texture, and light.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {salon.gallery.map((g, i) => (
            <motion.figure
              key={g.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: (i % 6) * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-heaven-ink/8 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-heaven-ink/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
