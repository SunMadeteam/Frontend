
import React, { useEffect } from 'react'
import './index.scss' //will be added later
import home from './home.png';

import { useState } from 'react';

const Slider = ({catalogIndex}) => {
    const catalogeMore = [
        {
            img: home,
            name: 'сад'
        },
        {
            img: home,
            name: 'сад'
        },
        {
            img: home,
            name: 'сад'
        },
        {
            img: home,
            name: 'сад'
        }
    ]
    
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(catalogeMore.length)
    const [touchPosition, setTouchPosition] = useState(null)

const handleTouchStart = (e) => {
    setTouchPosition(e.touches[0].clientX)
}

    useEffect(() => {
        setLength(catalogeMore.length)
    }, [catalogIndex])

    const next = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex > length-2){
            setCurrentIndex(0)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }else{
            setCurrentIndex(length-1)
        }
    }
    const handleTouchMove = (e) => {
      
        if(touchPosition === null) {
            return
        }
        const currentTouch = e.touches[0].clientX
        const diff = touchPosition - currentTouch
    
        if (diff > 5) {
            next()
        }else if(diff < -5){
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
                                         background:`url(${home})`,
                                         backgroundRepeat:'no-repeat',
                                         backgroundPosition:'center'
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