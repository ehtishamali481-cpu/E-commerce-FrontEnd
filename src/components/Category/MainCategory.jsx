import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Discount } from '../HomeMain/Products';
import Nav from '../NavBar/Nav';
import { ImageHeading, Main } from './MainCategoryStyle';
import { BsSliders2Vertical } from "react-icons/bs";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import RangeSlider from './SliderPrice';
import styled from "styled-components";
import Size from './Size';
import DressStyle from './DressStyle';
import Footer from '../Footer/Footer';
import { Link, useSearchParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { BsChevronRight } from "react-icons/bs";






const MainCategory = () => {
    const [details, setDetails] = useState([]);
    const [arrival, setArrival] = useState([]);
    const [product, setProduct] = useState([]);

    const [selectedColor, setSelectedColor] = useState(null);
    const [showColor, setShowColor] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(9);
    const [sideOpen, setSideOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);



    const [priceRange, setPriceRange] = useState([50, 300]);
    const [searchParams] = useSearchParams();
    const postId = searchParams.get("postId");

    const selectColors = [
        { id: 1, color: "#00C12B" }, { id: 2, color: "#F50606" },
        { id: 3, color: "#F5DD06" }, { id: 4, color: "#F57906" },
        { id: 5, color: "#06CAF5" }, { id: 6, color: "#063AF5" },
        { id: 7, color: "#7D06F5" }, { id: 8, color: "#F506A4" },
        { id: 9, color: "#FFFFFF" }, { id: 10, color: "#000000" },
    ];

    const Filter = [
        { id: 1, name: "T-Shirt" }, { id: 2, name: "Shorts" },
        { id: 3, name: "Shirt" }, { id: 4, name: "Hoodie" },
        { id: 5, name: "Jeans" }
    ];

    useEffect(() => {
        axios.get("/data.json")
            .then(res => {
                setDetails(res.data?.[1]?.topselling || []);
                setProduct(res.data?.[4]?.favrite || []);
                setArrival(res.data?.[0]?.newarrival || []);
            })
            .catch(err => console.log(err));
    }, []);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1240) {
                setProductsPerPage(6);
            } else {
                setProductsPerPage(9);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const allProducts = [...arrival, ...details, ...product];

    const productName = allProducts.find(p => String(p.postId) === postId)?.name ||
        allProducts.find(p => String(p.postId) === postId)?.title;

    const filteredProducts = allProducts.filter(item => {
        return postId ? String(item.postId) === postId : true;
    });

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 950;
            setIsMobile(mobile);
            if (!mobile) setSideOpen(false);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Nav />


            <Main className="container">
                <div style={{ margin: "20px 0", fontSize: "14px", }} >
                    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                        Home <BsChevronRight />{postId ? productName : "All Products"}
                    </Link>

                </div>
                <div className="main">
                    <div className="sideBar-wrap">
                        <div className="sideBar">
                            <div className="row-1">
                                <span style={{ fontSize: "20px", fontWeight: "700", color: "black" }}>Filters</span>
                                <BsSliders2Vertical />
                            </div>

                            {Filter.map(shirt => (
                                <div key={shirt.id} className="row-2">
                                    <p>{shirt.name}</p>
                                    <FaChevronRight />
                                </div>
                            ))}

                            <RangeSlider priceRange={priceRange} setPriceRange={setPriceRange} />

                            <Circle>
                                <div className="row">
                                    <p style={{ color: "black" }}>Colors</p>
                                    <div className="icons">
                                        <FaChevronDown onClick={() => setShowColor(!showColor)}
                                            style={{
                                                transform: showColor ? "rotate(180deg)" : "rotate(0deg)",
                                                transition: "transform 0.3s"
                                            }} />
                                    </div>
                                </div>
                                {showColor && (
                                    <div className="circle">
                                        {selectColors.map((item) => (
                                            <ColorCircle selected={selectedColor === item.color}
                                                onClick={() => setSelectedColor(item.color)}
                                                key={item.id}
                                                color={item.color}>
                                            </ColorCircle>
                                        ))}
                                    </div>
                                )}
                            </Circle>

                            <Size />
                            <DressStyle />
                        </div>
                    </div>

                    <div className={`mob-sideBar ${sideOpen ? "open" : ""}`}>
                        <div className='sideBar'>
                            <div className="row-1">
                                <span style={{ fontSize: "20px", fontWeight: "700", color: "black" }}>Filters</span>
                                {
                                    isMobile && (
                                        <div className="mob" onClick={() => setSideOpen(!sideOpen)}>
                                            {sideOpen ? <RxCross1 size={20} /> : <BsSliders2Vertical />}
                                        </div>
                                    )
                                }
                            </div>

                            {Filter.map(shirt => (
                                <div key={shirt.id} className="row-2">
                                    <p>{shirt.name}</p>
                                    <FaChevronRight />
                                </div>
                            ))}

                            <RangeSlider priceRange={priceRange} setPriceRange={setPriceRange} />

                            <Circle>
                                <div className="row">
                                    <p style={{ color: "black" }}>Colors</p>
                                    <div className="icons">
                                        <FaChevronDown onClick={() => setShowColor(!showColor)}
                                            style={{
                                                transform: showColor ? "rotate(180deg)" : "rotate(0deg)",
                                                transition: "transform 0.3s"
                                            }} />
                                    </div>
                                </div>
                                {showColor && (
                                    <div className="circle">
                                        {selectColors.map((item) => (
                                            <ColorCircle selected={selectedColor === item.color}
                                                onClick={() => setSelectedColor(item.color)}
                                                key={item.id}
                                                color={item.color}>
                                            </ColorCircle>
                                        ))}
                                    </div>
                                )}
                            </Circle>

                            <Size />
                            <DressStyle />
                        </div>
                    </div>
                    <div>
                        <div className="col-2">
                            <div className="col-2-row-1">
                                <div className="productName" >
                                    <ImageHeading>{productName}</ImageHeading>
                                    <div>Showing 1-10 of 100 Products
                                        <span className='desktop'>Sort by: <span style={{ color: "black", fontWeight: "700" }}>Most Popular</span> <FaChevronDown />
                                        </span>

                                    </div>


                                </div>
                                {
                                    isMobile && (
                                        <div className="mob" onClick={() => setSideOpen(!sideOpen)}>
                                            {sideOpen ? <RxCross1 /> : <BsSliders2Vertical style={{
                                                width: "32px",
                                                height: "32px",
                                                borderRadius: "50%",
                                                backgroundColor: "#F0F0F0",
                                                color: "#000",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "5px"

                                            }} />}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="image-wrapper">
                                {currentProducts.length === 0 ? (
                                    <p>No products found.</p>
                                ) : (
                                    currentProducts.map(item => (
                                        <div key={item.id} className="product-card">
                                            <img src={item.image} alt={item.name || item.title} />
                                            <span>{item.title}</span>

                                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                                {[1, 2, 3, 4, 5].map((star, index) => {
                                                    if (item.rating >= star) {
                                                        return <FaStar key={index} color="gold" />;
                                                    } else if (item.rating >= star - 0.5) {
                                                        return <FaStarHalfAlt key={index} color="gold" />;
                                                    } else {
                                                        return <FaRegStar key={index} color="gray" />;
                                                    }
                                                })}

                                                <span style={{ fontSize: "14px", color: "#555", marginLeft: "4px" }}>
                                                    {item.rating} / 5
                                                </span>
                                            </div>
                                            <p>
                                                ${item.price}
                                                <s>{item.oldPrice}</s>
                                                <Discount discount={item.discount}>
                                                    {item.discount}
                                                </Discount>

                                            </p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        {totalPages > 1 && (
                            <Pagination >
                                <button onClick={handlePrev} disabled={currentPage === 1}><FaArrowLeft /> Previous</button>
                                <div className="buttons">
                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setCurrentPage(index + 1)}
                                            className={currentPage === index + 1 ? "active" : ""}
                                        >
                                            {index + 1}
                                        </div>
                                    ))}
                                </div>

                                <button onClick={handleNext} disabled={currentPage === totalPages}>Next <FaArrowRight /></button>
                            </Pagination>
                        )}
                    </div>
                </div>
            </Main>

            <Footer />
        </>
    );
};

export default MainCategory;

const Circle = styled.div`
  border-bottom: 1px solid #0000001A;
  padding-bottom: 20px;
  margin-bottom: 20px;
  .row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
    color: black;
    cursor: pointer;
  }
  .circle{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }
`;
const ColorCircle = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: ${(props) => props.color || "black"}; 
  border: 1px solid #00000033;
  cursor: pointer;
  position: relative;

  &::after {
    content: "✓";
    color: ${(props) => (props.color === "#FFFFFF" ? "#000" : "#fff")};
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${(props) => (props.selected ? "block" : "none")};
  }
`;


const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        width: 110px;
        padding: 8px 14px;
        border: 1px solid #0000001A;
        border-radius: 8px;
        cursor: pointer;
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    .buttons{
        display: flex;
        align-items: center;
        gap: 2px;
        div{
        width: 40px;
        height: 40px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
            color: #00000080;
        }
        div.active{
            background-color: #0000000F;
            color: black;
        }
    }
`



