'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useData } from "@/app/_hooks/useData";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { projects, categories } = useData();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionElement = document.getElementById('projects-section');
      
      if (sectionElement) {
        const sectionPosition = sectionElement.offsetTop + 200;
        
        if (scrollPosition > sectionPosition) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <section id="projects-section" className="relative py-20 overflow-hidden px-8 bg-gradient-to-b from-slate-800 to-slate-900">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      />

      <div className="relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl">
              Explore our portfolio of successful infrastructure and construction
              projects that showcase our expertise and commitment to excellence.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button 
              variant="outline" 
              className="mt-6 md:mt-0 border-blue-400 text-blue-400 hover:bg-blue-900/30 hover:text-blue-300" 
              asChild
            >
              <Link href="/projects" className="group flex items-center">
                View All Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                  className="ml-2"
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* <Link
                href={`/projects/${project._id}`}
                className="group block overflow-hidden rounded-lg shadow-lg transition-all"
              > */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90"
                    whileHover={{ 
                      background: "linear-gradient(to top, rgba(0,0,0,0.95), rgba(59,130,246,0.3), transparent)" 
                    }}
                  />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                      {project.categories && project.categories.map((category) => (
                        <span key={category._ref} className="mb-2 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-medium capitalize">
                          {categories.find((c) => c._id === category._ref)?.title}
                        </span>
                      ))}
                    <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <motion.div
                      className="h-0.5 w-0 bg-blue-400 mt-2"
                      animate={{ width: isVisible ? "40%" : "0%" }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    />
                  </div>
                </div>
              {/* </Link> */}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-40 h-80 bg-indigo-600/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Projects; 