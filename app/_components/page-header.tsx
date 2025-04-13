import Image from 'next/image';

type Props = {
    title: string;
    description?: string;
    image?: string;
}

const PageHeader = ({title, description, image}: Props) => {
  return (
    <section className="relative py-20 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={image || "https://gbcinfrastructure.in/material/front/assets/img/banner-new-4.jpg"}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              {title.split(' ')[0]} <span className="text-blue-400">{title.split(' ')[1]}</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl animate-fade-in">
              {description}
            </p>
          </div>
        </div>
      </section>
  )
}

export default PageHeader