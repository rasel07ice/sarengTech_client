const images = [
  "./g-1.jpg",
  "./g-2.jpg",
  "./g-3.jpg",
  "./g-4.jpg",
  "./g-5.jpg",
  "./g-6.jpg",
  "./g-7.jpg",
  "./g-8.jpg",
  "./c-1.png",
  "./c-2.png",
  "./c-3.png",
  "./c-4.png",
];

const MasonaryImageGrid = () => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 py-10 md:py-20 gap-4">
      {images.map((imgsrc, index) => (
        <div
          key={index}
          className="mb-4 break-inside-avoid group cursor-pointer relative"
        >
          <img src={imgsrc} alt="" className="w-full object-cover rounded-md" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonaryImageGrid;
