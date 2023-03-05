const Menu = ({ items, menuOpen }) => {
    return (
        <ul className={`menu ${menuOpen ? `open` : `closed`}`}>
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    );
};

export default Menu;