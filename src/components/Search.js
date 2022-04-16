import React, { useState, useEffect } from 'react'
import SeachItem from './SeachItem';
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
        let timeout1 = setTimeout(() => { loadData() }, 1000);
        return () => {
            clearTimeout(timeout1);
        }

    }, [])
    //console.log(data);
    return (
        <>
            <section className="dark:bg-slate-800 h-screen">
                {data.length === 1 && <Spinner key={"spin"} />}
                <div className="p-4">

                    {data.length > 0 && (


                        <div className="bg-gray-50 dark:bg-gray-900 py-6 mt-6 rounded shadow-md ">


                            {data.map(element => (
                                <>
                                    <SeachItem key={url.length} data={element} url={url} />
                                </>
                            ))}


                        </div>
                    )}
                </div>
            </section >
        </>
    )
}
