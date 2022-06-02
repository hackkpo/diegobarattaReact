import React, { useState, useRef } from 'react';
import './includes/Contacto.css';
import emailjs from '@emailjs/browser';

const Contacto = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_t4njc1a', 'template_ym6k3yr', form.current, 'oDyRQ5uKdMehIY4eO')
            .then((result) => {
                console.log(result.text);
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
            });

            form.current.reset();
    };
  

    return (
        <section className='contacto'>
            <h1>Contactame</h1>
            <form ref={form} onSubmit={sendEmail} >
                <div className="input-container ic1">
                    <input 
                        id="from_name" 
                        className="input" 
                        type="text" 
                        placeholder=" " 
                        autoComplete='off'
                        name='from_name'
                        value={name}
                        onChange={ev => setName(ev.target.value)} />
                    <div className="cut"></div>
                    <label htmlFor="from_name" className="placeholder">Nombre</label>
                </div>
                <div className="input-container ic1">
                    <input 
                        id="email" 
                        className="input" 
                        type="text" 
                        placeholder=" " 
                        autoComplete='off'
                        name='email'
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />
                    <div className="cut"></div>
                    <label htmlFor="email" className="placeholder">Email</label>
                </div>
                <div className="input-container ic1">
                    <input 
                        id="phone" 
                        className="input" 
                        type="text" 
                        placeholder=" " 
                        autoComplete='off'
                        name='phone'
                        value={phone}
                        onChange={ev => setPhone(ev.target.value)} />
                    <div className="cut"></div>
                    <label htmlFor="phone" className="placeholder">Tel&eacute;fono</label>
                </div>
                <div className="input-container ic1">
                    <textarea 
                        id="message" 
                        className="input" 
                        type="text" 
                        placeholder=" " 
                        autoComplete='off'
                        name='message'
                        value={message}
                        onChange={ev => setMessage(ev.target.value)} ></textarea> 
                    <div className="cut"></div>
                    <label htmlFor="message" className="placeholder">Mensaje</label>
                </div>
                <button className='btnSend' type='submit'>Enviar</button>           
            </form>
        </section>
    )
}

export default Contacto;