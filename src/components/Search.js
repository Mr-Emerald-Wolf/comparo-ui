import React, { useState, useEffect } from 'react'
//import { useParams } from 'react-router-dom'
import Spinner from './Spinner';

export default function Search() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
      let url = params.url; // "some_value"

    async function loadData() {
        const response = await fetch("https://comparoserver.herokuapp.com/results");
        const data = await response.json();
        setData(data);
        console.log(data);
        // logs [{ name: 'Joker'}, { name: 'Batman' }]
    }
    let [data, setData] = useState([1])
    useEffect(() => {
        loadData();

    }, [])
    //console.log(data);
    return (
        <>
            <section className="dark:bg-slate-800 h-screen">
            {data.length === 0 && <Spinner/>}
                <div className="p-4">
                   
                    {data.length > 0 && (

                        <div className="bg-gray-50 dark:bg-gray-900 py-6 mt-6 rounded shadow-md ">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl p-3 font-kalam font-bold dark:text-white text-black">

                                {data.map(element => (
                                    <>
                                        {element.title}
                                    </>
                                ))}


                            </h1>
                            <div className="px-6">
                                <h2 className="title-font font-semibold text-sky-900 dark:text-white tracking-widest md:text-2xl">
                                    Specifications
                                </h2>

                                <p className="mt-1 dark:text-sky-200 text-sky-700 md:text-xl">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium impedit fuga unde illum amet quasi nobis! Consequuntur quam, ab ratione repudiandae quisquam corrupti facilis nobis odio ea pariatur! Animi?
                                </p>
                            </div>
                            <div className="px-6 mt-4">
                                <h2 className="title-font font-semibold text-sky-900 dark:text-white tracking-widest md:text-2xl">
                                    Price
                                </h2>
                                <p className="dark:text-sky-200 text-sky-700 leading-relaxed md:text-xl">
                                    $5000
                                </p>

                            </div>
                            <div className="px-6 mt-4">
                                <h2 className="title-font font-semibold text-sky-900 dark:text-white tracking-widest md:text-2xl">
                                    URL
                                </h2>
                                <a className="dark:text-sky-200 text-sky-700 leading-relaxed md:text-xl" href={url}>
                                    {url}
                                </a>

                            </div>

                        </div>
                    )}
                </div>
            </section >
        </>
    )
}
