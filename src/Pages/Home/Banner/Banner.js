import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel className='carousel-design' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='banner-detail'>"Stay alert not anxious," In a recent video addressing #coronavirus misinformation. When trusted public figures like Dr. Yuuji communicate the most accurate and up-to-date information, it helps build confidence and dissipate panic."</h3>
                    <p className='banner-detail'>- Johns Hopkins</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='banner-detail'>"This conversation with Dr. Fauci addresses important questions - thanks, Yuuji for helping the @YouTube community understand more about #COVID19"</h3>
                    <p className='banner-detail'>- Susan Wojcicki, CEO YouTube</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='banner-detail'>Thank you, Patients for spreading our #TakeCareBeforeYouShare message and for helping people navigate the #COVID19 infodemic with your medical perspective on how misinformation is putting lives at risk.</h3>
                    <p className='banner-detail'>- Melissa Fleming, Global Communications, United Nations</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;