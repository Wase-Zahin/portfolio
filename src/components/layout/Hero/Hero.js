import React from 'react';
import './Hero.css';
import img_border_top_right from "../../Icons&Images/img_border_top_right.svg";
import img_border_left_bottom from "../../Icons&Images/img_border_left_bottom.svg";

export default function Hero() {
    return (
        <div className='hero'>
            <div className="hero_mid section_padding section_container">
                <div className="hero_content">
                    <h1 className='hero_content_name'>Wase<span>Zahin</span></h1>
                    <h2>Web Developer</h2>
                </div>
                <div className='hero_img_wrapper'>
                    <img className='img_border_top_right' src={img_border_top_right} alt="border-top-right"></img>
                    <div className="hero_img">
                        <img className='profile_img' src={require("../../Icons&Images/transparent_me.png")} alt="Me"></img>
                    </div>
                    <img className='img_border_left_bottom' src={img_border_left_bottom} alt="img_border_left_bottom"></img>
                </div>
            </div>
        </div>
    )
}
