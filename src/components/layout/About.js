import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
    const hero = {
        display: "flex",
        fontSize: "6rem",
        fontWeight: "200",
        justifyContent: "center",
    }
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    return (
        <div>
            <div className="about-section-hero">
                <div data-aos="fade-right" className="hero">
                    <h1>Wase</h1>
                    <h1>Zahin</h1>
                    <h1>Web</h1>
                    <h1>Developer</h1>
                </div>
                <hr></hr>
            </div>

            <div className="about-section-main">
                <div>
                    <h1>About</h1>
                    <p>I am a highly ambitious individual with a passion for technology and software development. My skills in computer programming and problem-solving have allowed me to excel in the field and create innovative solutions for various projects. I am always seeking new challenges and opportunities to expand my knowledge and skills. My portfolio showcases my abilities and demonstrates my dedication to the field. I am excited to continue growing in the tech industry and making a positive impact.</p>
                </div>
            </div>
            <hr></hr>
            <div className="logo">
                <img src={require("../Icons&Images/skills_icons/React-01.png")} alt='React'></img>
                <img src={require("../Icons&Images/skills_icons/Vue-JS-01.png")} alt='React'></img>
                <img src={require("../Icons&Images/skills_icons/Python-04.png")} alt='React'></img>
                <img src={require("../Icons&Images/skills_icons/Npm-01.png")} alt='React'></img>
                <img src={require("../Icons&Images/skills_icons/JavaScript-01.png")} alt='React'></img>
                <img src={require("../Icons&Images/skills_icons/MongoDB-01.png")} alt='React'></img>
            </div>
            <hr></hr>
        </div>
    )
}

export default About;