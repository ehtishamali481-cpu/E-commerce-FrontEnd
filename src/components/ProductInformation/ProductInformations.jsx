import React, { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom"
import axios from "axios"
import { NavStyle, TShirt } from "./ProductInformationStyle"
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa"
import Nav from "../NavBar/Nav"
import Footer from "../Footer/Footer"
import { useCart } from "../contextApi/CartContext"
import { BsChevronRight } from "react-icons/bs";
import { toast } from 'react-toastify';








const ProductInformations = () => {
    const [searchParams] = useSearchParams()
    const postId = searchParams.get("id")
    const location = useLocation()

    const [product, setProduct] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const [count, setCount] = useState(0)
    const [activeSize, setActiveSize] = useState("")
    const { addToCart } = useCart()



    const handleAddToCart = () => {
        if (!activeSize) return toast.info("Select Size");
        if (count === 0) return toast.info("Select quantity");

        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: selectedImage,
            size: activeSize,
            quantity: count,
            color: product.color,
        })
        toast.success("Item added to cart! 🛒");
    }

    const sizes = ["Small", "Medium", "Large", "X-Large"]

    const Increment = () => setCount(prev => prev + 1)
    const Decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0))

    useEffect(() => {
        if (!postId) return

        const fetchProduct = async () => {
            try {
                const res = await axios.get("/data.json")
                const allProducts = res.data?.[3]?.productDetails || []

                const selectedProduct = allProducts.find(
                    item => String(item.id) === String(postId)
                )
                if (!selectedProduct) return

                setProduct(selectedProduct)
                setSelectedImage(selectedProduct.image2)
            } catch (error) {
                console.error(error)
            }
        }

        fetchProduct()
    }, [postId])

    if (!product) return <h2>Loading...</h2>

    const colors = [
        { id: 1, color: "#314F4A", image: product.image2 },
        { id: 2, color: "#4F4631", image: product.image3 },
        { id: 3, color: "#31344F", image: product.image4 },
    ]

    return (
        <>
            <Nav />
            <div className="container">
                <TShirt>
                    <div className="backpage" style={{ margin: "20px 0", fontSize: "14px", display: "flex", alignItems: " center" }}>
                        <Link to="/" className="homeBack">Home <BsChevronRight /></Link>
                        <Link to="/" className="homeBack">Shop <BsChevronRight /></Link>
                        <Link to="/" className="homeBack">Men <BsChevronRight /></Link>
                        <span>{product.name}</span>
                    </div>

                    <div className="tshirt">
                        <div className="col-1">
                            <div className="image-row">
                                <img src={product.image2} onClick={() => setSelectedImage(product.image2)} />
                                <img src={product.image3} onClick={() => setSelectedImage(product.image3)} />
                                <img src={product.image4} onClick={() => setSelectedImage(product.image4)} />
                            </div>
                            <img src={selectedImage} className="main-img" />
                        </div>

                        <div className="col-2">
                            <h1>{product.title}</h1>

                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                {[1, 2, 3, 4, 5].map((star, index) => {
                                    if (product.rating >= star) {
                                        return <FaStar key={index} color="gold" />;
                                    } else if (product.rating >= star - 0.5) {
                                        return <FaStarHalfAlt key={index} color="gold" />;
                                    } else {
                                        return <FaRegStar key={index} color="gray" />;
                                    }
                                })}

                                <span style={{ fontSize: "14px", color: "#555", marginLeft: "4px" }}>
                                    {product.rating} / 5
                                </span>
                            </div>

                            <div className="col-2-row-2">
                                <p style={{ color: "black" }}>{product.price}</p>
                                <s>{product.oldPrice}</s>
                                <p className="discount">{product.discount}</p>
                            </div>
                            <p className="para">{product.para}</p>
                            <p>Select Color</p>
                            <div className="color" style={{ display: "flex", gap: "15px" }}>
                                {colors.map(item => (
                                    <div
                                        key={item.id}
                                        onClick={() => setSelectedImage(item.image)}
                                        style={{
                                            width: "37px",
                                            height: "37px",
                                            borderRadius: "50%",
                                            backgroundColor: item.color,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            cursor: "pointer",
                                            border: selectedImage === item.image ? "2px solid black" : "2px solid transparent"
                                        }}
                                    >
                                        {selectedImage === item.image && <FaCheck color="white" />}
                                    </div>
                                ))}
                            </div>

                            <div className="col-2-3">
                                <p>Choose Size</p>
                                <div className="buttons">
                                    {sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setActiveSize(size)}
                                            style={{
                                                backgroundColor: activeSize === size ? "#000" : "#F0F0F0",
                                                color: activeSize === size ? "#fff" : "#00000099"
                                            }}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="col-2-row-4">
                                <div className="counter">
                                    <span onClick={Decrement}>-</span>
                                    {count}
                                    <span onClick={Increment}>+</span>
                                </div>
                                <button className="cart-Button" onClick={handleAddToCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </TShirt>

                <NavStyle>
                    <ul className="list">
                        <li>
                            <NavLink to={`/productDetails/details${location.search}`}
                                className={({ isActive }) => isActive ? "active" : ""}
                            >Product Details</NavLink>
                        </li>
                        <li>
                            <NavLink end to={`/productDetails${location.search}`}
                                className={({ isActive }) => isActive ? "active" : ""}
                            >Rating & Review</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/productDetails/faqs${location.search}`}
                                className={({ isActive }) => isActive ? "active" : ""}
                            >FAQs</NavLink>
                        </li>
                    </ul>

                    <Outlet context={{ product }} />
                </NavStyle>
            </div>
            <Footer />
        </>
    )
}

export default ProductInformations
