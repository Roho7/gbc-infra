'use client'
import { Factory, HardHat, Warehouse } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const services = [
  {
    icon: <HardHat className="h-10 w-10" />,
    title: "Pipelaying & Jack Pushing",
    description:
      "We offer expert pipelaying and jack pushing services for various projects, ensuring efficient and safe execution.",
    link: "/services/pipelaying-and-jack-pushing",
  },
  {
    icon: <Factory className="h-10 w-10" />,
    title: "Water Treatment Plans",
    description:
      "We provide water treatment plans for various projects, ensuring clean and safe water supply.",
    link: "/services/water-treatment-plans",
  },
  {
    icon: <Warehouse className="h-10 w-10" />,
    title: "Raw Water Intake Plants",
    description:
      "We build raw water intake plants with efficient and safe execution.",
    link: "/services/raw-water-intake-plants",
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionElement = document.getElementById('services-section');
      
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
    <section id="services-section" className="relative py-20 overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100"></div>
      
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.8) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-gray-900">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We offer a range of infrastructure and construction
            services to meet your project needs.
          </p>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg transition-all flex flex-col h-full border border-gray-100 group"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="mb-4 text-blue-600 bg-blue-50 p-3 rounded-full w-fit"
                whileHover={{ 
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>
              {/* <Link
                href={service.link}
                className="group inline-flex items-center text-blue-600 font-medium"
              >
                Learn more{" "}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="ml-1 h-4 w-4" />
                </motion.span>
              </Link> */}
            </motion.div>
          ))}
        </div>

        {/* <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div> */}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-40 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Services; 