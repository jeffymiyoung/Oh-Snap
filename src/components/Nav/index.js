// React Import
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";


// Nav Functionality
function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> {" "} 📸</span> {" "} Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category)
                            }}
                            >
                                {capitalizeFirstLetter(category)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

// Export for External
export default Nav;