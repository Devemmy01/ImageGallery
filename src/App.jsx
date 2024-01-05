import { useState, useEffect } from "react"
import ImageCards from "./Components/ImageCards"
import ImageSearch from "./Components/ImageSearch";

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://pixabay.com/api/?key=41448682-600be54c66c121fc6ad309ce1&q=${term}&image_type=photo&pretty=true`)
      .then(response => response.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(error => console.log(error))
    },3000)
  }, []);

  return (
    <div className="container mx-auto transition-all">
      <ImageSearch />
      {isLoading ? <div className="flex mx-auto items-center justify-center gap-3">
        <span className="text-6xl animate-bounce">.</span>
        <span className="text-6xl animate-bounce">.</span>
        <span className="text-6xl animate-bounce">.</span>
      </div> : <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCards key={image.id} image={image}/>
        ))}
      </div>}
    </div>
  )
}

export default App
