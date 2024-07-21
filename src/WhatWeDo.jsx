import React, { useEffect } from 'react';
import DetailPage from './components/DetailPage';
import WhoWeAre from './WhoWeAre';


function WhatWeDo() {
    const [who, setWho] = useEffect({})
    const [title, setTitle] = useEffect("")
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              'https://goldenplainspjs.com/wp-json/wp/v2/posts/9'
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
    <div><DetailPage message={title} content={who} title={title} /></div>
  )
}

export default WhatWeDo