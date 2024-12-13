import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const Job = () => {
    const [data, setData] = useState([]);
    const url = 'https://sarkari-result.p.rapidapi.com/scrape/latestjob';

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '79114765bdmsh48ada3ba2db8462p11d01ajsn73455c51260e',
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
            setData(result); // Store the result directly instead of stringifying it
            console.log(result); // Log the fetched result
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <>
            <Navbar />
            <section className='h-fit w-full bg-[#ECF0F1] flex flex-col items-center pt-[8vw]'>
                <h1 className="text-4xl font-bold text-[#2C3E50] text-center pb-8 mt-10">Job Updates</h1>
                <div className="cards flex flex-wrap gap-6 p-8 max-w-6xl">
                {data && data.result ? data.result.map((item, index) => (
                    <a className='border-2 border-[#BDC3C7] p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-[#E74C3C] hover:text-white text-[#2C3E50] font-semibold' key={index} href={item.href} target='_blank' rel="noopener noreferrer">{item.text}</a>
                )) : <p className="text-[#2C3E50]">Loading...</p>}
                </div>
            </section>
        </>
    );
}

export default Job;