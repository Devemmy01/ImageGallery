// ImageCards component for displaying individual image cards
import React from "react";

const ImageCards = ({ image }) => {
  // Splitting tags string into an array
  const tags = image.tags.split(",");

  // Render the image card with details
  return (
    <div className="max-w-sm max-h-[450px] rounded-2xl mx-7 sm:mx-auto overflow-hidden shadow-lg">
      <img
        src={image.webformatURL}
        className="w-full max-h-[225px] object-cover"
        alt=""
      />

      <div className="px-6 py-4">
        <div className="mb-2 font-bold font-mono text-purple-500 text-[15px] md:text-xl">
          {/* Displaying image details */}
          Photo by {image.user}
        </div>

        {/* Displaying additional image details */}
        <div className="flex flex-col md:flex-row gap-1">
          <span className="font-bold text-[17px] md:text-xl flex gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[21px] w-[21px] md:h-[24px] md:w-[24px]" viewBox="0 0 24 24">
              <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
            </svg>{" "}
            {image.views}
          </span>
          <span className="font-bold text-[17px] md:text-xl">
            <i className='bx bxs-download text-xl'></i> {image.downloads}
          </span>
          <span className="font-bold text-[17px] md:text-xl">
            <i className='bx bxs-like text-xl'></i> {image.likes}
          </span>
        </div>
      </div>

      {/* Displaying image tags */}
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// Exporting the ImageCards component as the default export
export default ImageCards;