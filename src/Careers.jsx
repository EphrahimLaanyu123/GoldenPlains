import React, { useState } from 'react';
import bgImage from "./assets/Hero5.png"; 

function Careers() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      title: email,
      content: `Phone: ${phone}\n\nMessage: ${message}`,
      status: 'publish'
    };

    try {
      const response = await fetch('https://goldenplainspjs.com/wp-json/wp/v2/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_JWT_TOKEN' // Replace with your JWT token
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      setSuccess(true);
      setError(null);
    } catch (error) {
      console.error('There was an error!', error);
      setError(error.toString());
      setSuccess(false);
    }
  };

  const title = "Careers";
  return (
    <div>
      <Navbar />
      <div
        className="h-[40vh] relative flex justify-center items-center font-bold text-4xl md:text-8xl text-white pt-8 md:pt-52"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
        <div className="relative z-10">{title}</div>
      </div>
      <div className='pt-10'>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>Form submitted successfully!</p>}
        <form onSubmit={handleSubmit}>
          <div className='flex justify-center pt-2 text-2xl font-bold'>Work with us</div>
          <div className='flex justify-center pt-5'>
            <input
              className='border-b-2 w-96'
              type='text'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='flex justify-center pt-5'>
            <input
              className='border-b-2 w-96'
              type='text'
              placeholder='Enter your phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className='flex justify-center pt-5'>
            <textarea
              className='border-b-2 w-96'
              placeholder='Enter your message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className='flex justify-center pt-10'>
            <button type='submit' className='w-96 bg-cyan-700 p-2 rounded-2xl text-white font-bold'>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Careers;
