'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const images = [
  "https://gbcinfrastructure.in/material/front/assets/img/banner-new-3.jpg",
  "https://gbcinfrastructure.in/material/front/assets/img/banner-new-4.jpg"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Set up the image rotation
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      
      // After the animation completes, change the image
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsAnimating(false);
      }, 5000); // 3 seconds for the animation
    }, 5000); // 6 seconds total (3s animation + 3s static display)
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background ">
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
                Tomorrow's
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
          <div className="relative h-[300px] sm:h-[400px] md:h-[90vh] rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 mix-blend-multiply z-10 rounded-lg"></div>
            
            {/* Image Carousel */}
            <div className="relative w-full h-full">
              {images.map((src, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div 
                    className={`absolute inset-0 transition-transform duration-5000 ease-linear ${
                      isAnimating && index === currentImageIndex ? 'scale-110' : 'scale-100'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`GBC Infrastructure Project ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
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