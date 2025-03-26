'use client'
import { motion } from "motion/react";
import Image from "next/image";
import { useMemo } from "react";
import PageHeader from "../_components/page-header";
import { useData } from "../_hooks/useData";

const services = [
  {
    title: "Raw Water Intake Jetty",
    category: "intake jetty",
    description: "Specialized in constructing robust and efficient raw water intake jetties that ensure reliable water supply for treatment plants. Our expertise includes marine construction, foundation work, and structural integrity.",
    imageUrl: "https://gbcinfrastructure.in/material/front/assets/img/banner-new-3.jpg" // Placeholder
  },
  {
    title: "Pipelaying and Jack Pushing",
    category: "pipelaying",
    description: "Advanced techniques in pipeline installation using trenchless technology. Our jack pushing method minimizes surface disruption while ensuring long-lasting infrastructure.",
    imageUrl: "https://gbcinfrastructure.in/material/front/assets/img/banner-new-3.jpg" // Placeholder
  },
  {
    title: "Underground Reservoir",
    category: "underground reservoir",
    description: "Design and construction of large-scale underground reservoirs with state-of-the-art waterproofing and structural integrity. Built to withstand environmental challenges while maintaining water quality.",
    imageUrl: "https://gbcinfrastructure.in/material/front/assets/img/banner-new-3.jpg" // Placeholder
  },
  {
    title: "Water Treatment Plants",
    category: "water treatment plant",
    description: "Comprehensive water treatment solutions including conventional and advanced treatment processes. Our plants are designed for efficiency, sustainability, and compliance with international standards.",
    imageUrl: "https://gbcinfrastructure.in/material/front/assets/img/banner-new-3.jpg" // Placeholder
  }
];

export default function ServicesPage() {
  const { projects, allImages, categories} = useData()

  const headerImage = useMemo(() => {
    return allImages.filter(image => image.section === "services").find(image => image.title === "header")
  }, [allImages])

  const servicesImages = useMemo(() => {
    return projects.reduce((acc, project) => {
      const category = categories.find(category => category._id === project.categories[0]._ref)
      if (category) {
        acc[category.title] = project.mainImage
      }
      return acc
    }, {} as Record<string, string>)
  }, [projects, categories])

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <PageHeader 
        title="Our Services" 
        description="Water management and treatment infrastructure solutions." 
        image={headerImage?.imageUrl} 
      />

      {/* Services Section */}
      <section id="services-section" className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Our <span className="text-blue-600">Services</span></h2>
            <p className="text-gray-700 dark:text-gray-300">
              We provide infrastructure solutions specializing in water management and treatment systems. Our expertise spans from raw water intake to advanced treatment processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover-lift border border-gray-100 dark:border-gray-700"
              >
                <div className="relative h-64 w-full">
                  {servicesImages?.[service.category] && <Image
                    src={servicesImages?.[service.category] }
                    alt={service.title}
                    fill
                    className="object-cover"
                  />}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 -left-10 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </section>
    </main>
  );
} 