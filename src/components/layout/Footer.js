import { github_icon } from "../../assets";

const Footer = () => {
    return (
        <footer className='footer'>
            Copyright © 2022 Zahin
            <a href='https://github.com/Wase-Zahin'>
                <img 
                src={github_icon} 
                alt='github'>
                </img>
            </a>
        </footer>
    )
};

export default Footer;