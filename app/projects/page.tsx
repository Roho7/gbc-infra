'use client'
import { useData } from "@/app/_hooks/useData";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { Filter, Search } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import PageHeader from "../_components/page-header";

// Project status types
type ProjectStatus = "upcoming" | "ongoing" | "completed" | "all";

export default function ProjectsPage() {
  const { projects, isLoading, error, categories} = useData();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStatus, setActiveStatus] = useState<ProjectStatus>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Initialize filters from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const statusParam = searchParams.get('status') as ProjectStatus;
    const searchParam = searchParams.get('search');

    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
    if (statusParam && ['upcoming', 'ongoing', 'completed', 'all'].includes(statusParam)) {
      setActiveStatus(statusParam);
    }
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  // Function to determine project status based on dates
  const getProjectStatus = (startedAt: string, completedAt: string): ProjectStatus => {
    const now = dayjs();
    const startDate = startedAt ? dayjs(startedAt) : null;
    const endDate = completedAt ? dayjs(completedAt) : null;

    if (endDate && endDate.isBefore(now)) {
      return "completed";
    } else if (startDate && startDate.isAfter(now)) {
      return "upcoming";
    } else if (startDate && startDate.isBefore(now) && (!endDate || endDate.isAfter(now))) {
      return "ongoing";
    } else {
      // Default to ongoing if dates are unclear
      return "ongoing";
    }
  };

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
      
      // Apply status filter
      if (activeStatus !== "all") {
        filtered = filtered.filter(project => {
          const projectStatus = getProjectStatus(project.startedAt, project.completedAt);
          return projectStatus === activeStatus;
        });
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
    return [];
  }, [projects, activeCategory, activeStatus, searchQuery]);

  // Update URL params when filters change
  const updateUrlParams = () => {
    const params = new URLSearchParams();
    
    if (activeCategory !== "All") {
      params.set('category', activeCategory);
    }
    if (activeStatus !== "all") {
      params.set('status', activeStatus);
    }
    if (searchQuery) {
      params.set('search', searchQuery);
    }

    const newUrl = params.toString() ? `/projects?${params.toString()}` : '/projects';
    router.push(newUrl, { scroll: false });
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleStatusChange = (status: ProjectStatus) => {
    setActiveStatus(status);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Update URL when filters change
  useEffect(() => {
    updateUrlParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, activeStatus, searchQuery]);

  // Get project counts by status
  const statusCounts = useMemo(() => {
    if (!projects) return { ongoing: 0, upcoming: 0, completed: 0, all: 0 };
    
    const counts = { ongoing: 0, upcoming: 0, completed: 0, all: projects.length };
    
    projects.forEach(project => {
      const status = getProjectStatus(project.startedAt, project.completedAt);
      counts[status]++;
    });
    
    return counts;
  }, [projects]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <PageHeader title="Our Projects" description="Explore our portfolio of completed and ongoing projects." />

      

      {/* Enhanced Filter and Search Section */}
      <section className="py-8 px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          {/* Filter Header */}
          <div className="flex items-center gap-2 mb-6">
            <Filter className="h-5 w-5 text-slate-400" />
            <h3 className="text-lg font-semibold text-white">Filter Projects</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Category Filters */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-slate-300 uppercase tracking-wide">Category</h4>
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant={activeCategory === "All" ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    activeCategory === "All" 
                      ? "bg-blue-600 hover:bg-blue-700" 
                      : "border-slate-600 text-slate-400 hover:bg-slate-700 hover:text-white"
                  )}
                  onClick={() => handleCategoryChange("All")}
                >
                  All Categories
                </Button>
                {categories.map((category) => (
                  <Button 
                    key={category._id}
                    variant={category._id === activeCategory ? "default" : "outline"}
                    size="sm"
                    className={cn(
                      category._id === activeCategory 
                        ? "bg-blue-600 hover:bg-blue-700" 
                        : "border-slate-600 text-slate-400 hover:bg-slate-700 hover:text-white",
                      "capitalize"
                    )}
                    onClick={() => handleCategoryChange(category._id)}
                  >
                    {category.title}
                  </Button>
                ))}
              </div>
            </div>

            {/* Status Filters */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-slate-300 uppercase tracking-wide">Project Status</h4>
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant={activeStatus === "all" ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    activeStatus === "all" 
                      ? "bg-green-600 hover:bg-green-700" 
                      : "border-slate-600 text-slate-400 hover:bg-slate-700 hover:text-white"
                  )}
                  onClick={() => handleStatusChange("all")}
                >
                  All Status ({statusCounts.all})
                </Button>
                <Button 
                  variant={activeStatus === "upcoming" ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    activeStatus === "upcoming" 
                      ? "bg-orange-600 hover:bg-orange-700" 
                      : "border-slate-600 text-slate-400 hover:bg-slate-700 hover:text-white"
                  )}
                  onClick={() => handleStatusChange("upcoming")}
                >
                  Upcoming ({statusCounts.upcoming})
                </Button>
                <Button 
                  variant={activeStatus === "ongoing" ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    activeStatus === "ongoing" 
                      ? "bg-blue-600 hover:bg-blue-700" 
                      : "border-slate-600 text-slate-400 hover:bg-slate-700 hover:text-white"
                  )}
                  onClick={() => handleStatusChange("ongoing")}
                >
                  Ongoing ({statusCounts.ongoing})
                </Button>
                <Button 
                  variant={activeStatus === "completed" ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    activeStatus === "completed" 
                      ? "bg-green-600 hover:bg-green-700" 
                      : "border-slate-600 text-slate-400 hover:bg-slate-700 hover:text-white"
                  )}
                  onClick={() => handleStatusChange("completed")}
                >
                  Completed ({statusCounts.completed})
                </Button>
              </div>
            </div>

            {/* Search */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-slate-300 uppercase tracking-wide">Search</h4>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="search"
                  className="block w-full p-3 pl-10 text-sm rounded-lg bg-slate-700 border border-slate-600 placeholder-slate-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-6 pt-4 border-t border-slate-700">
            <p className="text-sm text-slate-400">
              Showing {filteredProjects?.length || 0} of {projects?.length || 0} projects
              {activeCategory !== "All" && (
                <span className="text-blue-400"> • Category: {categories.find(cat => cat._id === activeCategory)?.title}</span>
              )}
              {activeStatus !== "all" && (
                <span className="text-green-400"> • Status: {activeStatus}</span>
              )}
              {searchQuery && (
                <span className="text-orange-400"> • Search: &quot;{searchQuery}&quot;</span>
              )}
            </p>
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
                filteredProjects.map((project) => {
                  const projectStatus = getProjectStatus(project.startedAt, project.completedAt);
                  const statusColors: Record<Exclude<ProjectStatus, "all">, string> = {
                    upcoming: "bg-orange-600/20 text-orange-400",
                    ongoing: "bg-blue-800/50 text-blue-50", 
                    completed: "bg-green-600/20 text-green-400"
                  };

                  return (
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
                        
                        {/* Status Badge */}
                        <div className={cn(
                          "absolute top-4 right-4 text-xs font-medium px-2 py-1 rounded-full capitalize",
                          statusColors[projectStatus as Exclude<ProjectStatus, "all">]
                        )}>
                          {projectStatus}
                        </div>
                        
                        {/* Date Badge */}
                        {project.startedAt && (
                          <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full">
                            {dayjs(project.startedAt).format('MMM YYYY')}
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
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full text-center text-slate-400 p-12">
                  <p>No projects found matching your criteria. Try adjusting your filters.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
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
                  handleStatusChange("all");
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
    </main>
  );
}
