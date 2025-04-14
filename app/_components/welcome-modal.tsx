'use client';

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal on first visit
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsOpen(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Welcome to GBC Infrastructure</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Partner Site Button */}
          <a 
            href="https://gbconstruction.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button 
              variant="outline" 
              className="w-full h-40 flex flex-col items-center justify-center gap-4 border-2"
            >
              <div className="w-24 h-24 relative">
                <Image
                  src="/gb-logo.png"
                  alt="GB Construction Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-lg font-semibold text-blue-900">Go to Partner Site</span>
            </Button>
          </a>

          {/* Stay Here Button */}
          <Button 
            variant="default"
            className="w-full h-40 flex flex-col items-center justify-center gap-4 bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-24 h-24 relative">
              <Image
                src="/gbc-white.png"
                alt="GBC Infrastructure Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className="text-lg font-semibold">Stay Here</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 