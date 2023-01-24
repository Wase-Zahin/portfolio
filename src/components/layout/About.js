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
          duration : 2000
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
                <h1>About</h1>
            </div>

            <div className="about-section-main">
                <p>This is my about section. And I fill it with temporary text for now. Lorem Ipsum</p>
            </div>

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