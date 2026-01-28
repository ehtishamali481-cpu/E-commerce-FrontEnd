import React from 'react'
import { useOutletContext } from 'react-router-dom'

const ProductDetailsProper = () => {
    const { product } = useOutletContext()
    return (
        <p>{product.para}</p>
    )
}

export default ProductDetailsProper
