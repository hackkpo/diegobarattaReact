import React from 'react';
import ReactDOM from 'react-dom/client';
import './includes/index.css';
import NavVar from './NavVar';
import MainBody from './MainBody';
import Portfolio from './Portfolio';
import Contacto from './Contacto';
import Acerca from './Acerca';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavVar />
    <MainBody />
    <Portfolio />
    <Acerca />
    <Contacto />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
