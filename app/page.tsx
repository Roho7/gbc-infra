import CTA from "@/components/CTA";
import ContactInfo from "@/components/ContactInfo";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import PartnerBanner from "./_components/partner-banner";
import VideoShowcase from "./_components/video-showcase";
import { DataProvider } from "./_hooks/useData";
import "./globals.css";

export default function Home() {
  return (
    <DataProvider>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 flex flex-col gap-0">
          <Hero />
          <ContactInfo />
          <Services />
          <VideoShowcase />
          <Projects />
          {/* <Testimonials /> */}
          <CTA />
          <PartnerBanner />
        </main>
      </div>
    </DataProvider>
  );
}
