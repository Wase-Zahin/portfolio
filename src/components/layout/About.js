import { TypeAnimation } from "react-type-animation";

const About = () => {
    return (
        <div>
            <div className="about-section-hero">
                <TypeAnimation
                sequence={[
                    'Wase Zahin', 1000,
                    'Wase Zahin Web Developer'
                ]}
                wrapper="div"
                cursor={true}
                style={{ fontSize: '1rem' }}
                />
                This is Hero section
            </div>
            <div className="about-section-main">

            </div>
        </div>
    )
}


export default About;