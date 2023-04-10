import React, { Component } from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import {scroller} from 'react-scroll'
import './nav.css'
import imgFlecha from '../components/images/imgFlecha.png'
// Componentes para usar en las rutas
import Inicio from '../pages/inicio';
import Perfil from '../pages/perfil';
import Experiencias from '../pages/experiencias';
// 
import Actividad from '../pages/experiencias/actividad';
import Creatividad from '../pages/experiencias/creatividad';
import Servicio from '../pages/experiencias/servicio';
import ProyectoRecogidaRopa from '../pages/experiencias/proyectoRecogidaRopa';
// 
import ResultadosAprendizaje from '../pages/resultadosAprendizaje';
import CalendarioEquilibrio from '../pages/calendarioEquilibrio';
import ControlExperiencias from '../pages/controlExperiencias';
import ErrorRuta from '../pages/errorRuta';


const scrollType = {
    duration: 500,
    delay: 50,
    smooth: true,
    offset: -110,
}

const scrollCAS = () => {
    setTimeout(function() {
        window.scrollTo(0, 0)
    }, 0);  
    setTimeout(function() {
        scroller.scrollTo("queEsCAS", scrollType)
    }, 500);  
}

const scrollUp = () => {
    setTimeout(function() {
        window.scrollTo(0, 0)
    }, 100);  
}

class Nav extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className='barraNav'>
                <nav className='nav'>
                    <ul className='lista'>
                        <li><Link to="/carpetaCAS" onClick={scrollUp} className="link">INICIO</Link></li>
                        <li><Link to='/carpetaCAS' onClick={scrollCAS} className='link'>¿QUÉ ES CAS?</Link></li>
                        <li><Link to="/perfil" onClick={scrollUp} className="link">PERFIL</Link></li>
                        <li className='menuDesp'>
                            <Link to="/experiencias" onClick={scrollUp} className="link">EXPERIENCIAS</Link>
                            <ul className='desp'>
                                <li><Link to="/experiencias/creatividad" onClick={scrollUp} className="link">CREATIVIDAD</Link></li>
                                <li><Link to="/experiencias/actividad" onClick={scrollUp} className="link">ACTIVIDAD</Link></li>
                                <li><Link to="/experiencias/servicio" onClick={scrollUp} className="link">SERVICIO</Link></li>
                                <li><Link to="/experiencias/proyectoRecogidaRopa" onClick={scrollUp} className="link">PROYECTO RECOGIDA ROPA</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/resultadosAprendizaje" onClick={scrollUp} className="link">RESULTADOS DE APRENDIZAJE</Link></li>
                        <li><Link to="/calendarioEquilibrio" onClick={scrollUp} className="link">CALENDARIO EQUILIBRIO</Link></li>
                        <li><Link to="/controlExperiencias" onClick={scrollUp} className="link">CONTROL DE EXPERIENCIAS</Link></li>
                    </ul>
                </nav>
            </div>
                <Routes>
                    <Route exact path="/carpetaCAS" element={<Inicio />} />
                    <Route exact path="/perfil" element={<Perfil />} />
                    <Route exact path="/experiencias" element={<Experiencias />} />
                    {/*  */}
                    <Route exact path="/experiencias/creatividad" element={<Creatividad />} />
                    <Route exact path="/experiencias/actividad" element={<Actividad />} />
                    <Route exact path="/experiencias/servicio" element={<Servicio />} />
                    <Route exact path="/experiencias/proyectoRecogidaRopa" element={<ProyectoRecogidaRopa />} />
                    {/*  */}
                    <Route exact path="/resultadosAprendizaje" element={<ResultadosAprendizaje />} />
                    <Route exact path="/calendarioEquilibrio" element={<CalendarioEquilibrio />} />
                    <Route exact path="/controlExperiencias" element={<ControlExperiencias />} />
                    <Route path="*" element={<ErrorRuta />} />
                </Routes>
                
                <button className="botonArriba" onClick={() => {window.scrollTo(0, 0)}}><img src={imgFlecha} alt='flechaArria' width='30px' /></button>
            </BrowserRouter>
        );
        
    }
}
export default Nav;
