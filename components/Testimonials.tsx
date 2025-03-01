import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "GBC Infrastructure delivered our commercial complex project on time and within budget. Their attention to detail and commitment to quality was exceptional.",
    author: "Rajiv Mehta",
    position: "CEO, Mehta Developers",
    image: "/testimonial1.jpg",
  },
  {
    quote:
      "Working with GBC on our municipal infrastructure project was a seamless experience. Their team's expertise and professionalism made a complex project manageable.",
    author: "Priya Sharma",
    position: "Municipal Commissioner",
    image: "/testimonial2.jpg",
  },
  {
    quote:
      "The GBC team went above and beyond to ensure our industrial facility met all specifications. Their innovative solutions saved us both time and resources.",
    author: "Vikram Singh",
    position: "Director, Singh Industries",
    image: "/testimonial3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
      
      <div className=" w-full relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear from the clients who have
            experienced our commitment to excellence.
          </p>
        </div>

        <div className="flex justify-center flex-1 px-4">
          <div className="grid gap-8 md:grid-cols-3 stagger-children">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg relative flex flex-col animate-fade-in hover-lift border border-gray-100 dark:border-gray-700"
              >
                <Quote className="text-blue-600/20 h-12 w-12 absolute -top-2 -left-2" />
                <p className="text-muted-foreground mb-6 italic relative z-10">
                &quot;{testimonial.quote}&quot;
                </p>
                <div className="mt-auto flex items-center">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full mr-4 border-2 border-blue-600">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-0 w-20 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Testimonials; 