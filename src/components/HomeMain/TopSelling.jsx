import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Button } from './Products';
import { Discount } from './Products';
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrivalHeading } from './Products';








const TopSelling = () => {
    const [selling, setSelling] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/data.json");
                setSelling(res.data[1].topselling);

            } catch (error) {
                console.log(error);

            }


        }
        fetchData();
    }, [])
    return (
        <div id='onsale'>
            <ArrivalHeading>TOP SELLING</ArrivalHeading>
            <NewProduct>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    mousewheel={true}
                    keyboard={true}
                    className="mySwiper"
                    onBeforeInit={(swiper) => {

                    }}
                    breakpoints={{
                        1200: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        }
                    }}

                >
                    {
                        selling.map((sellings) => (
                            <SwiperSlide key={sellings.id}>
                                <img src={sellings.image} alt="" />
                                <div className='pictureDetails'>{sellings.title}</div>

                                <div style={{ display: "flex", alignItems: "center", gap: "6px" }} className='stars'>
                                    {[1, 2, 3, 4, 5].map((star, index) => {
                                        if (sellings.rating >= star) {
                                            return <FaStar key={index} color="gold" />;
                                        } else if (sellings.rating >= star - 0.5) {
                                            return <FaStarHalfAlt key={index} color="gold" />;
                                        } else {
                                            return <FaRegStar key={index} color="gray" />;
                                        }
                                    })}

                                    <span className='stars'>
                                        {sellings.rating} / 5
                                    </span>
                                </div>

                                <p>${sellings.price} <s className='disabled'>{sellings.oldPrice}</s>
                                    <Discount discount={sellings.discount}>
                                        {sellings.discount}
                                    </Discount></p>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </NewProduct>
            <div style={{ textAlign: "center" }}>
                <Button>View All</Button>
            </div>
        </div>
    )

}

export default TopSelling




const NewProduct = styled.div`
display: flex;
justify-content: space-between;
gap: 5px;
 font-family: Satoshi Regular;

 .stars{
    display:flex ;
    align-items: center;
    gap: 6px;
 }
 .pictureDetails{
    font-size: 20px;
    font-weight: 700;
    white-space: nowrap;
 }

 @media only screen and (max-width : 1024px){
    justify-content: center;
 }

img{
    border-radius: 20px;
    max-width: 280px;
    margin-bottom: 20px;
}
p{
    margin-bottom: 30px;
    font-weight: bolder;
    display: flex;
    align-items: center;
    gap: 7px;
}
.disabled{
     color: #00000066;
    font-size: 18px;
}
@media only screen and (max-width: 600px){
img{
    max-width: 240px;
}
.disabled{
    font-size: 16px;
}
 .stars{
    gap: 2px;
 }
 .pictureDetails{
    font-size: 16px;
 }
 }
 @media only screen and (max-width : 500px){
   img{
    max-width: 180px;
} 
.pictureDetails{
    font-size: 14px;
    white-space: nowrap;
 }
 }
  @media only screen and (max-width : 375px){
   img{
    max-width: 150px;
} 
.pictureDetails{
    font-size: 14px;
    white-space: wrap;
 }
 }
`
