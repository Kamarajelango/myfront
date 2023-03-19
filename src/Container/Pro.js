import React from 'react'
import Cards from './Cards'
import { ProductList } from './ProductList'

function Pro() {

    return <>
        <div className="container">
            {/* <div className="row  "> */}
            <div className='d-flex flex-wrap justify-content-center'>
                {
                    ProductList.map((product) => (<Cards {...product} key={product.id} />
                    ))
                }
            </div>
            {/* </div> */}
        </div>
    </>
}
export default Pro