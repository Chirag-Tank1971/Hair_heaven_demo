import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Navigation } from 'lucide-react';
import { salon } from '../../config/salon';
import { getDirectionsUrl, getMapEmbedUrl, getOpenInMapsUrl } from '../../lib/maps';

export function VisitMap() {
  const { maps, contact } = salon;
  const directionsUrl = getDirectionsUrl(salon);
  const embedSrc = getMapEmbedUrl(salon);
  const openInMapsUrl = getOpenInMapsUrl(salon);

  if (!maps || !directionsUrl) return null;

  return (
    <section id="visit" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-heaven-blush" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-semibold sm:text-5xl"
          >
            <span className="text-heaven-ink">Visit </span>
            <span className="text-gradient">us</span>
          </motion.h2>
          <p className="mt-3 text-heaven-muted">
            {maps.sub || 'Find us in Murlipura — parking & directions on Google Maps.'}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center rounded-2xl border border-heaven-ink/8 bg-white/90 p-6 shadow-glass sm:p-8"
          >
            <div className="flex gap-3 text-left">
              <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-heaven-deep" aria-hidden />
              <div>
                <h3 className="font-display text-xl text-heaven-ink">Address</h3>
                <address className="mt-2 text-sm not-italic leading-relaxed text-heaven-muted">
                  {contact.address}
                </address>
                {contact.hours && (
                  <p className="mt-4 text-sm text-heaven-ink">
                    <span className="font-medium">Hours: </span>
                    {contact.hours}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-heaven-pink to-heaven-purple px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 sm:w-auto"
              >
                <Navigation className="h-5 w-5 shrink-0" />
                Get directions in Google Maps
              </a>
              <a
                href={openInMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-heaven-ink/15 bg-white px-6 py-4 text-sm font-semibold text-heaven-ink transition hover:border-heaven-pink/40 sm:w-auto"
              >
                <ExternalLink className="h-4 w-4 shrink-0 opacity-70" />
                Open in Maps
              </a>
            </div>
          </motion.div>

          {embedSrc ? (
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col overflow-hidden rounded-2xl border border-heaven-ink/10 bg-heaven-ink/5 shadow-glass"
            >
              <div className="aspect-[4/3] w-full min-h-[240px] sm:aspect-video sm:min-h-[280px]">
                <iframe
                  title="Hair Heaven on Google Maps"
                  src={embedSrc}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                href={openInMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-t border-heaven-ink/8 bg-white/90 py-3 text-center text-sm font-medium text-heaven-deep transition hover:bg-white"
              >
                <ExternalLink className="h-4 w-4" />
                Open this location in Google Maps
              </a>
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
