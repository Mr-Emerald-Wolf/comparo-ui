import React, { Component } from 'react'

export class Help extends Component {
    render() {
        return (
            <>
                <section className="dark:bg-slate-800 h-screen">
                    <div className="p-4">


                        <div className="bg-gray-50 dark:bg-gray-900 py-6 mt-6 rounded shadow-md ">
                            <h1 className="text-4xl md:text-6xl lg:text-9xl p-3 font-kalam font-bold dark:text-white text-black">
                                F.A.Q.
                            </h1>
                            <div className="px-6">
                                <h2 className="title-font font-semibold text-sky-900 dark:text-white tracking-widest md:text-2xl">
                                    How to use Comparo ? 
                                </h2>
                                <p className="mt-1 dark:text-sky-200 text-sky-700 md:text-xl">
                                  Just search any product to get the best price at the moment. 
                                </p>
                            </div>
                            <div className="px-6 mt-4">
                                <h2 className="title-font font-semibold text-sky-900 dark:text-white tracking-widest md:text-2xl">
                                    Is our data accurate ? 
                                </h2>
                                <p className="dark:text-sky-200 text-sky-700 leading-relaxed md:text-xl">
                                    comparocommerce@gmail.com
                                </p>

                            </div>
                            <div className="px-6 mt-4">
                                <h2 className="title-font font-semibold text-sky-900 dark:text-white tracking-widest md:text-2xl">
                                   What is our subscription model ?
                                </h2>
                                <a className="dark:text-sky-200 text-sky-700 leading-relaxed md:text-xl" href="https://www.instagram.com/comparo.ecommerce/">
                                    comparo.commerce
                                </a>

                            </div>
                            <div className="px-6 mt-4">
                                <h2 className="title-font font-semibold text-sky-900 dark:text-white tracking-widest md:text-2xl">
                                    How does it work ? 
                                </h2>
                                <p className="dark:text-sky-200 text-sky-700 leading-relaxed md:text-xl" >
                                    8555509495
                                </p>

                            </div>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}

export default Help