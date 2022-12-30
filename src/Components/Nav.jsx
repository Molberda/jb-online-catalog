import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Nav = () => {
    return (
        <nav className='nav column'>
            <figure className="nav__logo--wrapper">
                <img src="" alt="" className="nav__logo" />
            </figure>
            <ul>
            <FontAwesomeIcon icon="fa-solid fa-jar-wheat" />
            </ul>
        </nav>
    );
}

export default Nav;
