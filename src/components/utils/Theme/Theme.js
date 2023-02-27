import { useEffect } from "react";
import './Theme.css';
import { moon_icon } from "../../../assets";


const Theme = () => {
    const toggleTheme = () => {
        const root = document.documentElement;
        const moonIcon = document.querySelector('.moonIcon');
        if (root.className === 'light') {
            root.className = 'dark';
            moonIcon.classList.remove('noneDisplay');
        }
        else {
            moonIcon.classList.add('noneDisplay');
            root.className = 'light'
        };
    }

    useEffect(() => {
        // use light theme on mount
        document.documentElement.className = 'light';
    }, []);

    return (
        <div className="toggle-theme-wrapper">
            <div className="theme-toggle-button-div">
                <label className="toggle-theme" htmlFor="checkbox">
                    <input
                        type="checkbox"
                        id="checkbox"
                        onChange={toggleTheme}
                    />
                    <div className="slider round"></div>
                    <img src={moon_icon} className="moonIcon noneDisplay" alt="moon icon"></img>
                </label>

            </div>
        </div>
    )
}


export default Theme;