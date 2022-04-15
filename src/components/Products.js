import React from 'react'
import { products } from '../data'
import ProductItem from './ProductItem'

function Products() {
    return (

        <div className="h-screen bg-stone-50 dark:bg-slate-900">
            <div className="container mx-auto p-4">
                <h1 className="text-5xl text-center dark:text-slate-200">Essential Products</h1>
            </div>
            <div className="container my-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto pb-4">

                {products.map((element) => {
                    return (<ProductItem key={element.title} title={element.title} price={element.price} imageURL={element.image}/>)
                })}

            </div>
        </div>
    )
}

export default Products