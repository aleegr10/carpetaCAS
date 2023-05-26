import './controlExperiencias.css';
import ReactPlayer from "react-player";
import 'react-slideshow-image/dist/styles.css'
import "bootstrap/dist/css/bootstrap.css";

import imgDibuSon1 from '../components/images/dibuSon1.jpg';
import imgDibuSon2 from '../components/images/dibuSon2.jpg';
import imgDibuSon3 from '../components/images/dibuSon3.png';

import imgVolun1 from '../components/images/volun1.jpg';
import imgVolun2 from '../components/images/volun2.jpg';
import imgVolun3 from '../components/images/volun3.jpg';
import imgVolun4 from '../components/images/volun4.jpg';

import imgGatitos1 from '../components/images/gatitos1.jpg';
import imgGatitos2 from '../components/images/gatitos2.jpg';
import imgGatitos3 from '../components/images/gatitos3.jpg';

import imgprofeUnDia1 from '../components/images/profeUnDia1.jpg';
import imgprofeUnDia2 from '../components/images/profeUnDia2.jpg';
import imgprofeUnDia3 from '../components/images/profeUnDia3.jpg';
import imgprofeUnDia4 from '../components/images/profeUnDia4.jpg';

import imgPerritos1 from '../components/images/perritos1.jpg';
import imgPerritos2 from '../components/images/perritos2.jpg';
import imgPerritos3 from '../components/images/perritos3.jpg';

import videoClaseBaile1 from '../components/images/claseBaile1.mp4';
import videoClaseBaile2 from '../components/images/claseBaile2.mp4';

import imgCarreraSolidaria from '../components/images/carreraSolidaria1.jpg';
import videoCarreraSolidaria from '../components/images/carreraSolidaria2.mp4';

import imgRelatosCortos1 from '../components/images/relatosCortos1.jpg';
import imgRelatosCortos2 from '../components/images/relatosCortos2.jpg';

import videoClaseCrossfit1 from '../components/images/claseCrossfit1.mp4';
import videoClaseCrossfit2 from '../components/images/claseCrossfit2.mp4';

import imgSemanaSanta1 from '../components/images/semanaSanta1.jpg';
import imgSemanaSanta2 from '../components/images/semanaSanta2.jpg';
import imgSemanaSanta3 from '../components/images/semanaSanta3.jpg';
import imgSemanaSanta4 from '../components/images/semanaSanta4.jpg';

import imgRutaBosque1 from '../components/images/rutaBosque1.jpg';
import imgRutaBosque2 from '../components/images/rutaBosque2.jpg';
import imgRutaBosque3 from '../components/images/rutaBosque3.jpg';
import imgRutaBosque4 from '../components/images/rutaBosque4.jpg';
import imgRutaBosque5 from '../components/images/rutaBosque5.jpg';

import imgTeatroMisa from '../components/images/teatroMisa.jpg';

import imgBollitos1 from '../components/images/bollitos1.jpg';
import imgBollitos2 from '../components/images/bollitos2.jpg';
import imgBollitos3 from '../components/images/bollitos3.jpg';

import imgCancer from '../components/images/cancer.jpg';

import imgGym1 from '../components/images/gym1.jpg';
import imgGym2 from '../components/images/gym2.jpg';

import imgGraduacion1 from '../components/images/graduacion1.jpg';
import imgGraduacion2 from '../components/images/graduacion2.jpg';

import imgFutbol1 from '../components/images/futbol1.jpg';
import imgFutbol2 from '../components/images/futbol2.jpg';

import imgGymkhana from '../components/images/gymkhana.jpg';

import videoAquagym from '../components/images/aquagym.mp4';

import imgNoViolencia from '../components/images/noViolencia.jpg';

import imgDecoracion1 from '../components/images/decoracion1.jpg';
import imgDecoracion2 from '../components/images/decoracion2.jpg';

