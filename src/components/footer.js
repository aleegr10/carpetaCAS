import './footer.css'
import React, { Component } from 'react';
import imgIB from '../components/images/imgIB.png';


class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footerDato'>
                    <h1>DATOS</h1>
                    <p><b>LUZ LÓPEZ CASTELAO</b></p>
                    <p><b>INTERESES: </b>naturaleza, moda y niños pequeños</p>
                    <p><b>OBJETIVOS: </b>superarme a mí misma principalmente en el aspecto de actividad</p>
                </div>
                <div className='footerDato'>
                    <h1>APARTADOS WEB</h1>
                    <nav className='footerNav'>
                        <ul className='footerLista'>
                            <li><p>INICIO</p></li>
                            <li><p>PERFIL</p></li>
                            <li><p>EXPERIENCIAS</p></li>
                            <li><p>RESULTADOS DE APRENDIZAJE</p></li>
                            <li><p>CALENDARIO EQUILIBRIO</p></li>
                            <li><p>CONTROL DE EXPERIENCIAS</p></li>
                        </ul>
                    </nav>
                </div>
                <div className='footerDato'>
                    <h1>PROYECTO BACHILLERATO INTERNACIONAL</h1>
                    <img src={imgIB} className='iconoContacto' alt="direccion" width="35%"/>
                </div>
            </div>
            
        );
    }
}
export default Footer;
