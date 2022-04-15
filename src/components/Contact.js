import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
      <>
      <section id="contact" className=" dark:bg-slate-800">
                <div className="container p-4 mx-auto">

                    <div className="bg-gray-50 dark:bg-gray-900 py-6 mt-6 rounded shadow-md flex-col md:w-1/2 h-1/2 ">
                        <div className="px-6">
                            <h2 className="title-font font-semibold text-sky-900 dark:text-white tracking-widest md:text-2xl">
                                ADDRESS
                            </h2>
                            <p className="mt-1 dark:text-sky-200 text-sky-700 md:text-xl">
                                India <br />Delhi <br />
                                Dwarka
                            </p>
                        </div>
                        <div className="px-6 mt-4">
                            <h2 className="title-font font-semibold text-sky-900 dark:text-white tracking-widest md:text-2xl">
                                EMAIL
                            </h2>
                            <p className="dark:text-sky-200 text-sky-700 leading-relaxed md:text-xl">
                                shivamsharma2002@gmail.com
                            </p>

                        </div>
                        <div className="px-6 mt-4">
                            <h2 className="title-font font-semibold text-sky-900 dark:text-white tracking-widest md:text-2xl">
                                Github Profile
                            </h2>
                            <a className="dark:text-sky-200 text-sky-700 leading-relaxed md:text-xl" href="https://github.com/Mr-Emerald-Wolf">
                                Mr-Emerald-Wolf
                            </a>

                        </div>
                    </div>
                    
                </div>
            </section>
      </>
    )
  }
}

export default Contact