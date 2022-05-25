import React, { useState } from 'react';
import './includes/Contacto.css';

const Contacto = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return (
        <section className='contacto'>
            <h1>Contactame</h1>
            <form
                onSubmit={ev => {
                    ev.preventDefault();
                    enviar(name, email, phone, message);
                }}
            >
                <label>
                    Nombre
                    <input 
                        type='text'
                        autoComplete='off'
                        name='name'
                        value={name}
                        onChange={ev => setName(ev.target.value)}
                    />
                </label>
                <label>
                    Email
                    <input 
                        type='text'
                        autoComplete='off'
                        name='email'
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                    />
                </label>
                <label>
                    Tel&eacute;fono
                    <input 
                        type='text'
                        autoComplete='off'
                        name='phone'
                        value={phone}
                        onChange={ev => setPhone(ev.target.value)}
                    />
                </label>
                <label>
                    Mensaje
                    <textarea
                        name='message'
                        value={message}
                        onChange={ev => setMessage(ev.target.value)}            
                    ></textarea> 
                </label>
                <button className='btnSend' type='submit'>Enviar</button>           
            </form>
        </section>
    )
}

const enviar = (name, email, phone, message) => {

};

export default Contacto;