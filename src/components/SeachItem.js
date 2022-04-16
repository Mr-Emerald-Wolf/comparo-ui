import React, { Component } from 'react'

export default class SeachItem extends Component {
    render() {
        let element = this.props.data;
        return (
            <>
                <div className="bg-gray-50 dark:bg-gray-900 py-6 mt-6 rounded shadow-md ">




                    <h1 className="text-4xl md:text-5xl lg:text-6xl p-3 font-kalam font-bold dark:text-white text-black">
                        {element.title}
                    </h1>
                    <div className="px-6 mt-4">
                        <h2 className="title-font font-semibold text-sky-900 dark:text-white tracking-widest md:text-2xl">
                            Price
                        </h2>
                        <p className="dark:text-sky-200 text-sky-700 leading-relaxed md:text-xl">
                            Rs.{element.price}
                        </p>

                    </div>




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
                            URL
                        </h2>
                        <a className="dark:text-sky-200 text-sky-700 leading-relaxed md:text-xl" href={this.props.url}>
                            {this.props.url}
                        </a>

                    </div>

                </div>
            </>
        )
    }
}
