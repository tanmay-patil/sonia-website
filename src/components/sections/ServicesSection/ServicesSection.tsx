'use client';

import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/composed/ServiceCard';
import { SectionWrapper } from '@/components/sections/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/data/services';
import styles from './ServicesSection.module.scss';

export const ServicesSection = () => {
  return (
    <SectionWrapper id="services" variant="muted">
      <SectionHeading
        title="Comprehensive Dental Services"
        eyebrow="Our Expertise"
        description="We offer a full range of dental services to keep your smile healthy and beautiful, using the latest technology and techniques."
      />

      <div className={styles.grid}>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
