import React, { useContext, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { TestimonialContext } from '../contextApi/Context'
import { ReviewStyle } from './ProductInformationStyle'
import { BsSliders2Vertical } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
import { GoKebabHorizontal } from "react-icons/go";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import axios from 'axios';
import { Discount } from '../HomeMain/Products';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Icon } from '../../Images';






const RatingReview = () => {
    const { CustomerDetail } = useContext(TestimonialContext)
    const { product } = useOutletContext();
    const [favrite, setFavrite] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/data.json")
                setFavrite(res.data[4].favrite);
            } catch (error) {
                console.log(error);

            }

        }
        fetchData()
    }, []);

    return (
        <ReviewStyle>
            <div className="icons">
                <div className="icons-col-1">
                    <p>All Reviews
                        <span style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            marginLeft: "7px"
                        }}>({CustomerDetail.length})</span> </p>
                </div>
                <div className="icons-col-2">
                    <div className="icons-button">
                        <BsSliders2Vertical />
                    </div>
                    <div className="icons-button latest">
                        <span>Latest</span> <img src={Icon.ArrowDown} alt="" />
                    </div>
                    <button>Write a Review</button>
                </div>
            </div>
            <div className="wrapper">
                {CustomerDetail.map((item) => (
                    <div key={item.id} className='card'>
                        <div className="item-row-1">
                            <div className="item-row-1-col-1">
                                {
                                    [...Array(5)].map((_, index) =>
                                        index < item.rating ? (
                                            <FaStar key={index} color="gold" />
                                        ) : (
                                            <FaRegStar key={index} color="gray" />
                                        ))
                                }
                            </div>
                            <div className="item-row-1-col-2">
                                <GoKebabHorizontal />
                            </div>
                        </div>
                        <div className="heading">
                            <h4 style={{ color: "black" }}>{item.name}</h4>
                            <img src={item.img} alt={item.name} />
                        </div>

                        <p style={{
                            marginBottom: "20px"
                        }}>{item.p}</p>
                        <p>{item.postedDate}</p>
                    </div>
                ))}
            </div>
            <div className="buttons">
                <button>Load More Reviews</button>
            </div>


            <div className="favrite">
                <h1>You might also like</h1>
                <div className="image-wrapper">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        loop={true}
                        navigation={true}
                        pagination={{ clickable: true }}
                        mousewheel={true}
                        keyboard={true}
                        className="mySwiper"
                        onBeforeInit={(swiper) => {

                        }}
                        breakpoints={{
                            1250: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            }
                        }}

                    >
                        {
                            favrite.map((details) => (
                                <SwiperSlide key={details.id}>
                                    <img src={details.image} alt={details.title} />
                                    <div className="detailed">
                                        <p>{details.title}</p>

                                        <div className='stars'>
                                            {[1, 2, 3, 4, 5].map((star, index) => {
                                                if (details.rating >= star) {
                                                    return <FaStar key={index} color="gold" />;
                                                } else if (details.rating >= star - 0.5) {
                                                    return <FaStarHalfAlt key={index} color="gold" />;
                                                } else {
                                                    return <FaRegStar key={index} color="gray" />;
                                                }
                                            })}

                                            <span style={{ fontSize: "14px", color: "#555", marginLeft: "4px" }}>
                                                {details.rating} / 5
                                            </span>

                                        </div>
                                        <div className="price">
                                            <p>${details.price} <s>{details.oldPrice}</s>
                                                <Discount discount={details.discount}>
                                                    {details.discount}
                                                </Discount></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>

            </div>
        </ReviewStyle>
    )
}

export default RatingReview
