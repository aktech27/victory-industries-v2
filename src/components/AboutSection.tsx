import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
          <Image
            src="/assets/about.webp"
            alt="About Victory Industries"
            width={1024}
            height={1024}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            About Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Founded with a commitment to excellence, Victory Industries has
            become a trusted name in manufacturing electrical and panel board
            accessories. Our precision-engineered solutions empower modern
            electrical infrastructure with safety and reliability.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            With decades of expertise and innovation, we continuously strive to
            deliver products that exceed industry standards and customer
            expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
