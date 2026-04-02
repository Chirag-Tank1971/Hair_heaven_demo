import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Star } from 'lucide-react';
import { salon } from '../../config/salon';

const AUTOPLAY_MS = 6500;
const VISIBLE = 3;

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? 'fill-heaven-gold text-heaven-gold' : 'text-heaven-ink/15'}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <blockquote className="flex min-h-[220px] flex-col rounded-2xl border border-heaven-ink/8 bg-white/95 p-5 shadow-glass sm:min-h-[240px] sm:p-6">
      <Stars count={review.rating} />
      <p className="mt-3 line-clamp-6 flex-1 text-sm leading-relaxed text-heaven-muted sm:line-clamp-7 sm:text-[0.9375rem]">
        &ldquo;{review.text}&rdquo;
      </p>
      <footer className="mt-4 border-t border-heaven-ink/10 pt-3">
        <p className="font-medium text-heaven-ink">{review.name}</p>
        <p className="text-xs text-heaven-muted/80">{review.role}</p>
      </footer>
    </blockquote>
  );
}

const rowVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 56 : -56,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction < 0 ? 56 : -56,
    opacity: 0,
  }),
};

export function Testimonials() {
  const g = salon.googleBusiness;
  const reviews = salon.testimonials;
  const len = reviews.length;
  const numPages = len > 0 ? Math.ceil(len / VISIBLE) : 0;
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);

  const visible = useMemo(() => {
    if (len === 0) return [];
    const start = pageIndex * VISIBLE;
    return reviews.slice(start, start + VISIBLE);
  }, [reviews, pageIndex, len]);

  const go = (delta) => {
    if (numPages <= 1) return;
    setDirection(delta);
    setPageIndex((p) => (p + delta + numPages) % numPages);
  };

  useEffect(() => {
    if (numPages <= 1 || paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setPageIndex((prev) => (prev + 1) % numPages);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [numPages, paused]);

  const showControls = numPages > 1;
  const n = visible.length;
  const gridCols =
    n === 1
      ? 'grid-cols-1 max-w-lg mx-auto w-full'
      : n === 2
        ? 'grid-cols-1 sm:grid-cols-2 md:max-w-4xl md:mx-auto w-full'
        : 'grid-cols-1 md:grid-cols-3';

  return (
    <section id="testimonials" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-heaven-cream via-white to-heaven-cream" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-semibold sm:text-5xl"
          >
            <span className="text-gradient">Love letters</span>
            <span className="text-heaven-ink"> from clients</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-3 text-heaven-muted"
          >
            Word of mouth in Jaipur — and on Google.
          </motion.p>
        </div>

        {g?.reviewsUrl ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <div className="rounded-3xl border border-heaven-ink/10 bg-white/95 p-6 shadow-glass sm:p-8">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heaven-deep">
                    Loved on Google
                  </p>
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-7 w-7 fill-heaven-gold text-heaven-gold sm:h-8 sm:w-8"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <p className="mt-2 font-display text-3xl font-semibold text-heaven-ink sm:text-4xl">
                    {g.rating}
                    <span className="text-lg font-normal text-heaven-muted"> / 5</span>
                    {g.reviewCount != null && (
                      <span className="text-base font-normal text-heaven-muted">
                        {' '}
                        · {g.reviewCount}+ reviews
                      </span>
                    )}
                  </p>
                  {g.sub && <p className="mt-1 text-sm text-heaven-muted">{g.sub}</p>}
                </div>
                <a
                  href={g.reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full border border-heaven-ink/15 bg-heaven-cream/80 px-6 py-3.5 text-sm font-semibold text-heaven-ink transition hover:border-heaven-pink/40 hover:bg-white sm:w-auto"
                >
                  Read &amp; leave a review
                  <ExternalLink className="h-4 w-4 opacity-70" />
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}

        <div
          className="mx-auto mt-14 max-w-6xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client reviews"
        >
          <div className="relative px-11 sm:px-14">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={pageIndex}
                custom={direction}
                variants={rowVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`grid gap-4 ${gridCols}`}
                aria-live="polite"
              >
                {visible.map((r, k) => (
                  <ReviewCard key={`${pageIndex * VISIBLE + k}-${r.name}`} review={r} />
                ))}
              </motion.div>
            </AnimatePresence>

            {showControls ? (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-heaven-ink/10 bg-white text-heaven-ink shadow-md transition hover:border-heaven-pink/40 hover:bg-heaven-cream sm:h-12 sm:w-12"
                  aria-label="Previous reviews"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-heaven-ink/10 bg-white text-heaven-ink shadow-md transition hover:border-heaven-pink/40 sm:h-12 sm:w-12"
                  aria-label="Next reviews"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            ) : null}
          </div>

          {showControls ? (
            <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Review slides">
              {Array.from({ length: numPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === pageIndex}
                  aria-label={`Show page ${i + 1} of ${numPages}`}
                  onClick={() => {
                    setDirection(i > pageIndex ? 1 : -1);
                    setPageIndex(i);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    i === pageIndex ? 'w-8 bg-gradient-to-r from-heaven-pink to-heaven-purple' : 'w-2.5 bg-heaven-ink/20 hover:bg-heaven-ink/35'
                  }`}
                />
              ))}
            </div>
          ) : null}
          {showControls ? (
            <p className="mt-3 text-center text-xs text-heaven-muted/90">
              {paused ? 'Autoplay paused while hovering' : 'Slides advance automatically · hover to pause'}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
