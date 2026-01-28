import React from 'react'
import { Slides } from '../../Images'
import { ImgSlider } from './HomeStyle'

const Slider = () => {
    return (
        <ImgSlider>
            <div className="slides">
                <img src={Slides.Versche} alt="PIcture not Upload" />
                <img src={Slides.Zara} alt="PIcture not Upload" />
                <img src={Slides.Gucci} alt="PIcture not Upload" />
                <img src={Slides.Prada} alt="PIcture not Upload" />
                <img src={Slides.Calvin} alt="PIcture not Upload" />

                <img src={Slides.Versche} alt="PIcture not Upload" />
                <img src={Slides.Zara} alt="PIcture not Upload" />
                <img src={Slides.Gucci} alt="PIcture not Upload" />
                <img src={Slides.Prada} alt="PIcture not Upload" />
                <img src={Slides.Calvin} alt="PIcture not Upload" />
            </div>
        </ImgSlider>
    )
}

export default Slider
