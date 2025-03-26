'use client'
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { BarChart3, CheckCircle, ClipboardList, Clock, Layers, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import PageHeader from "../_components/page-header";
import { useData } from "../_hooks/useData";

export default function ProcessPage() {
  const { allImages, documents } = useData()

  const headerImage = useMemo(() => {
    return allImages.filter(image => image.section === "process").find(image => image.title === "header")?.imageUrl
  }, [allImages])

  const processDocuments = useMemo(() => {
    return documents.filter(document => document.category === "gbc-process")
  }, [documents])

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <PageHeader title="Our Process" description="Learn about our project management process." image={headerImage} />


      {/* Process Steps */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Our Process <span className="text-blue-600">Steps</span></h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our projects are effectively delivered when these are managed using key project management by defining project phases. Here, we have defined the project phases for successful execution of projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {[
              {
                icon: <ClipboardList className="h-10 w-10" />,
                title: "Intake Process",
                id: "intake-process",
                description: "Initial consultation and requirement gathering to understand project scope, objectives, and constraints."
              },
              {
                icon: <Layers className="h-10 w-10" />,
                title: "Design & Planning",
                id: "design-planning",
                description: "Detailed design development, engineering analysis, and comprehensive project planning."
              },
              {
                icon: <BarChart3 className="h-10 w-10" />,
                title: "Resource Allocation",
                id: "resource-allocation",
                description: "Strategic allocation of human resources, materials, and equipment to ensure optimal project execution."
              },
              {
                icon: <Workflow className="h-10 w-10" />,
                title: "Implementation",
                id: "implementation",
                description: "Systematic execution of construction activities according to approved plans and specifications."
              },
              {
                icon: <CheckCircle className="h-10 w-10" />,
                title: "Quality Assurance",
                id: "quality-assurance",
                description: "Rigorous quality control measures throughout the project lifecycle to ensure compliance with standards."
              },
              {
                icon: <Clock className="h-10 w-10" />,
                title: "Project Completion",
                id: "project-completion",
                description: "Final inspections, documentation, and handover of the completed infrastructure project."
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg animate-fade-in hover-lift border border-gray-100 dark:border-gray-700"
              >
                <div className="mb-4 text-blue-600 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-full w-fit">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      </section>

      {/* Process Details */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Intake Process */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden animate-fade-in">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative h-full min-h-[250px] md:min-h-full bg-blue-900">
                    {allImages[0] && <Image 
                      src={allImages[0].imageUrl}
                      alt="Intake Process"
                      fill
                      className="object-cover"
                    />}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-900/30"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold">Intake Process</h3>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-8 md:p-10">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      The intake process is the crucial first step in our project methodology. During this phase, we conduct thorough consultations with clients to understand their vision, requirements, and expectations. Our team of experts performs site assessments, feasibility studies, and preliminary analyses to establish a solid foundation for the project.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We identify key stakeholders, define project objectives, and establish clear communication channels. This phase also includes initial budget estimations and timeline projections to set realistic expectations.
                    </p>
                    <Button className="mt-4" variant="outline" asChild>
                      <Link target="_blank" href={processDocuments.find(document => document.caption === "intake-process")?.url || "#"}>Download Brochure</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Design of R.C.C Over Head Tank */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden animate-fade-in">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative h-full min-h-[250px] md:min-h-full bg-blue-900">
                    {allImages[1] && <Image 
                      src={allImages[1].imageUrl}
                      alt="Design of R.C.C Over Head Tank"
                      fill
                      className="object-cover"
                    />}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-900/30"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold">Design of R.C.C Over Head Tank</h3>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-8 md:p-10">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Our design process for R.C.C Over Head Tanks involves comprehensive structural analysis, hydraulic calculations, and adherence to industry standards. Our engineering team utilizes advanced software and techniques to create designs that are not only structurally sound but also cost-effective and sustainable.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We consider factors such as water demand, seismic conditions, soil characteristics, and environmental impact in our designs. Each design undergoes rigorous review and validation before proceeding to the construction phase.
                    </p>
                    <Button className="mt-4" variant="outline" asChild>
                      <Link target="_blank" href={processDocuments.find(document => document.caption === "over-head-tank")?.url || "#"}>Download Brochure</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Surface Water Treatment Plant Process */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden animate-fade-in">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative h-full min-h-[250px] md:min-h-full bg-blue-900">
                    {allImages[2] && <Image 
                      src={allImages[2].imageUrl}
                      alt="Surface Water Treatment Plant Process"
                      fill
                      className="object-cover"
                    />}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-900/30"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold">Surface Water Treatment Plant Process</h3>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-8 md:p-10">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Our approach to Surface Water Treatment Plant projects encompasses all aspects from conceptualization to commissioning. We implement state-of-the-art technologies and processes to ensure efficient water treatment that meets regulatory standards and quality requirements.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      The process includes detailed engineering of treatment units, selection of appropriate equipment, construction of civil structures, installation of mechanical and electrical components, and comprehensive testing and commissioning procedures.
                    </p>
                    <Button className="mt-4" variant="outline" asChild>
                      <Link target="_blank" href={processDocuments.find(document => document.caption === "surface-water-treatment-plant")?.url || "#"}>Download Brochure</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern-light opacity-50 -z-10"></div>
      </section>

      {/* Project Management Approach */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Our Project Management <span className="text-blue-600">Approach</span></h2>
            <p className="text-gray-700 dark:text-gray-300">
              At GBC Infrastructure, we employ a comprehensive project management approach that ensures successful delivery of every project.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden animate-fade-in">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Key Elements of Our Approach</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-blue-600 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-full h-fit">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Detailed Planning and Scheduling</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      We develop comprehensive project plans with detailed work breakdown structures, resource allocation, and realistic timelines to ensure smooth execution.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="text-blue-600 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-full h-fit">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Risk Management</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Our proactive risk management strategy identifies potential issues early and implements mitigation measures to minimize impact on project objectives.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="text-blue-600 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-full h-fit">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Quality Assurance</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      We implement rigorous quality control processes throughout the project lifecycle to ensure all deliverables meet or exceed industry standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="text-blue-600 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-full h-fit">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Stakeholder Communication</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Regular and transparent communication with all stakeholders ensures alignment of expectations and timely resolution of issues.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="text-blue-600 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-full h-fit">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Progress Monitoring and Reporting</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      We utilize advanced project management tools to track progress, identify deviations, and implement corrective actions promptly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      </section>

      {/* CTA Section */}
      <CTA />
    </main>
  );
} 