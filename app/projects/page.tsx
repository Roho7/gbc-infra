'use client'
import { useData } from "@/app/_hooks/useData";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Filter, Search } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { getImages, ImageType } from "../_actions/queries";
import PageHeader from "../_components/page-header";

// Project categories for filtering

export default function ProjectsPage() {
  const { projects, isLoading, error, categories} = useData();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [projectImages, setProjectImages] = useState<ImageType[]>([]);

  const filteredProjects = useMemo(() => {
    if (projects) {
      let filtered = [...projects];
      // Apply category filter
      if (activeCategory !== "All") {
        filtered = filtered.filter(project => 
          project.categories && 
          project.categories.some(cat => cat._ref === activeCategory)
        );
      }
      
      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(project => 
          project.title.toLowerCase().includes(query) || 
          (project.description && project.description.toLowerCase().includes(query))
        );
      }
      
      return filtered;
    }
  }, [projects, activeCategory, searchQuery]);

  useEffect(() => {
    const fetchImages = async () => {
      const images = await getImages('/projects');
      setProjectImages(images);
    };
    fetchImages();
  }, []);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const headerImage = useMemo(() => {
    return projectImages.find(image => image.section === "header")?.imageUrl;
  }, [projectImages]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <PageHeader title="Our Projects" description="Explore our portfolio of completed and ongoing projects." image={headerImage} />

      {/* Stats Section from Screenshot */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Water Plants Stat */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-500 transition-all shadow-lg hover:shadow-blue-500/20">
              <h2 className="text-5xl font-bold text-blue-600 mb-4">32</h2>
              <h3 className="text-xl font-bold text-gray-800 uppercase mb-3">WATER TREATMENT PLANTS</h3>
              <p className="text-gray-600">
                Water in the water treatment plant is treated through physical processes for example filtration or settling and chemical processes such as coagulation and disinfection.
              </p>
              <button 
                onClick={() => {
                  handleCategoryChange(categories.find(cat => cat.title === "water treatment plant")?._id || "");
                  document.getElementById("project-gallery")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block mt-6 text-blue-600 hover:text-blue-500 transition-colors"
              >
                View All
              </button>
            </div>

            {/* Intake Jetty Stat */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-500 transition-all shadow-lg hover:shadow-blue-500/20">
              <h2 className="text-5xl font-bold text-blue-600 mb-4">10</h2>
              <h3 className="text-xl font-bold text-gray-800 uppercase mb-3">INTAKE JETTY</h3>
              <p className="text-gray-600">
                A raw water intake jetty is located on the bank of a river and serves as a source of raw water for treatment for removing fouling material and ensuring finer filtration.
              </p>
              <button 
                onClick={() => {
                  handleCategoryChange(categories.find(cat => cat.title === "intake jetty")?._id || "");
                  document.getElementById("project-gallery")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block mt-6 text-blue-600 hover:text-blue-500 transition-colors"
              >
                View All
              </button>
            </div>

            {/* All Projects Stat */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-500 transition-all shadow-lg hover:shadow-blue-500/20">
              <h2 className="text-5xl font-bold text-blue-600 mb-4">80</h2>
              <h3 className="text-xl font-bold text-gray-800 uppercase mb-3">ALL PROJECTS</h3>
              <p className="text-gray-600">
                We have completed an end number of projects successfully like Durgapur, Malda water treatment plant and many more and have become the preferred choice of various organizations.
              </p>
              <button 
                onClick={() => {
                  handleCategoryChange("All");
                  document.getElementById("project-gallery")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block mt-6 text-blue-600 hover:text-blue-500 transition-colors"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-4 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {Object.values(categories).map((category) => (
                <Button 
                  key={category._id}
                  variant={category._id === activeCategory ? "default" : "outline"}
                  className={cn(category._id === activeCategory 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "border-slate-600 text-slate-500 hover:bg-slate-800 hover:text-white", "capitalize")
                  }
                  onClick={() => handleCategoryChange(category._id)}
                >
                  {category.title}
                </Button>
              ))}
              <Button variant="outline" className="border-slate-600 text-slate-500 hover:bg-slate-800 hover:text-white" onClick={() => handleCategoryChange("All")}>
                <Filter className="h-4 w-4 mr-2" />
                Show All
              </Button>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="search"
                className="block w-full md:w-80 p-3 pl-10 text-sm rounded-lg bg-slate-800 border border-slate-700 placeholder-slate-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section id="project-gallery" className="px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div key={Math.random() * 10} className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 p-8 bg-red-100/10 rounded-lg">
              <p>Error loading projects. Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects && filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div 
                    key={project._id}
                    className="group bg-slate-900/80 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all shadow-lg hover:shadow-blue-900/20"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={project.mainImage || ""}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:from-blue-900/90 transition-all"></div>
                      {project.startedAt && (
                        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                          {project.startedAt}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      {project.categories && project.categories.length > 0 && (
                        <span className="inline-block mb-3 rounded-full bg-blue-600/20 text-blue-400 px-3 py-1 text-xs font-medium capitalize">
                          {categories.find(cat => cat._id === project.categories[0]._ref)?.title}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                        {project.title}
                      </h3>
                      {project.description && <p className="text-slate-300 mb-4">
                        {project.description}
                      </p>}
                      {/* <Link 
                        href={`/projects/${project._id}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link> */}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center text-slate-400 p-12">
                  <p>No projects found matching your criteria. Try adjusting your filters.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
