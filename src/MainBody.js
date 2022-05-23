import React from 'react';
import './includes/MainBody.css';

const MainBody = () => {
    const skills = ['PHP', 'MySQL', 'CSS', 'HTML5', 'Javascript', 'React', 'Cargando...'];

    return (
        <>
            <section className='presentation'>
                <img src='./images/profile.png' alt='No se pudo cargar la imagen' />
                <h1>diego fabian baratta</h1>
                <hr className='star-light'></hr>
                <ul className='skills'>
                    {
                        skills.map( item => (
                            <li key={item}>{item}</li>
                        ))
                    }
                </ul>
            </section>
        </>
    )
}

export default MainBody;
