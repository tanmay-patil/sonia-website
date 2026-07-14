import {
  ArrowRight,
  Camera,
  ChevronDown,
  Globe,
  type LucideIcon,
  type LucideProps,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  Sun,
  X,
} from 'lucide-react';
import styles from './Icon.module.scss';

const iconMap: Record<string, LucideIcon> = {
  ChevronDown,
  ArrowRight,
  Star,
  Smile,
  MessageCircle,
  Camera,
  Globe,
  MapPin,
  Phone,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
  Stethoscope,
  Sparkles,
  Shield,
};

export interface IconProps extends Omit<LucideProps, 'color' | 'size'> {
  /** The name of the icon from lucide-react */
  name: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | undefined;
  /** Optional className for overrides */
  className?: string | undefined;
}

export const Icon = ({ name, size = 'md', className, ...props }: IconProps) => {
  const MappedIcon = iconMap[name];

  if (!MappedIcon) {
    console.warn(`Icon ${name} not found in optimized IconMap`);
    return null;
  }

  return (
    <MappedIcon
      className={`${styles.root} ${styles[size]} ${className || ''}`.trim()}
      {...props}
    />
  );
};
