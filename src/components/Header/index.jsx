/* eslint-disable */

import React from 'react';
import './styled'
import StyleHeader from './styled';

function Header () {
    return(
        <StyleHeader>
            <button className='header--menu'>Menu</button>
            <img className='header--logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Suas_Plantas_Logo.svg/600px-Suas_Plantas_Logo.svg.png'/>
            <span className='header--user'>User</span>
        </StyleHeader>
    )
}

export default Header;

