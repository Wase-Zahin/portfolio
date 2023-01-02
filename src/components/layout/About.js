import { TypeAnimation } from "react-type-animation";

const About = () => {
    const hero = {
        display: "flex",
        fontSize: "6rem",
        fontWeight: "200",
        justifyContent: "center",
    }
    return (
        <div>
            <div className="about-section-hero">
                <h1 className="hero">
                    Wase<br></br>
                    Zahin<br></br>
                    Web Developer           
                </h1>
                <hr></hr>
                <h1>About</h1>
            </div>

            <div className="about-section-main">
                <p>This is my about section. And I fill it with temporary text for now. Lorem Ipsum</p>
            </div>
        </div>
    )
}

export default About;