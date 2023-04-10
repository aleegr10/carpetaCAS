import './footer.css'
import React, { Component } from 'react';
import imgIB from '../components/images/imgIB.png';


class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div>
                    <h1>DATOS</h1>
                    <p><b>LUZ LÓPEZ CASTELAO</b></p>
                    <p><b>INTERESES: </b>naturaleza, moda y niños pequeños</p>
                    <p><b>OBJETIVOS: </b>superarme a mí misma principalmente en el aspecto de actividad</p>
                </div>
                <div>
                    <h1>APARTADOS WEB</h1>
                    <nav className='footerNav'>
                        <ul className='footerLista'>
                            <li><a href="./carpetaCAS" className="footerLink">INICIO</a></li>
                            <li><a href="./perfil" className="footerLink">PERFIL</a></li>
                            <li><a href="./experiencias" className="footerLink">EXPERIENCIAS</a></li>
                            <li><a href="./resultadosAprendizaje" className="footerLink">RESULTADOS DE APRENDIZAJE</a></li>
                            <li><a href="./calendarioEquilibrio" className="footerLink">CALENDARIO EQUILIBRIO</a></li>
                            <li><a href="./controlExperiencias" className="footerLink">CONTROL DE EXPERIENCIAS</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h1>PROYECTO BACHILLERATO INTERNACIONAL</h1>
                    <img src={imgIB} className='iconoContacto' alt="direccion" width="35%"/>
                </div>
            </div>
            
        );
    }
}
export default Footer;
