import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const [data, setData] = useState([]);

  const url = 'https://sarkari-result.p.rapidapi.com/scrape/latestjob';

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '79114765bdmsh48ada3ba2db8462p11d01ajsn73455c51260e', // Replace with your actual API key
      'x-rapidapi-host': 'sarkari-result.p.rapidapi.com',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await res.json();
        console.log(result)
        setData(result); // Convert JSON format to string
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Changed dependency array to an empty array to avoid infinite loop

  return (
    <>
      <Navbar />
      <section className='h-screen w-full bg-[#ECF0F1] flex flex-col items-center overflow-hidden'>
        <h1 className="text-4xl font-bold text-[#2C3E50] text-center pb-8 mt-10">Job Updates</h1>
        <div className="cards flex flex-wrap gap-6 p-8 max-w-6xl">
          {data && data.result ? data.result.slice(0, 12).map((item, index) => (
            <a className='border-2 border-[#BDC3C7] p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-[#E74C3C] hover:text-white text-[#2C3E50] font-semibold' key={index} href={item.href} target='_blank' rel="noopener noreferrer">{item.text}</a>
          )) : <p className="text-[#2C3E50]">Loading...</p>}
        </div>
        <Link to="/job">
          <button className='mt-4 bg-[#E74C3C] text-white hover:bg-[#2C3E50] transition-colors duration-300 py-2 px-4 rounded-lg font-semibold'>
            View More
          </button>
        </Link>
      </section>
    </>
  );
}

export default Jobs;