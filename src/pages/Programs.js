import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

// Components
import PageTransition from '../components/PageTransition';
import AnimatedCard from '../components/AnimatedCard';

// Data
import { programs } from '../constants/dummyData';

const Programs = () => {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredPrograms, setFilteredPrograms] = useState(programs);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(programs.map(program => program.category)))];

  // Filter programs when activeFilter changes
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredPrograms(programs);
    } else {
      setFilteredPrograms(programs.filter(program => program.category === activeFilter));
    }
  }, [activeFilter]);

  // GSAP animation for page header
  useEffect(() => {
    gsap.from('.programs-header', {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <PageTransition>
     

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredPrograms.map((program, index) => (
                <AnimatedCard
                  key={program.id}
                  title={program.title}
                  description={
                    <>
                      <p className="mb-2">{program.description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-sm bg-dark inline-block px-3 py-1 rounded-full text-primary">
                          {program.category}
                        </span>
                        <span className="text-sm text-gray-400">
                          Duration: {program.duration}
                        </span>
                      </div>
                    </>
                  }
                  image={program.image}
                  delay={index * 0.1}
                  direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
                />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* Empty state */}
          {filteredPrograms.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-display font-semibold mb-4">No programs found</h3>
              <p className="text-gray-400">No programs match the selected filter. Please try another category.</p>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Program Benefits */}
      <section className="py-20 bg-dark-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Why Choose Our Programs
            </motion.h2>
            <motion.p 
              className="text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover the advantages that set our technology programs apart.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Industry-Relevant Curriculum",
                description: "Our programs are designed in collaboration with industry experts to ensure you learn the most in-demand skills."
              },
              {
                icon: "👨‍💻",
                title: "Expert Instructors",
                description: "Learn from professionals with years of real-world experience in the technologies they teach."
              },
              {
                icon: "🛠️",
                title: "Hands-On Projects",
                description: "Apply your knowledge through practical projects that simulate real-world challenges."
              },
              {
                icon: "🌐",
                title: "Flexible Learning Options",
                description: "Choose from different learning formats to fit your schedule and preferred learning style."
              },
              {
                icon: "🤝",
                title: "Career Support",
                description: "Receive guidance on resume building, interview preparation, and job placement opportunities."
              },
              {
                icon: "🏆",
                title: "Recognized Certification",
                description: "Earn industry-recognized certificates that validate your skills to potential employers."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-dark p-6 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-display font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Find answers to common questions about our programs.
            </motion.p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How do I know which program is right for me?",
                answer: "We offer a free consultation with our advisors who can help assess your goals, background, and interests to recommend the most suitable program. You can also browse detailed program descriptions on our website."
              },
              {
                question: "What prerequisites are required for advanced programs?",
                answer: "Prerequisites vary by program. Some advanced courses require prior experience or knowledge in related fields. Each program page lists specific prerequisites, and our advisors can help determine if you meet them."
              },
              {
                question: "Can I switch between programs if I change my mind?",
                answer: "Yes, within the first two weeks of starting a program, you can switch to another program that better suits your needs. Our student success team will help facilitate the transition."
              },
              {
                question: "Are there payment plans available?",
                answer: "Yes, we offer flexible payment options including installment plans and income share agreements for qualified applicants. Contact our admissions team for details specific to your chosen program."
              },
              {
                question: "How much time should I expect to commit weekly?",
                answer: "Most programs require 15-20 hours per week, including lectures, hands-on projects, and self-study. Part-time options with lower weekly commitments are available for some programs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-dark-light rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer font-display font-medium text-lg">
                    {faq.question}
                    <span className="transition group-open:rotate-180">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-400">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-dark-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-display font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to Start Your Journey?
              </motion.h2>
              <motion.p 
                className="text-gray-300 text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Take the first step toward mastering the skills that will drive your tech career forward.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-md font-medium"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0px 0px 8px rgba(108, 99, 255, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                </motion.button>
                <motion.button
                  className="bg-dark text-white px-8 py-3 rounded-md font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Information
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Programs;