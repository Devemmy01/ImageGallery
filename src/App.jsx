import { useState, useEffect } from "react";
import ImageCards from "./Components/ImageCards";
import ImageSearch from "./Components/ImageSearch";
import github from "./assets/github.png"

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
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

  return (
    <div>
      <nav className="p-6 flex items-center justify-between">
        <div className="">
          <h1 className="font-bold font-mono text-xl">SearchImg</h1>
        </div>
        <div className="github">
          <a href="https://github.com/Devemmy01/ImageGallery">
            <img src={github} alt="" />
          </a>
        </div>
      </nav>
      <ImageSearch searchText={(text) => setTerm(text)} />
      <div className="container mb-20 mt-36 mx-auto transition-all">
        {!isLoading && images.length === 0 && (
          <h1 className="text-3xl font-bold text-gray-600 md:text-5xl font-mono text-center mx-auto mt-44 md:mt-32">No result found</h1>
        )}

        {isLoading ? (
          <div className="flex items-center justify-center gap-3">
            <span className="text-6xl animate-bounce">.</span>
            <span className="text-6xl animate-bounce">.</span>
            <span className="text-6xl animate-bounce">.</span>
          </div>
        ) : (
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

export default App;
