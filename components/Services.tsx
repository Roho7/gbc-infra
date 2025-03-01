import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Factory, Hammer, HardHat, Ruler, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of infrastructure and construction
            services to meet your project needs.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 stagger-children max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-all hover-lift flex flex-col h-full animate-fade-in border border-gray-100 dark:border-gray-700"
            >
              <div className="mb-4 text-blue-600 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-full w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="group inline-flex items-center text-blue-600 font-medium"
              >
                Learn more{" "}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-20 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Services; 