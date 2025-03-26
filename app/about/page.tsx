'use client'
import CTA from "@/components/CTA";
import { Award, Building, Target, Users } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useRef } from "react";
import { getImages, ImageType } from "../_actions/queries";
import PageHeader from "../_components/page-header";
import CorporatePolicies from "./_components/CorporatePolicies";

export default function AboutPage() {
  const searchParams = useSearchParams();
  const teamSectionRef = useRef<HTMLElement>(null);
  const [aboutImages, setAboutImages] = React.useState<ImageType[]>([]);

  const headerImage = useMemo(() => {
    return aboutImages.find(image => image.section === "header")?.imageUrl || '';
  }, [aboutImages]);

  const bodyImage = useMemo(() => {
    return aboutImages.find(image => image.section === "body")?.imageUrl || '';
  }, [aboutImages]);
  
  useEffect(() => {
    // Fetch images
    const fetchImages = async () => {
      const fetchedImages = await getImages('/about');
      
      setAboutImages(fetchedImages);
    };
    
    fetchImages();
  }, []);
  
  useEffect(() => {
    // Check if we need to scroll to the team section
    const section = searchParams.get('section');
    
    if (section === 'team' && teamSectionRef.current) {
      // Add a small delay to ensure the page is fully loaded
      setTimeout(() => {
        teamSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
    
    // Also handle direct hash navigation (#team)
    if (window.location.hash === '#team' && teamSectionRef.current) {
      setTimeout(() => {
        teamSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [searchParams, teamSectionRef]);

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <PageHeader title="About Us" description="Learn about our company and our mission." image={headerImage} />

      {/* Company Overview */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our <span className="text-blue-600">Story</span></h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                GBC Infrastructure (GBCI) was established in the year 2012 and since its inception GBCI has been engaged in major infrastructure projects. The company has grown from strength to strength over the years and has successfully executed many challenging and complex projects through the years. GBCI has earned a reputation in the government and other sector for completing projects on time with quality workmanship and has been awarded with many prestigious projects.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                GBC Infrastructure Pvt. Ltd. is a fast-growing, quality assuring agency especially in the field of construction and commissioning of facilities and services. We are committed to construction work that helps society with rapid progress. We have established ourselves as a leading construction company in Eastern India. Our team of experienced and dedicated professionals ensures on-time delivery and attention to every minute detail to provide projects tailored making sure to the people who will use them.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We believe that our success is a shared partnership of the GBC team, our clients, and our community. With our ethical disposition, we have built the company on solid & a bright portfolio of excellence.
              </p>
            </div>
            
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px] animate-fade-in">
              {bodyImage && <Image 
                src={bodyImage}
                alt="GBC Infrastructure Facility"
                fill
                className="object-cover"
              />}
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 -left-10 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Our <span className="text-blue-600">Values</span></h2>
            <p className="text-gray-700 dark:text-gray-300">
              At GBC Infrastructure, we are driven by a set of core values that guide our decisions and actions every day.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {[
              {
                icon: <Award className="h-10 w-10" />,
                title: "Excellence",
                description: "We strive for excellence in every project we undertake, ensuring the highest standards of quality and workmanship."
              },
              {
                icon: <Building className="h-10 w-10" />,
                title: "Innovation",
                description: "We embrace innovative solutions and technologies to deliver infrastructure that meets the needs of tomorrow."
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Collaboration",
                description: "We believe that our success is built on strong partnerships with our clients, employees, and communities."
              },
              {
                icon: <Target className="h-10 w-10" />,
                title: "Integrity",
                description: "We conduct our business with the highest ethical standards, transparency, and accountability."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg animate-fade-in hover-lift border border-gray-100 dark:border-gray-700"
              >
                <div className="mb-4 text-blue-600 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-full w-fit">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      </section>

      {/* Managing Director */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-2">Managing Director <span className="text-blue-600">Speaks</span></h2>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden animate-fade-in">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="relative h-full min-h-[300px] md:min-h-full bg-blue-900">
                <Image 
                  src="https://gbcinfrastructure.in/material/front/assets/img/md.jpg"
                  alt="Managing Director"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-2 p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Mr. Bijay Chowdhury</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                &quot;At GBC Infrastructure, we are committed to excellence in every project we undertake. Our vision is to be the leading infrastructure company known for quality, innovation, and timely delivery.&quot;
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                &quot;We believe in building not just structures, but relationships based on trust and mutual respect. Our team&apos;s dedication and expertise enable us to deliver projects that exceed expectations and contribute to the development of our nation.&quot;
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                &quot;As we look to the future, we remain committed to sustainable practices, technological advancement, and the highest standards of professionalism in all our endeavors.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern-light opacity-50 -z-10"></div>
      </section>

      {/* Our Team - Added ref for scrolling */}
      <section ref={teamSectionRef} id="team" className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Our <span className="text-blue-600">Team</span></h2>
            <p className="text-gray-700 dark:text-gray-300">
              G.B.C INFRASTRUCTURE PVT. LTD. CONSISTS OF A MOST ORGANIZED, COMPACT CONSTRUCTING AGENCY AND SINCE INCEPTION THEY ARE ENGAGED IN EXECUTION OF WORKS WITH THE MANAGEMENT THAT IS EXTREMELY HIGHLY DEVELOPMENT POTENTIAL TO BUILD HOMES.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto stagger-children">
            {[
              {
                image: "https://gbcinfrastructure.in/material/front/assets/img/team/bijay.jpg",
                name: "MR. RIJU GHOSHAL",
                position: "CEO"
              },
              {
                image: "https://gbcinfrastructure.in/material/front/assets/img/team/poulami.jpg",
                name: "MRS. POULAMI GHOSHAL",
                position: "Director Finance"
              },
              {
                image: "https://gbcinfrastructure.in/material/front/assets/img/team/bhaskar.jpg",
                name: "MR. BHISMADEB KONAR",
                position: "COO - Projects"
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-fade-in hover-lift border border-gray-100 dark:border-gray-700"
              >
                <div className="relative h-64 w-full">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">{member.position}</h3>
                  <p className="text-blue-600 font-medium">{member.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      </section>

      <CorporatePolicies />

      {/* CTA Section */}
      <CTA />
    </main>
  );
} 