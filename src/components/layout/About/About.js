import "aos/dist/aos.css";
import "./About.css";

const About = () => {
    return (
        <div className="section_padding">
            <div>
                <h1 className="section_name">About</h1>
                <div className="underline"></div>
                <p>I am a highly ambitious individual with a passion for technology and software development. My skills in computer programming and problem-solving have allowed me to excel in the field and create innovative solutions for various projects. I am always seeking new challenges and opportunities to expand my knowledge and skills. My portfolio showcases my abilities and demonstrates my dedication to the field. I am excited to continue growing in the tech industry and making a positive impact.</p>
            </div>
            <hr></hr>
            <div className="logo">
                <img src={require("../../Icons&Images/skills_icons/React-01.png")} alt='React'></img>
                <img src={require("../../Icons&Images/skills_icons/Vue-JS-01.png")} alt='React'></img>
                <img src={require("../../Icons&Images/skills_icons/Python-04.png")} alt='React'></img>
                <img src={require("../../Icons&Images/skills_icons/Npm-01.png")} alt='React'></img>
                <img src={require("../../Icons&Images/skills_icons/JavaScript-01.png")} alt='React'></img>
                <img src={require("../../Icons&Images/skills_icons/MongoDB-01.png")} alt='React'></img>
            </div>
            <hr></hr>
        </div>
    )
}

export default About;