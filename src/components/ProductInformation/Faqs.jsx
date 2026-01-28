import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Faqs = () => {
    const { product } = useOutletContext()
    return <h3>FAQs about {product.title}</h3>
}

export default Faqs