import imgGrupos1 from '../components/images/grupos1.jpg';
import imgGrupos2 from '../components/images/grupos2.jpg';
import imgGrupos3 from '../components/images/grupos3.jpg';

import imgRecogidaJuguetes from '../components/images/recogidaJuguetes.jpg';

import imgDonBosco1 from '../components/images/donBosco1.jpg';
import imgDonBosco2 from '../components/images/donBosco2.jpg';

import imgSanValentin from '../components/images/sanValentin.jpg';


const slideImagesDibuSon = [
    imgDibuSon1,
    imgDibuSon2,
    imgDibuSon3
]

const slideImagesVolun = [
    imgVolun1,
    imgVolun2,
    imgVolun3,
    imgVolun4
]

const slideImagesGatitos = [
    imgGatitos1,
    imgGatitos2,
    imgGatitos3
]

const slideImagesProfeUnDia = [
    imgprofeUnDia1,
    imgprofeUnDia2,
    imgprofeUnDia3,
    imgprofeUnDia4
]

const slideImagesPerritos = [
    imgPerritos1,
    imgPerritos2,
    imgPerritos3
]

const slideVideosBaile = [
    videoClaseBaile1,
    videoClaseBaile2
]

const slideImagesCarrera = [
    imgCarreraSolidaria,
    videoCarreraSolidaria
]

const slideImagesRelatos = [
    imgRelatosCortos1,
    imgRelatosCortos2
]

const slideVideosCrossfit = [
    videoClaseCrossfit1,
    videoClaseCrossfit2
]

const slideImagesSemanaSanta = [
    imgSemanaSanta1,
    imgSemanaSanta2,
    imgSemanaSanta3,
    imgSemanaSanta4
]

const slideImagesRutaBosque = [
    imgRutaBosque1,
    imgRutaBosque2,
    imgRutaBosque3,
    imgRutaBosque4,
    imgRutaBosque5
]

const slideImagesTeatroMisa = [
    imgTeatroMisa
]

const slideImagesBollitos = [
    imgBollitos1,
    imgBollitos2,
    imgBollitos3
]

const slideImagesCancer = [
    imgCancer
]

const slideImagesGym = [
    imgGym1,
    imgGym2
]

const slideImagesGraduacion = [
    imgGraduacion1,
    imgGraduacion2
]

const slideImagesFutbol = [
    imgFutbol1,
    imgFutbol2
]

const slideImagesGymkhana = [
    imgGymkhana
]

const slideVideosAquagym = [
    videoAquagym
]

const slideImagesNoViolencia = [
    imgNoViolencia
]

const slideImagesDecoracion = [
    imgDecoracion1,
    imgDecoracion2
]

const slideImagesGrupos = [
    imgGrupos1,
    imgGrupos2,
    imgGrupos3
]

const slideImagesRecogidaJuguetes = [
    imgRecogidaJuguetes
]

const slideImagesDonBosco = [
    imgDonBosco1,
    imgDonBosco2
]

const slideImagesSanValentin = [
    imgSanValentin
]

const isVideo = (video, index) => {
    if(video === slideImagesCarrera[0]){
        return  <div key={index} style={{backgroundImage: `url(${video})`}} className="conSlide">
                </div>
    }else{
        return  <div key={index}className="conSlide">
                    <ReactPlayer 
                    url={video}
                    width='100%'
                    height='100%'
                    muted={true}
                    pip={true}
                    controls={true}
                    playing={false}
                    />
                </div>
    }
}

