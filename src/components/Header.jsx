import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { salon } from '../config/salon';

const NAV_LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'about', label: 'About' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'visit', label: 'Visit' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const go = (id) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const close = () => setOpen(false);
    mq.addEventListener('change', close);
    return () => mq.removeEventListener('change', close);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* Mobile menu must NOT live inside motion.header: Framer Motion applies transform to the header,
     which makes `position: fixed` children position against the header box (tiny), not the viewport. */
  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 right-0 top-0 z-[60] border-b border-heaven-ink/8 backdrop-blur-xl transition-colors ${
          open ? 'bg-white' : 'bg-white/75'
        }`}
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setOpen(false);
            }}
            className="font-display text-xl font-semibold text-gradient sm:text-2xl"
          >
            {salon.name}
          </button>
          <nav
            className="hidden flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-medium text-heaven-muted md:flex"
            aria-label="Main"
          >
            {NAV_LINKS.map(({ id, label }) => (
              <button key={id} type="button" onClick={go(id)} className="transition hover:text-heaven-ink">
                {label}
              </button>
            ))}
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
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-heaven-ink/10 text-heaven-ink transition hover:border-heaven-pink/30 hover:bg-heaven-cream/80 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" strokeWidth={2} /> : <Menu className="h-6 w-6" strokeWidth={2} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              key="mobile-menu-backdrop"
              role="presentation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[54] bg-heaven-ink/20 md:hidden"
              aria-hidden
              onClick={() => setOpen(false)}
            />
            <motion.nav
              key="mobile-nav"
              id="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: 'tween', duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-3 right-3 top-[4.75rem] z-[55] flex max-h-[min(80vh,28rem)] flex-col overflow-y-auto rounded-b-2xl border border-heaven-ink/10 bg-white px-5 py-5 shadow-xl md:hidden"
              aria-label="Main"
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={go(id)}
                      className="w-full rounded-xl px-4 py-3 text-left text-base font-medium text-heaven-ink transition hover:bg-heaven-cream/90"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={go('booking')}
                className="mt-4 w-full shrink-0 rounded-full bg-gradient-to-r from-heaven-pink to-heaven-purple px-5 py-3.5 text-center text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                Book
              </button>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
