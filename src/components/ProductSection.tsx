import ProductCard from "./ProductCard";

const products = [
  {
    image: "/assets/din-rail-plain.webp",
    name: "DIN Rail 35mm (Plain)",
    description: "Standard 1m plain rail for secure component mounting.",
  },
  {
    image: "/assets/din-rail-slotted.webp",
    name: "DIN Rail 35mm (Slotted)",
    description: "1m slotted rail ideal for easy wiring and ventilation.",
  },
  {
    image: "/assets/tb-channel.webp",
    name: "T.B. Channel – 1 Meter",
    description: "Robust terminal block channel for organized layouts.",
  },
];

export default function ProductSection() {
  return (
    <section id="products" className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
          Our Products
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our range of essential electrical panel accessories designed
          for performance and durability.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, idx) => (
          <ProductCard
            key={idx}
            image={product.image}
            name={product.name}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
}
