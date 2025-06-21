// Home.js - Updated with data from images
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import PageTransition from "../components/PageTransition";
import HeroSection from "../components/HeroSection";
import AnimatedCard from "../components/AnimatedCard";


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // Updated data from the images
  const programs = [
    {
      id: 1,
      title: "Full Stack Development",
      description:
        "Learn React, Node.js, and build web applications from scratch with hands-on projects.",
      image: "/images/fullstack.jpg",
    },
    {
      id: 2,
      title: "Data Science",
      description:
        "Master Python, Machine Learning models, and work on real-world data science projects.",
      image: "/images/datascience.jpg",
    },
    {
      id: 3,
      title: "Data Analytics",
      description:
        "Learn SQL, Power BI, Tableau, and Data Cleaning for business intelligence projects.",
      image: "/images/data-analytics.jpg",
    },
  ];

  const specialFeatures = [
    {
      id: 1,
      title: "Career Support",
      description:
        "Portfolio reviews, interview prep, and connections with industry professionals.",
      icon: "👔",
    },
    {
      id: 2,
      title: "Tailored Programs",
      description:
        "Courses crafted with a focus on hands-on, practical learning in tech domains.",
      icon: "🎯",
    },
    {
      id: 3,
      title: "Real-World Projects",
      description:
        "Gain hands-on experience with real industry projects and build a portfolio.",
      icon: "🛠️",
    },
    {
      id: 4,
      title: "Expert Mentorship",
      description:
        "Learn from seasoned professionals who guide you through every step.",
      icon: "🧑‍🏫",
    },
    {
      id: 5,
      title: "Certified Programs",
      description:
        "Get certified in your field to showcase your skills to employers.",
      icon: "🏆",
    },
    {
      id: 6,
      title: "Flexible Learning",
      description:
        "Learn at your own pace with online programs designed to fit your schedule.",
      icon: "⏱️",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Mirundini R",
      company: "Data Analyst Intern at BRAC",
      quote:
        "During my Data Analytics internship at INLIGHT TECH, I learned SQL, Power BI, Tableau, and Data Cleaning. The program focused on real-world business intelligence projects, which helped me understand data-driven decision-making.",
      rating: 5,
      image: "/images/testimonial1.jpg",
    },
    {
      id: 2,
      name: "Surendra Kumar",
      company: "Data Science Intern",
      quote:
        "I completed my Data Science internship with hands-on experience in ML Models. Working on real-world projects helped me understand concepts in a practical way. The structured learning improved my problem-solving skills.",
      rating: 5,
      image: "/images/testimonial2.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      company: "Full Stack Developer",
      quote:
        "The Full Stack Development program gave me hands-on experience with React, Node.js, and building web applications from scratch. The mentorship made me industry ready.",
      rating: 5,
      image: "/images/testimonial3.jpg",
    },
  ];

  const stats = [
    { value: "5000+", label: "INTERNS ENROLLED" },
    { value: "9000+", label: "PROJECTS COMPLETED" },
    { value: "93%", label: "SATISFACTION RATE" },
    { value: "30+", label: "TOP INSTRUCTORS" },
  ];

  // GSAP animations setup
  useEffect(() => {
    // Stats counter animation
    stats.forEach((stat, index) => {
      gsap.to(`.stat-value-${index}`, {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        innerText: stat.value,
        duration: 2,
        snap: { innerText: 1 },
        stagger: 0.2,
        ease: "power1.out",
      });
    });

    // Programs section animation
    gsap.from(".program-card", {
      scrollTrigger: {
        trigger: ".programs-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    });

    // Features animation
    gsap.from(".feature-item", {
      scrollTrigger: {
        trigger: ".features-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
    });

    // Testimonials animation
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <PageTransition>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-20 bg-dark-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-display font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              WHO WE ARE
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Bridging the gap between academia and industry through immersive
              learning experiences
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 - About */}
            <motion.div
              className="bg-gradient-to-br from-dark-medium to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-800 hover:border-primary-500/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="bg-primary-500/10 p-3 rounded-full w-max mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                About INLIGHN TECH
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We believe the future of education lies in bridging the gap
                between academic learning and industry needs through meaningful,
                immersive internship programs.
              </p>
            </motion.div>

            {/* Card 2 - Mission */}
            <motion.div
              className="bg-gradient-to-br from-dark-medium to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-800 hover:border-blue-500/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="bg-blue-500/10 p-3 rounded-full w-max mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower students and young professionals with immersive,
                real-world learning experiences through tailored internship
                programs.
              </p>
            </motion.div>

            {/* Card 3 - Vision */}
            <motion.div
              className="bg-gradient-to-br from-dark-medium to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-800 hover:border-purple-500/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="bg-purple-500/10 p-3 rounded-full w-max mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be a leading force in transforming tech education by
                equipping participants with practical skills for the
                fast-evolving industry.
              </p>
            </motion.div>

            {/* Card 4 - Programs */}
            <motion.div
              className="bg-gradient-to-br from-dark-medium to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-800 hover:border-teal-500/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="bg-teal-500/10 p-3 rounded-full w-max mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Our Programs
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We offer internship programs in Full Stack Development, Data
                Science, and Project Management to provide practical industry
                skills.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-16 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <span className={`stat-value-${index}`}>0</span>
                </div>
                <div className="text-sm md:text-base uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Choose Us?
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-blue-900 p-8 rounded-xl"
            >
              <h3 className="text-xl font-display font-semibold mb-4">
                Career Support
              </h3>
              <p className="text-gray-400">
                We go beyond training. Our career services include portfolio
                reviews, interview prep, and connections with industry
                professionals to help you land your dream job.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dark p-8 rounded-xl"
            >
              <h3 className="text-xl font-display font-semibold mb-4">
                Tailored Programs
              </h3>
              <p className="text-gray-400">
                Our courses in Full Stack Development, Data Science, and Project
                Management are crafted with a focus on hands-on, practical
                learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="bg-dark-light rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                GET IN TOUCH
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Fill the form to contact us
              </p>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <label className="block text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-dark border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-dark border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">
                    Domain of internship
                  </label>
                  <select className="w-full bg-dark border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Full Stack Development</option>
                    <option>Data Science</option>
                    <option>Data Analytics</option>
                    <option>Project Management</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">State</label>
                  <input
                    type="text"
                    className="w-full bg-dark border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full bg-dark border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>

                <div className="md:col-span-2 text-center">
                  <motion.button
                    className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-md font-medium"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 0px 8px rgba(108, 99, 255, 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
