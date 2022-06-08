import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './includes/NavVar.css';
import Menu from './Menu'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavVar = () => {

    const showMenu = () => {

        const menu = document.querySelector("#navVarMenu");
        
        menu.classList.toggle("show");
    }

    return (
        <header className='navVar'>
            <h1>Bienvenido</h1>
            <button className='hamburger' onClick={showMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <Menu />
        </header>
    )
}

export default NavVar;