const ControlExperiencias = () => {
    return (
        <div className='controlExp'>
            <h1 className='conTitulo'>EXPERIENCIAS</h1>

            <h1>DIBUJANDO SONRISAS</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesDibuSon.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>VOLUNTARIADO COMO "COLABORADORA EN LOS SALESIANOS MANUEL LORA TAMAYO"</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesVolun.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>VOLUNTARIADO EN TIENDA ANIMAL</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesGatitos.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>VOLUNTARIADO "PROFE POR UN DIA"</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesProfeUnDia.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>VOLUNTARIADO EN EL CENTRO MUNICIPAL DE PROTECCIÓN ANIMAL</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesPerritos.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>CLASES DE BAILE EN EL RECREO</h1>
            <div className='con'>
                <div className="conSlideContainer">
                    {slideVideosBaile.map((slideVideo, index)=> (
                        <div key={index}className="conSlide">
                            <ReactPlayer 
                            url={slideVideo}
                            width='100%'
                            height='100%'
                            muted={true}
                            pip={true}
                            controls={true}
                            playing={false}
                            />
                        </div>
                    ))} 
                </div>
            </div>

            <h1>CARRERA SOLIDARIA</h1>
            <div className='con'>
                <div className="conSlideContainer">
                    {slideImagesCarrera.map((slideVideo, index)=> (
                        isVideo(slideVideo, index)
                    ))} 
                </div>
            </div>

            <h1>CONCURSO DE RELATOS CORTOS (JUEZA)</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesRelatos.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>1 DÍA DE CROSSFIT</h1>
            <div className='con'>
                <div className="conSlideContainer">
                    {slideVideosCrossfit.map((slideVideo, index)=> (
                        <div key={index}className="conSlide">
                            <ReactPlayer 
                            url={slideVideo}
                            width='100%'
                            height='100%'
                            muted={true}
                            pip={true}
                            controls={true}
                            playing={false}
                            />
                        </div>
                    ))} 
                </div>
            </div>

            <h1>SALIDA PROCESIONAL</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesSemanaSanta.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>RECORRIDO EL BOSQUE</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesRutaBosque.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>TEATRO EN MISA</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesTeatroMisa.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>COCINA DE BOLLITOS DE JAMÓN Y QUESO</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesBollitos.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>RECAUDACIÓN ASOCIACIÓN CONTRA EL CANCER</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesCancer.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>GIMNASIO</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesGym.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>AYUDA GRADUACIÓN</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesGraduacion.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>CAMPAMENTO DE VERANO</h1>
            <div className='con'>
                <ul className='listaCampamento'>
                    <li className='liCampamento'>
                        <h3>PARTIDO DE FÚTBOL</h3>
                        <div className='con'>
                            <div className='conSlideContainer'>
                                {slideImagesFutbol.map((slideImage, index)=> (
                                    <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                                    </div>
                                ))} 
                            </div>
                        </div>
                    </li>
                    <li className='liCampamento'>
                        <h3>GYMKHANA POR GRUPOS</h3>
                        <div className='con'>
                            <div className='conSlideContainer'>
                                {slideImagesGymkhana.map((slideImage, index)=> (
                                    <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                                    </div>
                                ))} 
                            </div>
                        </div>
                    </li>
                    <li className='liCampamento'>
                        <h3>AQUAGYM</h3>
                        <div className='con'>
                            <div className="conSlideContainer">
                                {slideVideosAquagym.map((slideVideo, index)=> (
                                    <div key={index}className="conSlide">
                                        <ReactPlayer 
                                        url={slideVideo}
                                        width='100%'
                                        height='100%'
                                        muted={true}
                                        pip={true}
                                        controls={true}
                                        playing={false}
                                        />
                                    </div>
                                ))} 
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <h1>ACTIVIDAD DÍA 25N</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesNoViolencia.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>DECORACIÓN DE NAVIDAD</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesDecoracion.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>GRUPOS DE FE</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesGrupos.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>RECOGIDA DE JUGUETES</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesRecogidaJuguetes.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>DIA DE DON BOSCO</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesDonBosco.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>DIA DE SAN VALENTIN</h1>
            <div className='con'>
                <div className='conSlideContainer'>
                    {slideImagesSanValentin.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="conSlide">
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    );
}

export default ControlExperiencias;
