import { Instagram, Facebook, Youtube } from 'lucide-react';
import { salon } from '../config/salon';
import { getDirectionsUrl } from '../lib/maps';

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={props.className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const social = [
  {
    key: 'instagram',
    href: salon.instagram?.url || salon.social.instagram,
    Icon: Instagram,
    label: 'Instagram',
  },
  { key: 'facebook', href: salon.social.facebook, Icon: Facebook, label: 'Facebook' },
  { key: 'tiktok', href: salon.social.tiktok, Icon: TikTokIcon, label: 'TikTok' },
  { key: 'youtube', href: salon.social.youtube, Icon: Youtube, label: 'YouTube' },
];

export function Footer() {
  const directionsUrl = getDirectionsUrl(salon);

  return (
    <footer className="relative border-t border-heaven-ink/10 bg-gradient-to-b from-heaven-blush to-heaven-cream py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-2xl text-gradient">{salon.name}</p>
            <p className="mt-2 max-w-sm text-sm text-heaven-muted">{salon.tagline}</p>
            {salon.contact.areasServed ? (
              <p className="mt-2 text-sm text-heaven-muted">
                <span className="font-medium text-heaven-ink">Areas served:</span>{' '}
                {salon.contact.areasServed}
              </p>
            ) : null}
            <div className="mt-6 flex gap-3">
              {social.map(({ key, href, Icon, label }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-heaven-ink/10 bg-white text-heaven-muted transition hover:border-heaven-pink/40 hover:text-heaven-deep"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-heaven-muted">
                Visit
              </h3>
              <address className="mt-3 text-sm not-italic leading-relaxed text-heaven-ink">
                {salon.contact.address}
              </address>
              <p className="mt-2 text-sm text-heaven-muted">{salon.contact.hours}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-heaven-muted">
                Contact
              </h3>
              <p className="mt-3 text-sm text-heaven-ink">
                <a href={`tel:+${salon.contact.phoneE164}`} className="hover:text-heaven-deep">
                  {salon.contact.phoneDisplay}
                </a>
              </p>
              {salon.contact.email ? (
                <p className="mt-2 text-sm">
                  <a
                    href={`mailto:${salon.contact.email}`}
                    className="text-heaven-muted hover:text-heaven-deep"
                  >
                    {salon.contact.email}
                  </a>
                </p>
              ) : null}
              {salon.googleBusiness?.reviewsUrl ? (
                <p className="mt-3 text-sm">
                  <a
                    href={salon.googleBusiness.reviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-heaven-ink hover:text-heaven-deep"
                  >
                    Google reviews
                  </a>
                </p>
              ) : null}
              {directionsUrl ? (
                <p className="mt-2 text-sm">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-heaven-muted hover:text-heaven-deep"
                  >
                    Get directions
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-heaven-ink/10 pt-8 text-center text-xs text-heaven-muted/80">
          © {new Date().getFullYear()} {salon.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
