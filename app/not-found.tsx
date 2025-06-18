import { Button } from "@/components/ui/button";
import { Home, Phone, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 flex items-center justify-center px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[200px] md:text-[300px] font-bold text-blue-600/20 leading-none select-none">
            404
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative -mt-20 md:-mt-32">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page <span className="text-blue-600">Not Found</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back to exploring our infrastructure solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
            
            <Link href="/projects">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg flex items-center gap-2">
                <Search className="w-5 h-5" />
                View Projects
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 mb-4">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/about" className="text-blue-600 hover:text-blue-700 transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-blue-600 hover:text-blue-700 transition-colors">
                Our Services
              </Link>
              <Link href="/projects" className="text-blue-600 hover:text-blue-700 transition-colors">
                Projects Portfolio
              </Link>
              <Link href="/process" className="text-blue-600 hover:text-blue-700 transition-colors">
                Our Process
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-60 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-slate-100 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute top-1/3 right-20 w-4 h-4 bg-blue-400 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 left-20 w-6 h-6 bg-blue-300 rounded-full opacity-20"></div>
      </div>
    </div>
  );
} 