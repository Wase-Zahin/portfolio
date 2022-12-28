import { useEffect } from "react";

const Theme = () => {
    const toggleTheme = () => {
        const root = document.documentElement;
        if (root.className === 'light') root.className = 'dark';
        else root.className = 'light';
    }

    useEffect(() => {
        // use light theme on mount
        document.documentElement.className = 'light';
    }, []);

    return (
        <div className="toggle-theme-wrapper">
            <span>☀️</span>
            <label className="toggle-theme" htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    onChange={toggleTheme}
                />
                <div className="slider round"></div>
            </label>
            <span>🌒</span>
        </div>
    )
}


export default Theme;