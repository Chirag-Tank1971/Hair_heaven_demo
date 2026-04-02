import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { salon } from '../config/salon';
import { whatsappUrl } from '../lib/whatsapp';

export function FloatingCTA() {
  const quickHi = `Hi ${salon.name}! I'd like to book an appointment.`;
  const wa = whatsappUrl(salon.contact.phoneE164, quickHi);
  const tel = `tel:+${salon.contact.phoneE164}`;

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3 sm:bottom-8 sm:right-8">
      <motion.a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/40 sm:h-16 sm:w-16"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
      </motion.a>
      <motion.a
        href={tel}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.65 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-heaven-ink/12 bg-white text-heaven-ink shadow-glass backdrop-blur-xl sm:h-16 sm:w-16"
        aria-label="Call now"
      >
        <Phone className="h-6 w-6 sm:h-7 sm:w-7" />
      </motion.a>
    </div>
  );
}
