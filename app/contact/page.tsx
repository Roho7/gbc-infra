'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building, Facebook, Linkedin, Mail, MapPin, Phone, Send, Twitter, User, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { getImages, ImageType } from "../_actions/queries";
import PageHeader from "../_components/page-header";

export default function ContactPage() {
  const [contactImages, setContactImages] = useState<ImageType[]>([]);

  useEffect(() => {
    const fetchHeaderImage = async () => {
      const images = await getImages("/contact");
      setContactImages(images);
    };
    fetchHeaderImage();
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <PageHeader title="Contact Us" description="Get in touch with our team to discuss your infrastructure needs and how we can help bring your projects to life." image={contactImages.find(image => image.section === "header")?.imageUrl} />

      {/* Contact Information Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Business <span className="text-blue-600">Enquiry</span>
              </h2>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      id="name"
                      className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone No
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="tel"
                      id="phone"
                      className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="email"
                      id="email"
                      className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Your Email Address"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </Label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={4}
                      className="p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  SEND ENQUIRY <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg h-full shadow-lg p-8 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Ask <span className="text-blue-600">Me</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-32 font-medium text-gray-700 dark:text-gray-300">Job Related</div>
                    <div className="flex-1 text-blue-600">
                      <a href="mailto:human-resources@gbcinfrastructure.in">: human-resources@gbcinfrastructure.in</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-32 font-medium text-gray-700 dark:text-gray-300">General Information</div>
                    <div className="flex-1 text-blue-600">
                      <a href="mailto:info@gbcinfrastructure.in">: info@gbcinfrastructure.in</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-32 font-medium text-gray-700 dark:text-gray-300">Purchase Related</div>
                    <div className="flex-1 text-blue-600">
                      <a href="mailto:marketing@gbcinfrastructure.in">: marketing@gbcinfrastructure.in</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-32 font-medium text-gray-700 dark:text-gray-300">Projects Related</div>
                    <div className="flex-1 text-blue-600">
                      <a href="mailto:projects@gbcinfrastructure.in">: projects@gbcinfrastructure.in</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-32 font-medium text-gray-700 dark:text-gray-300">Accounts Related</div>
                    <div className="flex-1 text-blue-600">
                      <a href="mailto:accounts@gbcinfrastructure.in">: accounts@gbcinfrastructure.in</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-32 font-medium text-gray-700 dark:text-gray-300">Plant Operation & Maintenance Related</div>
                    <div className="flex-1 text-blue-600">
                      <a href="mailto:operation_maintenance@gbcinfrastructure.in">: operation_maintenance@gbcinfrastructure.in</a>
                    </div>
                  </div>
                </div>
              </div>
            
            {/* Contact Information and Map */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Corporate <span className="text-blue-600">Office Address</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                      <Building className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">GBC Infrastructure Private Limited</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">Mr. Pritish Baral</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">196, Raja Rammohan Roy Rd, Barishta, Kolkata, West Bengal, 700008</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">+913329500152</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">human-resources@gbcinfrastructure.in</p>
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-lg h-[500px] animate-fade-in">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29491.448192139444!2d88.327557!3d22.488006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027b0d49d8edeb%3A0x7e134214e31e7f5f!2sGBC%20Infrastructure%20Pvt.Ltd.!5e0!3m2!1sen!2sus!4v1740823518639!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="GBC Infrastructure Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Subscribe Newsletter:</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                SUBMIT NOW
              </Button>
            </div>
            <div className="flex gap-4 items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Follow Us:</h2>
              <div className="flex gap-3">
                <a 
                  href="https://x.com/gbcinfra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/gbcipltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@gbcinfrastructurepvtltd1124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-500"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/gbc-infrastructure-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 