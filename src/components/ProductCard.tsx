import Image from "next/image";

export default function ProductCard({
  image,
  name,
  description,
}: {
  image: string;
  name: string;
  description: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition overflow-hidden p-2">
      <div className="relative w-full h-48">
        <Image src={image} alt={name} fill className="object-contain" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
