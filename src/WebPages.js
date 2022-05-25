import React from 'react';
import paginas from './Assets/paginas';

const WebPages = () => {
  return (
    <>
        {
            paginas.map( ({id, name, link, image}) => (
                <li key={id}>
                    <a
                        className="pageLink"
                        href={link}
                        target="_blank" 
                        rel="noreferrer"                                               
                    > 
                        <img 
                            src={image}
                            title={name} 
                            alt={name} 
                        />
                    </a>
                </li>
            ))
        }
    </>
  )
}

export default WebPages