import React from "react";

const ImageCards = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm max-h-[450px] rounded overflow-hidden shadow-lg">
      <img
        src={image.webformatURL}
        className="w-full max-h-[225px] object-cover"
        alt=""
      />

      <div className="px-6 py-4">
        <div className="mb-2 fontbold text-purple-500 text-xl">
          Photo by {image.user}
        </div>

        <div>
          <span className="font-bold text-xl">Views: {image.views} </span>
          <span className="font-bold text-xl">
            Downloads: {image.downloads}
          </span>
          <span className="font-bold text-xl">Likes: {image.likes} </span>
        </div>
      </div>

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

export default ImageCards;
