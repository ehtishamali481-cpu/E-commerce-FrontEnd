import React from 'react'
import Nav from '../NavBar/Nav'
import { ProjectImg } from '../../Images'
import { MainSection } from './HomeStyle'
import Slider from './Slider'
import Products from './Products'
import Dressing from './Dressing'
import Testimonial from './Testimonial'
import Footer from '../Footer/Footer'


const HomeMain = () => {
    return (
        <div>
            <Nav />
            <MainSection>
                <div className="col-wrapper">
                    <div className="section-col-1">
                        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <button>Shop Now</button>
                        <div className="details">
                            <div>
                                <span>200+</span>
                                <p>International Brands</p>
                            </div>
                            <div className="detail-col1">
                                <span>2,000+</span>
                                <p>High-Quality Products</p>
                            </div>
                            <div className="detail-col1 detail-col3">
                                <span>30,000+</span>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-col-2">
                    <img className='main-section-img' src={ProjectImg.SectionImg} alt="Picture is not upload" />
                    <img className='logo-1' src={ProjectImg.ImageLogo} alt="Picture is not upload" />
                    <img className='logo-2' src={ProjectImg.ImageLogo2} alt="Picture is not upload" />
                </div>
            </MainSection>
            <Slider />
            <div className='container'>
                <Products />
                <Dressing />
                <Testimonial />
            </div>

            <Footer />
        </div>
    )
}

export default HomeMain
