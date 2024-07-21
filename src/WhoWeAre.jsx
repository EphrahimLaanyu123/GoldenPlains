import React, { useState, useEffect } from 'react'
import DetailPage from './components/DetailPage'
import { useParams } from 'react-router-dom';

function WhoWeAre() {
  const {id} = useParams();
    const [whoweare, setWho] = useState({});
    const [title, setTitle] = useState("")

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://goldenplainspjs.com/wp-json/wp/v2/posts/${id}`
            );
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setWho(data.content.rendered);
            setTitle(data.title.rendered);

          } catch (error) {
            setError(error);
          } finally {
            
          }
        };
      
        fetchData();
      }, []);

  return (
    <div>
        <DetailPage message={title} title={title} content={whoweare} />
    </div>
  )
}

export default WhoWeAre