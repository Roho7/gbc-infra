'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const images = [
  "https://gbcinfrastructure.in/material/front/assets/img/banner-new-3.jpg",
  "https://gbcinfrastructure.in/material/front/assets/img/banner-new-4.jpg",
  "https://gbcinfrastructure.in/material/front/assets/img/banner-new-3.jpg",
  "https://gbcinfrastructure.in/material/front/assets/img/banner-new-4.jpg",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background px-2">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark" />
      </div>

      <div className="relative z-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center max-md:px-8 md:pl-10">
          <div className="flex flex-col gap-6 stagger-children py-20 md:py-32">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-in">
              Building{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Tomorrow&apos;s
              </span>{" "}
              Infrastructure Today
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              GBC Infrastructure delivers innovative, sustainable, and reliable
              infrastructure solutions that transform communities and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 animate-fade-in">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </div>
          </div>
          
          {/* Scrolling Image Gallery */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[90vh] rounded-lg overflow-hidden shadow-xl animate-fade-in">
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
                {images.map((src, index) => (
                  <div 
                    key={`col1-${index}`} 
                    className="relative w-full h-[200px] rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`GBC Infrastructure Project ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                  </div>
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
                {images.map((src, index) => (
                  <div 
                    key={`col1-dup-${index}`} 
                    className="relative w-full h-[200px] rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`GBC Infrastructure Project ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                  </div>
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
                {[...images].reverse().map((src, index) => (
                  <div 
                    key={`col2-${index}`} 
                    className="relative w-full h-[200px] rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`GBC Infrastructure Project ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                  </div>
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
                {[...images].reverse().map((src, index) => (
                  <div 
                    key={`col2-dup-${index}`} 
                    className="relative w-full h-[200px] rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`GBC Infrastructure Project ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero; 