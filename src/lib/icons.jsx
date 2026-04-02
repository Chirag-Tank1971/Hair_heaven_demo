import {
  Scissors,
  Palette,
  Sparkles,
  Heart,
  Award,
  Zap,
  Shield,
  User,
} from 'lucide-react';

const map = {
  scissors: Scissors,
  palette: Palette,
  sparkles: Sparkles,
  heart: Heart,
  award: Award,
  zap: Zap,
  shield: Shield,
  user: User,
};

export function ServiceIcon({ name, className }) {
  const Cmp = map[name] || Sparkles;
  return <Cmp className={className} aria-hidden />;
}
