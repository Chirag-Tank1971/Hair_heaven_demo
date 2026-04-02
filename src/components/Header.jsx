import { motion } from 'framer-motion';
import { salon } from '../config/salon';

export function Header() {
  const go = (id) => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-40 border-b border-heaven-ink/8 bg-white/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-xl font-semibold text-gradient sm:text-2xl"
        >
          {salon.name}
        </button>
        <nav
          className="hidden flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-medium text-heaven-muted md:flex"
          aria-label="Main"
        >
          <button type="button" onClick={go('services')} className="transition hover:text-heaven-ink">
            Services
          </button>
          <button type="button" onClick={go('pricing')} className="transition hover:text-heaven-ink">
            Pricing
          </button>
          <button type="button" onClick={go('about')} className="transition hover:text-heaven-ink">
            About
          </button>
          <button type="button" onClick={go('gallery')} className="transition hover:text-heaven-ink">
            Gallery
          </button>
          <button type="button" onClick={go('visit')} className="transition hover:text-heaven-ink">
            Visit
          </button>
          <button
            type="button"
            onClick={go('booking')}
            className="shrink-0 rounded-full bg-gradient-to-r from-heaven-pink to-heaven-purple px-5 py-2 text-white shadow-glow transition hover:brightness-110"
          >
            Book
          </button>
        </nav>
        <button
          type="button"
          onClick={go('booking')}
          className="rounded-full bg-gradient-to-r from-heaven-pink to-heaven-purple px-4 py-2 text-sm font-semibold text-white md:hidden"
        >
          Book
        </button>
      </div>
    </motion.header>
  );
}
