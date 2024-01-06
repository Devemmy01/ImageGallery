import { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    searchText(text);
  };

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
          <i className="bx bx-search hover:text-purple-700 transition-all"></i>
        </button>
      </form>
    </div>
  );
};

export default ImageSearch;
