import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Urban Highway Expansion",
    category: "Infrastructure",
    image: "/project1.jpg",
    link: "/projects/urban-highway-expansion",
  },
  {
    title: "Commercial Complex",
    category: "Construction",
    image: "/project2.jpg",
    link: "/projects/commercial-complex",
  },
  {
    title: "Municipal Water Treatment",
    category: "Civil Engineering",
    image: "/project3.jpg",
    link: "/projects/municipal-water-treatment",
  },
];

const Projects = () => {
  return (
    <section className="relative py-20 overflow-hidden px-8">
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 animate-fade-in">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore our portfolio of successful infrastructure and construction
              projects that showcase our expertise and commitment to excellence.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-6 md:mt-0 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700" 
            asChild
          >
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-3 stagger-children">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group block overflow-hidden rounded-lg shadow-lg transition-all hover-lift animate-fade-in"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="mb-2 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-20 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Projects; 