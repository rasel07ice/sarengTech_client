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
            <button
              className="btn"
              onClick={() => {
                const src = `image_modal_` + index;
                document.getElementById(src).showModal();
              }}
            >
              View
            </button>
            <dialog id={`image_modal_` + index} className="modal">
              <div className="modal-box max-w-none w-3/6">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-secondary">
                    ✕
                  </button>
                </form>
                <div className="p-4">
                  <img src={imgsrc} alt="" className="h-fit rounded-md" />
                </div>
              </div>
            </dialog>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonaryImageGrid;
