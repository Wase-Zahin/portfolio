import "./About.css";
import { css_icon, c_icon, django_icon, express_icon, git_icon, js_icon, mongodb_icon, nodejs_icon, npm_icon, python_icon, react_icon, vuejs_icon, my_cv } from "../../../assets";

const About = () => {
    return (
        <div className="about section_padding section_container">
            <div className="header_contaner section_margin">
                <div className="underline"></div>
                <h1 className="section_name">About</h1>
                <div className="underline"></div>
            </div>
            <div className="about_content">
                <p className="self_summary">I am a highly ambitious individual with a passion for technology and software development. My skills in computer programming and problem-solving have allowed me to excel in the field and create innovative solutions for various projects. I am always seeking new challenges and opportunities to expand my knowledge and skills. My portfolio showcases my abilities and demonstrates my dedication to the field. I am excited to continue growing in the tech industry and making a positive impact. </p>
                <div className="logo">
                    <div className="logo_col1">
                        <img src={nodejs_icon} alt="Nodejs Logo"></img>
                        <img src={react_icon} alt='React Logo'></img>
                        <img src={vuejs_icon} alt='Vuejs Logo'></img>
                        <img src={python_icon} alt='Python Logo'></img>
                    </div>
                    <div className="logo_col1">
                        <img src={npm_icon} alt='Npm Logo'></img>
                        <img src={js_icon} alt='Javascript Logo'></img>
                        <img src={mongodb_icon} alt='Mongo DB Logo'></img>
                        <img src={django_icon} alt="Django Logo"></img>
                    </div>
                    <div className="logo_col1">
                        <img src={git_icon} alt="Git Logo"></img>
                        <img src={express_icon} alt="Expressjs Logo"></img>
                        <img src={css_icon} alt="CSS Logo"></img>
                        <img src={c_icon} alt="C Logo"></img>
                    </div>
                </div>
            </div>
            <a className="cv_link" href={my_cv}>Download My CV</a>
        </div>
    )
}

export default About;