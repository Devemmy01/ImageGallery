// Importing necessary dependencies from React
import { useState, useEffect } from "react";
import ImageCards from "./Components/ImageCards";
import ImageSearch from "./Components/ImageSearch";
import github from "./assets/github.png"

// Main App component
function App() {
  // State variables for managing images, loading state, and search term
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  // useEffect to fetch images from Pixabay API when the search term changes
  useEffect(() => {
    // Using setTimeout to simulate a loading delay for better user experience
    setTimeout(() => {
      fetch(
        `https://pixabay.com/api/?key=41448682-600be54c66c121fc6ad309ce1&q=${term}&image_type=photo&pretty=true`
      )
        .then((response) => response.json())
        .then((data) => {
          setImages(data.hits);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, 1000);
  }, [term]);

  // Render the main application UI
  return (
    <div>
      {/* Navigation bar */}
      <nav className="p-6 flex items-center justify-between">
        <div className="">
          <h1 className="font-bold font-mono text-xl">SearchImg</h1>
        </div>
        <div className="github">
          {/* GitHub link */}
          <a href="https://github.com/Devemmy01/ImageGallery">
            <img src={github} alt="" />
          </a>
        </div>
      </nav>

      {/* Image search component */}
      <ImageSearch searchText={(text) => setTerm(text)} />

      {/* Container for displaying images */}
      <div className="container mb-20 mt-36 mx-auto transition-all">
        {/* Display a message if no images are available */}
        {!isLoading && images.length === 0 && (
          <h1 text-5xl font-mono text-center mx-auto mt-32></h1>
        )}

        {/* Loading animation while images are being fetched */}
        {isLoading ? (
          <div className="flex items-center justify-center gap-3">
            <span className="text-6xl animate-bounce">.</span>
            <span className="text-6xl animate-bounce">.</span>
            <span className="text-6xl animate-bounce">.</span>
          </div>
        ) : (
          // Display the grid of image cards once images are loaded
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full gap-4">
            {images.map((image) => (
              <ImageCards key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Exporting the App component as the default export
export default App;