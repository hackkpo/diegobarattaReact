import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './includes/NavVar.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const NavVar = () => {

    const menu = ['Portfolio', 'Acerca', 'Contacto'];

    const showMenu = () => {

        const menu = document.querySelector("#navVarMenu");
        
        menu.classList.toggle("show");
    }

    return (
        <header className='navVar'>
            <h1><Link to='Home' smooth={true} spy={true} duration={500} offset={-100}>Bienvenido</Link></h1>
            <button className='hamburger' onClick={showMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <ul id="navVarMenu">
            {
                menu.map( item => (
                    <li key={item}><Link to={item} smooth={true} spy={true} duration={500} offset={-100}>{item}</Link></li>
                ))
            }
            </ul>            
        </header>
    )
}

export default NavVar;