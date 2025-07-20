import Image from "next/image";

const HomeSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <p className="text-xs md:text-sm uppercase text-green-400 font-semibold tracking-wide mb-0.5 md:mb-3">
            Leading Through Innovation
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-2 md:mb-4">
            Victory Industries
          </h1>
          <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            “Empowering electrical infrastructure with precision-built panel
            board accessories, made to last.”
          </p>
          <div className="flex flex-row gap-4">
            <a
              href="#products"
              className="px-6 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 transition dark:text-white dark:border-gray-600 dark:hover:bg-gray-800"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="w-full h-[28rem] md:h-[32rem] lg:h-[36rem] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/assets/hero-main.webp"
            alt="Victory Industries hero"
            width={1024}
            height={1024}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
