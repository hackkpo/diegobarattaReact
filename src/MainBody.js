import React from 'react';
import './includes/MainBody.css';
import profilePic from './Assets/img/profile.png';
import Skills from './Skills';

const MainBody = () => {
    const skills = ['PHP', 'MySQL', 'CSS', 'HTML5', 'Javascript', 'React', 'Cargando...'];

    return (
        <>
            <section className='presentation'>
                <img src={profilePic} alt='No se pudo cargar la imagen' />
                <h1>diego fabian baratta</h1>
                <hr></hr>
                <ul>
                    <Skills 
                        
                    />
                </ul>
            </section>
        </>
    )
}

export default MainBody;
