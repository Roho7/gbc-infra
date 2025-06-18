'use client'

import { Play } from "lucide-react";
import { useState } from "react";

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-slate-200 via-slate-400 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-gray-900">
            See Our <span className="text-blue-600">Work</span> in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we transform infrastructure projects through innovative engineering solutions. 
            Watch our comprehensive showcase of water treatment plants, intake jetties, and construction excellence.
          </p>
        </div>

        {/* Video Container - Made Taller */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 to-slate-900" style={{ aspectRatio: '16/9' }}>
            {!isPlaying ? (
              /* Video Thumbnail with Play Button */
              <div className="relative w-full h-full bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 flex items-center justify-center group cursor-pointer"
                   onClick={handlePlayClick}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:24px_24px]"></div>
                </div>
                
                {/* Play Button */}
                <div className="relative z-10 flex flex-col items-center space-y-6">
                  <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300 group-hover:scale-110 border border-white/20">
                    <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      GBC Infrastructure Showcase
                    </h3>
                    <p className="text-blue-200">
                      Click to watch our project highlights
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 w-16 h-16 border-2 border-blue-400/20 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-blue-500/30 rounded-full"></div>
                <div className="absolute top-1/3 right-16 w-6 h-6 bg-blue-500/30 rounded-full"></div>
                <div className="absolute bottom-1/3 left-16 w-8 h-8 bg-blue-400/20 rounded-full"></div>
              </div>
            ) : (
              /* YouTube Embed */
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/D44VALo1d1g?si=r00QNboSIbK8Rfjj&autoplay=1" 
                title="GBC Infrastructure Video Showcase" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 