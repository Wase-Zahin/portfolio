const Menu = ({items, menuOpen}) => {
    return (
        <div>
            <ul className={`menu ${menuOpen ? `open` : `closed`}`}>
                {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>

    );
};

export default Menu;