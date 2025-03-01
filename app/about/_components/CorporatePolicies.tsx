'use client'

import React from "react";
import { Download } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const CorporatePolicies = () => {
  const handleDownload = (fileName: string) => {
    // In a real implementation, you would:
    // 1. Either fetch the file from an API
    // 2. Or create a direct link to the file on your server
    
    // For now, we'll simulate a download by creating a temporary anchor element
    const link = document.createElement('a');
    link.href = `/dummy-pdfs/${fileName}.pdf`; // This would be the actual path to your PDF
    link.setAttribute('download', `${fileName}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">
              Corporate <span className="text-blue-600">Policies</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              GBC Infrastructure is striving for a quality job since its inception and making a sincere effort to serve our valued customers. Our growth rate is beyond our expectations and we are proud of our people, our work culture, our honesty, discipline, proactive approach and more over our strong liberal policies.
            </p>
          </div>

          <div className="mb-12 animate-fade-in">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4 bg-white dark:bg-gray-800 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                  Commitment to Excellence in Quality, Safety and Professionalism
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 dark:text-gray-300">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>As we are engaging in executing infrastructure projects, we are committed to continual improvement in our quality and safety, health & environmental performance by implementing stringent project SOPs.</li>
                    <li>We are very particular in our HR policy and developed disciplinary workforce with the justified codes.</li>
                    <li>We believe that individuals with composed our diverse workforce should be treated with respect and dignity as our collective success as a business depends on it.</li>
                    <li>We expect all employees to follow the guidelines of accepted business conduct, because it is conducive to efficient operations and it makes the company a more pleasant place to work. Without that desirable conditions such as organizers, uncompromiseness, and continuous fluidity to get along with other employees will be subject to disciplinary action and possible termination.</li>
                    <li>All employees shall not take any unfair advantage of anyone through manipulation, concealment, abuse of confidential, proprietary or trade secret information, misrepresentation of material facts, or any other unfair dealing practice.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                  Commitment to an Inclusive and Ethical Workplace
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 dark:text-gray-300">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We are committed to providing equal employment opportunities to all individuals without regard to race, color, religion, sex, national origin, age, disability, or any other characteristic protected by law.</li>
                    <li>Our workplace is free from harassment and discrimination of any kind, including but not limited to verbal, physical, or visual conduct that creates an intimidating, offensive, or hostile environment.</li>
                    <li>We maintain a zero-tolerance policy for workplace violence, threats, bullying, and similar disruptive behavior.</li>
                    <li>All employees are expected to act with integrity and adhere to the highest ethical standards in their business dealings and relationships.</li>
                    <li>We encourage open communication and provide channels for employees to report concerns without fear of retaliation.</li>
                    <li>We respect the privacy and confidentiality of our employees, customers, and business partners, and handle all sensitive information with appropriate care.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="space-y-4 animate-fade-in">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Company Policy, Rules & Regulation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Click to download our company policies, rules, and regulations</p>
              </div>
              <Button 
                onClick={() => handleDownload('company-policy')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Download <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Annual Reports</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Click to download our latest annual reports</p>
              </div>
              <Button 
                onClick={() => handleDownload('annual-reports')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Download <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Financial Graph</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Click to download our financial performance graphs</p>
              </div>
              <Button 
                onClick={() => handleDownload('financial-graph')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Download <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 -left-10 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CorporatePolicies;