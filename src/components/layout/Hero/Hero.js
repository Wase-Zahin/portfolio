import React from 'react';
import './Hero.css';
import { useEffect } from 'react';
import Aos from "aos";

export default function Hero() {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    return (
        <div>
            <div data-aos="fade-right" className="hero section_padding">
                <div className="hero_content">
                    <h1>Wase</h1>
                    <h1>Zahin</h1>
                    <h1>Web</h1>
                    <h1>Developer</h1>
                </div>
                <div className="hero_img">
                    <p>X</p>
                    <img src={require("../../Icons&Images/transparent_me.png")} alt="Me"></img>
                </div>
            </div>
        </div>
    )
}
