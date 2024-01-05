import React from "react";

const ImageSearch = () => {
  return (
    <div className="relative text-gray-600">
      <input
        type="search"
        name="serch"
        placeholder="Search"
        className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
      <i className='bx bx-search'></i>
      </button>
    </div>
  );
};

export default ImageSearch;
