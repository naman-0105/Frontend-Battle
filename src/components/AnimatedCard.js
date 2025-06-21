//AnimatedCard.js

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCard = ({ 
  title, 
  description, 
  image, 
  icon, 
  delay = 0, 
  direction = 'left',
  className = ''
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  // Variants for card animation
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 20,
        delay: delay
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`bg-dark-light rounded-xl overflow-hidden shadow-lg ${className}`}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{ 
        y: -10, 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
      }}
      transition={{ duration: 0.3 }}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
          />
          {icon && (
            <div className="absolute top-4 right-4 bg-dark p-2 rounded-full">
              {icon}
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        {!image && icon && (
          <div className="inline-flex p-3 mb-4 rounded-lg bg-dark-lighter text-primary">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;