import React from 'react'
import { useDispatch } from 'react-redux'

const ProductdetailsButton = ({product})=> {


    return(
        <>
          {/* Add To Cart Button */}
          <div onClick={()=>dispatch(add(product.id))} className="mt-6">
          <Addtocartbutton />
        </div>
        </>
    )
}

export default ProductdetailsButton