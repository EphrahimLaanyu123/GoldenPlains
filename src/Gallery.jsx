import React, { useState, useEffect } from 'react';

function Gallery() {
  const [images, setImages] = useState([]);
  const [err, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://goldenplainspjs.com/wp-json/wp/v2/media'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (err) {
    return <div>Error: {err}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {images.length === 0 ? (
          <p>Loading...</p>
        ) : (
          images.map((image) => (
            <div key={image.id} className="max-w-xs border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <img src={image.guid.rendered} alt={image.title.rendered} className="w-full h-auto" />
              <div className="p-4 text-center">
                <p>{image.title.rendered}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Gallery;
