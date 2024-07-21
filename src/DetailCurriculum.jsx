import React ,{useEffect, useState}from 'react'
import DetailPage from './components/DetailPage'
import { useParams } from 'react-router-dom'


function DetailCurriculum({}) {
  const {id} = useParams();  
  const [sci, setSci] = useState();
  const [all, setAll]= useState();
  const [err, setError]= useState();



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://goldenplainspjs.com/wp-json/wp/v2/posts/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSci(data.content.rendered);
        setAll(data.title.rendered);
      } catch (error) {
        setError(error);
      } finally {
      }
    };

    fetchData();
  }, []);

  // console.log(all)
  


  return (
    <div><DetailPage title={all} content={sci} message={all} />
    </div>
  )
}

export default DetailCurriculum