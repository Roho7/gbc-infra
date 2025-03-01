import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-900 to-blue-800 py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            {/* Phone */}
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 border border-blue-400/30">
                <Phone className="h-6 w-6 text-blue-200" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">(033) 2494 0412</h3>
                <p className="text-blue-200">Make a call</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 border border-blue-400/30">
                <Mail className="h-6 w-6 text-blue-200" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">info@gbcinfrastructure.in</h3>
                <p className="text-blue-200">Drop us a line</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 border border-blue-400/30">
                <MapPin className="h-6 w-6 text-blue-200" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">196, Raja Rammohan Roy Rd.</h3>
                <p className="text-blue-200">Get direction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background image overlay - optional, remove if not needed */}
      <div className="absolute inset-0 bg-black/30 -z-10"></div>
      
      {/* You can add a background image here if needed */}
      <div 
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/contact-bg.jpg')",
          opacity: 0.4
        }}
      ></div>
    </section>
  );
};

export default ContactInfo; 