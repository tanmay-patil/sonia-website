import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    description:
      'Comprehensive exams, cleanings, and preventative care to keep your smile healthy.',
    iconName: 'Stethoscope',
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description:
      'Teeth whitening, veneers, and smile makeovers for a confident appearance.',
    iconName: 'Sparkles',
  },
  {
    id: 'restorative-care',
    title: 'Restorative Care',
    description:
      'Crowns, bridges, and implants to restore the function and beauty of your teeth.',
    iconName: 'Shield',
  },
];
