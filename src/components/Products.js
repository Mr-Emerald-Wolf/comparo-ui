import React from 'react'
import ProductItem from './ProductItem'

function Products() {
    let data = [{ "link": "ABC", "productData": "50" }, { "link": "DEF", "productData": "100" }]
    return (
        <div className="h-screen">
            <div className="container my-2 flex flex-row mx-auto justify-center gap-3">
            
                    {data.map((element) => {
                        return (<ProductItem key={element.link} title={element.link} productData={element.productData} />)
                    })}
            
            </div>
        </div>
    )
}

export default Products