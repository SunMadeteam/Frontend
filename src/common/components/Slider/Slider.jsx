
import React, { useEffect } from 'react'
import './index.scss' //will be added later
import home from './home.png';

import { useState } from 'react';

const Slider = ({ }) => {
    const slideIndex = Number(localStorage.getItem('catalogIndex'))
 
    const [catalogeMore, setCatalog] = useState('');
    const [currentIndex, setCurrentIndex] = useState(slideIndex)
    const [touchPosition, setTouchPosition] = useState(null)
    const [sliderLength, setSliderLength] = useState(0)

    const URL_CATALOG = 'https://sunmadebackend.herokuapp.com/api/categories/'
    
    useEffect(() => {
        getDetail();
    }, []);
    const getDetail = async () => {
        const req = await fetch(URL_CATALOG);
        const res = await req.json();
        console.log(res);
        setCatalog(res.results);
        setSliderLength(res.results.length)
    };

    const handleTouchStart = (e) => {
        setTouchPosition(e.touches[0].clientX)
    }

    const next = () => {
        if (currentIndex !== sliderLength - 1) {
            setCurrentIndex(currentIndex + 1)
        } else if (currentIndex > sliderLength - 2) {
            setCurrentIndex(0)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)

        } else if (currentIndex === 0) {
            setCurrentIndex(sliderLength - 1)
        }
    }
    const handleTouchMove = (e) => {

        if (touchPosition === null) {
            return
        }
        const currentTouch = e.touches[0].clientX
        const diff = touchPosition - currentTouch

        if (diff > 5) {
            next()
        } else if (diff < -5) {
            prev()
        }
        setTouchPosition(null)
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 96}%)` }}
                    >
                        {
                            catalogeMore ?
                                catalogeMore.map((slide, index) => {
                                    return (
                                        <div className='slider__item'
                                            key={index}
                                            style={{
                                                background: `url(${slide.image})`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'center'
                                            }}
                                        >
                                            <div>{slide.name}</div>

                                        </div>
                                    )
                                })
                                : ''
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Slider