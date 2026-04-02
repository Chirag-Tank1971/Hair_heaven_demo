import { motion } from 'framer-motion';
import { salon } from '../../config/salon';

export function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-20"
      aria-label="Hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-mesh" />
      <div className="absolute inset-0 bg-gradient-to-br from-heaven-pink/15 via-transparent to-heaven-purple/10" />

      {/* Floating blobs */}
      <motion.div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-heaven-pink/35 to-heaven-purple/25 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.65, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tl from-heaven-gold/30 to-heaven-rose/25 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/3 top-10 h-64 w-64 rounded-full border border-heaven-pink/20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl flex-1 items-center gap-10 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block rounded-full border border-heaven-pink/25 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-heaven-deep"
          >
            {salon.name}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{salon.hero.title}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg font-light text-heaven-muted sm:text-xl"
          >
            {salon.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={() => scrollTo('booking')}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-heaven-pink via-heaven-rose to-heaven-purple px-8 py-4 text-sm font-semibold text-white shadow-glow transition hover:shadow-lg"
            >
              <span className="relative z-10">{salon.hero.primaryCta}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-heaven-purple to-heaven-pink opacity-0 transition group-hover:opacity-100" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('services')}
              className="rounded-full border border-heaven-ink/12 bg-white/80 px-8 py-4 text-sm font-medium text-heaven-ink shadow-sm backdrop-blur-md transition hover:border-heaven-pink/40 hover:bg-white"
            >
              {salon.hero.secondaryCta}
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 relative lg:order-2"
        >
          <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-heaven-pink/30 via-heaven-purple/20 to-heaven-gold/20 blur-2xl" />
            {/* h-full fills aspect box so overlays sit on the photo, not below it */}
            <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-white/80 shadow-glass">
              <img
                src={salon.hero.image}
                alt={salon.hero.imageAlt}
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-heaven-ink/25 via-transparent to-transparent" />
              <motion.div
                className="absolute bottom-3 left-3 z-10 max-w-[11.5rem] rounded-2xl border border-white/35 bg-white/15 px-4 py-3 shadow-glass backdrop-blur-xl sm:bottom-4 sm:left-4 sm:max-w-none"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <p className="text-xs uppercase tracking-widest text-heaven-rose drop-shadow-[0_1px_2px_rgba(0,0,0,0.75)]">
                  New season
                </p>
                <p className="font-display text-lg leading-tight text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                  New energy
                </p>
                <p className="mt-1 text-[11px] leading-snug text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)]">
                  Walk-ins welcome · Consults free
                </p>
              </motion.div>
              <motion.div
                className="absolute right-3 top-3 z-10 hidden max-w-[11.5rem] rounded-2xl border border-white/35 bg-white/15 px-4 py-3 shadow-glass backdrop-blur-xl sm:right-4 sm:top-8 sm:block sm:max-w-none"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="text-xs uppercase tracking-widest text-heaven-rose drop-shadow-[0_1px_2px_rgba(0,0,0,0.75)]">
                  Featured
                </p>
                <p className="font-display text-lg text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                  Glass hair &amp; balayage
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-10 w-6 rounded-full border-2 border-heaven-ink/20"
        >
          <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-heaven-pink/60" />
        </motion.div>
      </div>
    </section>
  );
}
