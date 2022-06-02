import React from 'react';
import './includes/Footer.css';
import redes from './Assets/redesSociales.js';
import { faTwitter, faFacebook, faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
        <h1>en la web</h1>
        <ul>
            {
                redes.map( ({id, name, link}) => (
                    <li key={id}>
                        <a
                            className="pageLink"
                            href={link}
                            target="_blank" 
                            rel="noreferrer"
                        > 
                        {
                            {
                                'Twitter':<FontAwesomeIcon icon={faTwitter} className='faIcon' />,
                                'GitHub':<FontAwesomeIcon icon={faGithub} className='faIcon' />,
                                'LinkedIn': <FontAwesomeIcon icon={faLinkedinIn} className='faIcon' />
                            }[name]                            
                        }
                        </a>
                    </li>
                ))
            }
        </ul>
        <div className='miniFooter'>
            Copyright © Diego Baratta 2022
        </div>
    </footer>
  )
}

export default Footer