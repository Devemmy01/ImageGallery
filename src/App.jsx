import { useState, useEffect } from "react"
import ImageCards from "./Components/ImageCards";


function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=41448682-600be54c66c121fc6ad309ce1&q=${term}&image_type=photo&pretty=true`)
      .then(response => response.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map(image => {
          <ImageCards />
        })}
      </div>
    </div>
  )
}

export default App
