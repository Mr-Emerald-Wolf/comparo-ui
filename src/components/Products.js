import React from 'react'
import { products } from '../data'
import ProductItem from './ProductItem'

function Products() {
    return (

        <section className="bg-stone-50 dark:bg-slate-900">
            <div className="p-4 pt-6">
                <h1 className="text-6xl text-center dark:text-slate-200">Essential Products</h1>
            </div>
            <div className="p-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto">

                {products.map((element) => {
                    return (<ProductItem key={element.title} title={element.title} price={element.price} imageURL={element.image}/>)
                })}

            </div>
        </section>
    )
}

export default Products