// ImageSearch component for handling image search input
import { useState } from "react";

const ImageSearch = ({ searchText }) => {
  // State variable for managing the input text
  const [text, setText] = useState("");

  // Function to handle form submission and invoke the searchText callback
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  // Render the search input form
  return (
    <div className="absolute w-full mt-10 flex items-center justify-center text-gray-600">
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search"
          className="bg-white relative h-10 px-6 pr-10 rounded-full text-sm focus:outline-none"
        />
        <button type="submit" className="relative right-7">
          {/* Search icon */}
          <i className="bx bx-search hover:text-purple-700 transition-all"></i>
        </button>
      </form>
    </div>
  );
};

// Exporting the ImageSearch component as the default export
export default ImageSearch;