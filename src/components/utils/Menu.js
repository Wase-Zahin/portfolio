import { useState } from "react";

const Menu = ({ setDisplay, displayMenu }) => {
    const menu = {
        display: "block",
        justifyContent: "flex-start",
    }


    return (
        <div>
            {displayMenu ?
                <div>
                    <h2 onClick={setDisplay}>X</h2>
                    <div style={menu}>
                        <button type="blog">Blog</button>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales maximus orci, vel laoreet dui lacinia mollis. Donec fermentum non ex et porttitor. Aliquam vel massa facilisis, elementum tellus quis, laoreet nulla. Curabitur interdum purus felis, in auctor eros convallis sed. Nunc luctus ullamcorper leo vitae facilisis. Aenean placerat arcu nec varius ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus porta massa luctus placerat. Duis efficitur neque in ante feugiat bibendum. In eget suscipit lorem. Sed lacus eros, posuere et pretium a, tincidunt in ex. Aenean erat orci, viverra et odio id, pretium rhoncus velit. Donec dapibus suscipit lectus in commodo.

                        </p>
                    </div>
                </div>
                :
                <img
                    onClick={setDisplay}
                    src={require("../Icons&Images/menu.png")}
                    alt="menu">
                </img>
            }
        </div>

    );
};

export default Menu;