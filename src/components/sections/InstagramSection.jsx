import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { salon } from '../../config/salon';

export function InstagramSection() {
  const ig = salon.instagram;
  if (!ig?.url || !ig?.recentImages?.length) return null;

  return (
    <section id="instagram" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="absolute inset-0 bg-heaven-cream" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-heaven-deep">
              Follow along
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
              <span className="text-gradient">Instagram</span>
            </h2>
            {ig.handle && (
              <p className="mt-2 text-heaven-muted">
                {ig.caption || 'Fresh cuts, colour, and behind the chair.'}{' '}
                <span className="font-medium text-heaven-ink">{ig.handle}</span>
              </p>
            )}
          </div>
          <a
            href={ig.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-heaven-pink via-heaven-rose to-heaven-purple px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            <Instagram className="h-5 w-5" />
            Open Instagram
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-6">
          {ig.recentImages.map((src, i) => (
            <motion.a
              key={src + i}
              href={ig.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-heaven-ink/8 bg-white shadow-sm"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heaven-ink/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
