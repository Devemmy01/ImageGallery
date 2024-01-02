import { useState, useEffect } from "react"


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
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img src="https://source.unsplash.com/random" className="w-full" alt="" />

      <div className="px-6 px-4">
        <div className="mb-2 fontbold text-purple-500 text-xl">
          Photo by captain price
        </div>

        <div >
          <span className="font-bold text-xl">Views:  </span>
          <span className="font-bold text-xl">Downloads: </span>
          <span className="font-bold text-xl">Likes: </span>
        </div>
      </div>

      <div className="px-6 px-4">
        <span className="inline block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>

        <span className="inline block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>

        <span className="inline block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
      </div>
    </div>
  )
}

export default App
