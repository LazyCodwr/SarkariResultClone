import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Job = () => {

    const [data, setData] = useState(null);

    const url = 'https://sarkari-result.p.rapidapi.com/scrape/answerkey';

    const options = {

        method: 'GET',

        headers: {

            'x-rapidapi-key': 'd2ab128b96msh030ffff5330dda5p1a3366jsndf4a0529e73b',

            'x-rapidapi-host': 'sarkari-result.p.rapidapi.com'

        }

    };



    useEffect(() => {

        const fetchData = async () => {

            try {

                const res = await fetch(url, options);

                const result = await res.json();

                setData(result);

                console.log(result);

            } catch (error) {

                console.error('Error fetching data:', error);

            }

        };



        fetchData();

    }, []);


  return (
    <>
  <Navbar/>
    <section className='h-fit w-full bg-[#ECF0F1] flex flex-col items-center pt-[8vw]'>
        <h1 className="text-4xl font-bold text-[#2C3E50] text-center pb-8 mt-10">Job Updates</h1>
        <div className="cards flex flex-wrap gap-6 p-8 max-w-6xl">    
            {data ? data.result.map((item, index) => (
                <a className='border-2 border-[#BDC3C7] p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-[#E74C3C] hover:text-white text-[#2C3E50] font-semibold' key={index} href={item.href} target='_blank'>{item.text}</a>
            )) : <p className="text-[#2C3E50]">Loading...</p>}
        </div>
        <Link to="/job"><button className='mt-4 bg-[#E74C3C] text-white hover:bg-[#2C3E50] transition-colors duration-300 py-2 px-4 rounded-lg font-semibold'>
            View More
        </button></Link>
    </section>
    </>
  )
}

export default Job