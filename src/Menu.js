import React from 'react'
import { MenuItem } from './MenuItem'

const Menu = () => {
    const menu = ['Portfolio', 'Acerca', 'Contacto'];
  
    return (
        <ul>
            {
                menu.map( item => (
                    <MenuItem 
                        key={item}
                        value={item}
                    />
                ))
            }
        </ul>
    );
}

export default Menu;