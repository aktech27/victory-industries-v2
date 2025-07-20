const videos = [
  {
    id: "9DKcKwp6w9U",
    title: "TB Channel Manufacturing",
  },
  {
    id: "yHpYROgW5Uw",
    title: "TB Channel Cutting",
  },
  {
    id: "CNBLfYtaGyw",
    title: "TB Channel Cleaning",
  },
  {
    id: "DoEtvLCdWdE",
    title: "MCB Channel Manufacturing",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-gray-50 dark:bg-gray-800   py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
          Video Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="aspect-video w-full rounded-lg overflow-hidden shadow-md"
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
