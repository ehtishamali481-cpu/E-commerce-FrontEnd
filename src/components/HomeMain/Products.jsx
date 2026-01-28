import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import styled from "styled-components";
import TopSelling from './TopSelling';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';









const Products = () => {
    const [arrival, setArrival] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/data.json")
                setArrival(res.data[0].newarrival);

            } catch (error) {
                console.log(error);

            }


        }
        fetchData();
    }, [])
    return (
        <div id='newarrival'>
            <ArrivalHeading>NEW ARRIVALS</ArrivalHeading>
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
                        arrival.map((details, id) => (
                            <SwiperSlide key={id}>
                                <Link to={`/productDetails?id=${details.id}`}>
                                    <img src={details.image} alt="" />
                                    <div className='pictureDetail'>{details.title}</div>

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
                                    <p>${details.price}
                                        <s className='disabled'>{details.oldPrice}</s>
                                        <Discount discount={details.discount}>
                                            {details.discount}
                                        </Discount></p>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <div style={{ textAlign: "center" }}>
                    <Button>View All</Button>
                </div>
            </NewProduct>


            <TopSelling />

        </div>

    )
}

export default Products




export const ArrivalHeading = styled.div`
    text-align: center;
    font-size: 48px;
    margin-bottom: 30px;
    font-family: Integralcf;

    @media only screen and (max-width : 768px){
        font-size: 32px;
    }

`






const NewProduct = styled.div`
 font-family: Satoshi Regular;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px ;
 .pictureDetail{
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    margin-bottom: 10px;
 }
p{
    margin-bottom: 30px;
    font-weight: bolder;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
}
.stars{
    display: flex;
    align-items: center;
    gap: 6px;
}
@media only screen and (max-width: 1024px){
    justify-content:center ;
}
img{
    border-radius: 20px;
    max-width: 280px;
    margin-bottom: 20px;
}
.disabled{
    color: #00000066;
    margin-left: 20px;
    font-size: 18px;
}
 @media only screen and (max-width: 600px){
img{
    max-width: 240px;
}
p{
    font-size: 20px;
}
.pictureDetail{
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    white-space: nowrap;
}
.disabled{
    font-size: 16px;
}
 }
 @media only screen and (max-width : 500px){
   img{
    max-width: 180px;
} 

 }
  @media only screen and (max-width : 375px){
   img{
    max-width: 150px;
} 
.stars{
    gap: 2px;
}
 }
 @media only screen and (max-width : 320px){
    .pictureDetail{
    white-space: wrap;
}
p{
    font-size: 15px;
}
 }
`
export const Button = styled.button`
    padding: 16px 54px;
    border-radius: 62px;
    border: 1px solid #0000001A;
    background-color: transparent;
    cursor: pointer;
    margin-bottom: 50px;
    max-width: 218px;
    width: 100%;
    
    @media only screen and (max-width : 768px){
        max-width: 358px;
        width: 100%;
    }
`

export const Discount = styled.span`
  color: #FF3333;
  font-size: 12px;
  margin-left: 10px;
  width: 58px;
  height: 28px;
  border-radius: 62px;
  background-color: ${({ discount }) =>
        discount ? "#FF33331A" : "white"};
  display: flex;
  align-items: center;
  justify-content: center;
`;
