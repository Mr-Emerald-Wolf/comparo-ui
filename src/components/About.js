import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <>
                <section className="dark:bg-slate-800 min-h-screen p-2">



                    <div className="bg-gray-50 dark:bg-gray-900 p-6 mt-6 rounded shadow-md ">
                        <h1 className="text-4xl md:text-6xl lg:text-9xl p-3 font-kalam font-bold dark:text-white text-black">
                            About Us
                        </h1>
                        <div className="px-6">

                            <p className="mt-1 dark:text-sky-200 text-sky-700 md:text-xl">
                                Going into an e-commerce website and spending hours upon hours comparing multiple different products, their prices, specifications etc... is an arduous cycle of hesitation and deliberation which we are all too familiar with. With Comparo say good-bye to this hassle forever ! Comparo allows you to select multiple items from every different e-commerce site, be it Amazon or Flipkart and provides you with a simple UI where you can compare all the different items in 1 place. As students, we may not be able to make an impact on a large enough scale but we hoped to make the road easier for others. And that is what Comparo aims to do.
                            </p>
                        </div>


                    </div>


               

                    <div className="bg-gray-50 dark:bg-gray-900 p-6 mt-6 rounded shadow-md ">

                        <div className="px-6 mt-4">
                            <h2 className="title-font text-4xl font-semibold text-sky-900 dark:text-white tracking-widest md:text-5xl">
                                Team Members
                            </h2>
                            <p className="dark:text-sky-200 text-sky-700 leading-relaxed md:text-xl">
                                <br />Muhammad Imran Khan - Leader, Backend {"&"}  API Development <br />   Shivam - Front End {"&"} UI Designer <br /> Mudit Sultania - Content Writer <br />Suryansh Raj Pratap Singh - Marketing<br /> Riya Agrawal - Guide <br /> Pavan K - Project Manager {"&"} Bug Tester
                            </p>

                        </div>

                    </div>


             
                </section>
            </>
        )
    }
}

export default About