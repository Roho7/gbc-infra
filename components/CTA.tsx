import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-blue-600/0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-white">
            Ready to Start Your Next Infrastructure Project?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us today to discuss how GBC Infrastructure can help bring
            your vision to life with our expertise and commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold"
              asChild
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 