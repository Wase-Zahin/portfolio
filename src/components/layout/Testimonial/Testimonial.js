import React, { useState } from 'react';
import './Testimonial.css';
import { placeholder_me } from '../../../assets';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

export default function Testimonial() {
    const testimonials = [
        {
            name: 'John Doe',
            title: 'CEO',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: placeholder_me
        },
        {
            name: 'Jane Doe',
            title: 'CTO',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: placeholder_me
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipeLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            document.querySelector('.testimonial_container').classList.add('testimonial_container--left');
            setTimeout(() => {
                document.querySelector('.testimonial_container').classList.remove('testimonial_container--left');
            }, 300);
        }
    };

    const handleSwipeRight = () => {
        if (currentIndex < testimonials.length - 1) {
            setCurrentIndex(currentIndex + 1);
            document.querySelector('.testimonial_container').classList.add('testimonial_container--right');
            setTimeout(() => {
                document.querySelector('.testimonial_container').classList.remove('testimonial_container--right');
            }, 300);
        }
    };


    return (
        <div id='testimonial' className='section_padding'>
            <div className="header_contaner section_margin">
                <div className="underline"></div>
                <h1 className="section_name">Testimonial</h1>
                <div className="underline"></div>
            </div>
            <div className='testimonial_container'>
                <img className='testimonial_img' src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name}></img>
                <div className='testimonial_text'>
                    <h1>{testimonials[currentIndex].name}</h1>
                    <h3 className='title'>{testimonials[currentIndex].title}</h3>
                    <p>{testimonials[currentIndex].text}</p>
                </div>
                {currentIndex !== 0 && (
                    <div className='previous' onClick={handleSwipeLeft}>
                        <BiLeftArrow className='arrow_left' />
                    </div>
                )}
                {currentIndex !== testimonials.length - 1 && (
                    <div className='next' onClick={handleSwipeRight}>
                        <BiRightArrow className='arrow_right' />
                    </div>
                )}
            </div>
        </div>
    );
}
