// HeroSection.js
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const splineRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to handle mouse move for robot head interaction
  const handleMouseMove = (e) => {
    if (splineRef.current && isLoaded) {
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;

      // Find the robot head object
      const robot = splineRef.current.findObjectByName("RobotHead");
      if (robot) {
        // Apply smooth rotation to make the head follow cursor
        gsap.to(robot.rotation, {
          y: x * 0.3, // Horizontal movement (left/right)
          x: y * 0.2, // Vertical movement (up/down)
          duration: 0.5,
        });
      }
    }
  };

  // Text animation with GSAP
  useEffect(() => {
    if (textRef.current) {
      const textElements = textRef.current.querySelectorAll(".animate-text");

      gsap.fromTo(
        textElements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }

    // Add mouse move event listener
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isLoaded, handleMouseMove]);

  // Button animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 8px rgba(108, 99, 255, 0.6)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Spline 3D Robot Head - Transparent Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-full relative">
          <Spline
            scene="https://prod.spline.design/xqghUDpCFQmc-i1Q/scene.splinecode"
            onLoad={(spline) => {
              splineRef.current = spline;
              setIsLoaded(true);

              // Transparent background
              spline.setBackgroundColor(0x00000000);

              // Target specific object inside Spline
              const robot = spline.findObjectByName("RobotHead");
              if (robot) {
                // ✅ SCALE the model (makes it smaller)
                robot.scale.set(0.3, 0.3, 0.3);

                // ✅ Center or adjust position as needed
                robot.position.set(0, -1, 0); // You can tweak this to better fit

                // ✅ Floating animation (optional)
                gsap.to(robot.position, {
                  y: -0.7,
                  duration: 2,
                  yoyo: true,
                  repeat: -1,
                  ease: "sine.inOut",
                });
              }
            }}
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto ml-10 px-4 md:px-6 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="text-center lg:text-left">
            <h1 className="animate-text text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="block text-4xl">Transform Your Career With</span>
              <span className="block text-gradient">INLIGHN TECH</span>
            </h1>
            <p className="animate-text text-gray-300 text-lg md:text-base mb-8 max-w-lg mx-auto lg:mx-0">
              Gain real-world experience with our immersive internship programs
              in Cyber Security, Full Stack Development, Data Science, and more.
              Learn today, lead tomorrow.
            </p>
            <div className="animate-text flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-md font-medium"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                Explore Internships
              </motion.button>
              <motion.button
                className="border border-primary text-white px-8 py-3 rounded-md font-medium"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                Know More
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: [0.3, 1, 0.3],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 2,
        }}
      >
        <svg
          className="w-6 h-12"
          viewBox="0 0 24 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="0"
            width="4"
            height="36"
            rx="2"
            fill="white"
            fillOpacity="0.3"
          />
          <rect x="10" y="0" width="4" height="24" rx="2" fill="white" />
          <path d="M12 48L5.0718 38H18.9282L12 48Z" fill="white" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
