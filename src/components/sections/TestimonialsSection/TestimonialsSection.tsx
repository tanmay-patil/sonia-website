'use client';

import { motion } from 'framer-motion';
import { TestimonialCard } from '@/components/composed/TestimonialCard';
import { SectionWrapper } from '@/components/sections/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/testimonials';
import styles from './TestimonialsSection.module.scss';

export const TestimonialsSection = () => {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeading title="What Our Patients Say" eyebrow="Testimonials" />

      <div className={styles.grid}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
