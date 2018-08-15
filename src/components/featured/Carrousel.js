import React from 'react';
import Slider from 'react-slick'
import slide1 from '../../resources/images/slide_one.jpg'
import slide2 from '../../resources/images/slide_two.jpg'
import slide3 from '../../resources/images/slide_three.jpg'

const Carrousel = () => {

    let settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }

    return (
        <div className="carrousel_wrapper"
             style={{
                 background:'red',
                 overflow:'hidden',
                 height:`${window.innerHeight}px`,
            }}
        >
        <Slider {...settings}>
            <div>
                <div className="carrousel_image"
                    style={{
                        background:`url(${slide1})`,
                        height:`${window.innerHeight}px`,
                    }}>
                </div>
            </div>
            <div>
                <div className="carrousel_image"
                    style={{
                        background:`url(${slide2})`,
                        height:`${window.innerHeight}px`,
                    }}>
                    </div>
            </div>
            <div>
                <div className="carrousel_image"
                    style={{
                        background:`url(${slide3})`,
                        height:`${window.innerHeight}px`,
                    }}>
                </div>
            </div>
        
        </Slider>
        </div>
    );
};

export default Carrousel;