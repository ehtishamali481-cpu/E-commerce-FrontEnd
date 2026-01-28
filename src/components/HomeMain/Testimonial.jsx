import React, { useRef, useContext } from 'react'
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { TestimonialContext } from '../contextApi/Context';


const Testimonial = () => {
    const { CustomerDetail } = useContext(TestimonialContext)
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <CardsStyle>
            <h1>OUR HAPPY CUSTOMERS</h1>
            <div className="nav-buttons">
                <div ref={prevRef} className="swiper-button-prev custom-prev"></div>
                <div ref={nextRef} className="swiper-button-next custom-next"></div>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Keyboard]}
                className="mySwiper"
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    }
                }}

            >
                {
                    CustomerDetail.map((details) => (
                        <SwiperSlide key={details.id}>
                            <span className='stars'>★★★★★</span>
                            <div className="name">
                                <h3>{details.name}</h3>
                                <img src={details.img} alt="" />
                            </div>

                            <p>{details.p}</p>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </CardsStyle  >
    )
}

export default Testimonial



const CardsStyle = styled.div`
position: relative;
 font-family: Satoshi Regular;
padding: 0px 5px;
h1{
    font-size: 48px;
    margin-bottom: 80px;
    font-family: Integralcf;
}
      .swiper-slide {
    border: 1px solid #0000001A;
    padding: 28px 32px;
    border-radius: 20px;
    max-width: 400px;
     height: auto; 
  }
  .stars{
    color: #FFC633;
   font-size: 23px;
   letter-spacing: 5px;
  }
  .name{
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
  }
  .swiper-pagination-bullet{
    display: none;
  }
  .swiper-button-next,.swiper-button-prev{
    color: black;
    width: 25px;
     position: absolute;
     top: 100px;
     font-weight: bolder;
     z-index: 1;
  }
    .custom-prev::before{
        content: "";
    width: 40px;
    border: 1px solid black;
    position: relative;
    right: -17px;
    }
  .swiper-button-prev{
     left: auto !important;
    right: 40px !important;
  }

.custom-next::before{
      content: "";
    width: 40px;
    border: 1px solid black;
    position: relative;
    left: 7px;
}

// media querry

@media only screen  and (max-width :1024px){
    p{
        font-size: 14px;
    }
    h1{
    font-size: 38px;
}
  .swiper-button-next,.swiper-button-prev{
     top: 110px;
  }
}

`
