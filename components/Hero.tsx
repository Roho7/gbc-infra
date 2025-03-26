'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useData } from "@/app/_hooks/useData";



const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { allImages } = useData();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background px-2">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark" />
      </div>

      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-indigo-100/30 to-transparent"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />

      <div className="relative z-10">
        <div className="grid gap-3 md:grid-cols-2 md:gap-16 items-center max-md:px-8 md:pl-10">
          <motion.div 
            className="flex flex-col gap-6 pt-20 pb-10 md:py-32"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Delivering Clean {" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Water Solutions
              </span>{" "}
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              GBC Infrastructure specializes in constructing and managing water treatment facilities, serving government and semi-government sectors accross West Bengal.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 relative overflow-hidden group">
                <Link href="/contact">
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Scrolling Image Gallery */}
          <motion.div 
            className="relative max-md:mb-3 h-[300px] sm:h-[400px] md:h-[90vh] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 mix-blend-multiply z-10 rounded-lg"></div>
            
            {/* Scrolling Container */}
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              {/* First Column */}
              <motion.div 
                className="absolute left-0 w-1/2 px-2 space-y-4"
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{ 
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }}
              >
                {allImages.map((img, index) => (
                  <motion.div 
                    key={`col1-${index}`} 
                    className="relative w-full h-[200px] rounded-lg overflow-hidden shadow-md"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={img.imageUrl}
                      alt={`GBC Infrastructure Project ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Duplicate First Column (for seamless loop) */}
              <motion.div 
                className="absolute left-0 w-1/2 px-2 space-y-4 pt-4"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ 
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                }}
              >
                {allImages.map((img, index) => (
                  <motion.div 
                    key={`col1-dup-${index}`} 
                    className="relative w-full h-[200px] rounded-lg overflow-hidden shadow-md"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={img.imageUrl}
                      alt={`GBC Infrastructure Project ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Second Column (delayed start) */}
              <motion.div 
                className="absolute right-0 w-1/2 px-2 space-y-4 pt-4"
                initial={{ y: 0 }}
                animate={{ y: "100%" }}
                transition={{ 
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30, // Slightly slower for variation
                  ease: "linear"
                }}
              >
                {[...allImages].reverse().map((img, index) => (
                  <motion.div 
                    key={`col2-${index}`} 
                    className="relative w-full h-[200px] rounded-lg overflow-hidden shadow-md"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={img.imageUrl}
                      alt={`GBC Infrastructure Project ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Duplicate Second Column (for seamless loop) */}
              <motion.div 
                className="absolute right-0 w-1/2 px-2 space-y-4"
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                transition={{ 
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30, // Slightly slower for variation
                  ease: "linear"
                }}
              >
                {[...allImages].reverse().map((img, index) => (
                  <motion.div 
                    key={`col2-dup-${index}`} 
                    className="relative w-full h-[200px] rounded-lg overflow-hidden shadow-md"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={img.imageUrl}
                      alt={`GBC Infrastructure Project ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-indigo-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero; 