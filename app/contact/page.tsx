import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, User, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://gbcinfrastructure.in/material/front/assets/img/banner-new-4.jpg"
            alt="GBC Infrastructure Contact"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Contact <span className="text-blue-400">Us</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl animate-fade-in">
              Get in touch with our team to discuss your infrastructure needs and how we can help bring your projects to life.
            </p>
          </div>
        </div>
      </section>

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
            <div className="flex gap-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Follow Us:</h2>
              <div className="flex gap-3">
                <a href="#" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className="text-gray-700 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 