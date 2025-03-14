import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ContactInfo from "@/components/ContactInfo";
import "./globals.css";
import { DataProvider } from "./_hooks/useData";

export default function Home() {
  return (
    <DataProvider>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 flex flex-col gap-0">
          <Hero />
          <ContactInfo />
          <Services />
          <Projects />
          <Testimonials />
          <CTA />
        </main>
      </div>
    </DataProvider>
  );
}
