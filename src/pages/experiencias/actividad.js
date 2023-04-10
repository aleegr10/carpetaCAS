import './actividad.css'
import { Fade } from 'react-slideshow-image';
import ReactPlayer from "react-player";
import 'react-slideshow-image/dist/styles.css';
import imgVolun1 from '../../components/images/volun1.jpg';
import imgVolun2 from '../../components/images/volun2.jpg';
import imgVolun3 from '../../components/images/volun3.jpg';
import imgVolun4 from '../../components/images/volun4.jpg';

import imgPerritos1 from '../../components/images/perritos1.jpg';
import imgPerritos2 from '../../components/images/perritos2.jpg';
import imgPerritos3 from '../../components/images/perritos3.jpg';

import videoClaseBaile1 from '../../components/images/claseBaile1.mp4';
import videoClaseBaile2 from '../../components/images/claseBaile2.mp4';

import imgCarreraSolidaria from '../../components/images/carreraSolidaria1.jpg';
import videoCarreraSolidaria from '../../components/images/carreraSolidaria2.mp4';

import videoClaseCrossfit1 from '../../components/images/claseCrossfit1.mp4';
import videoClaseCrossfit2 from '../../components/images/claseCrossfit2.mp4';

import imgSemanaSanta1 from '../../components/images/semanaSanta1.jpg';
import imgSemanaSanta2 from '../../components/images/semanaSanta2.jpg';
import imgSemanaSanta3 from '../../components/images/semanaSanta3.jpg';
import imgSemanaSanta4 from '../../components/images/semanaSanta4.jpg';

import imgRutaBosque1 from '../../components/images/rutaBosque1.jpg';
import imgRutaBosque2 from '../../components/images/rutaBosque2.jpg';
import imgRutaBosque3 from '../../components/images/rutaBosque3.jpg';
import imgRutaBosque4 from '../../components/images/rutaBosque4.jpg';
import imgRutaBosque5 from '../../components/images/rutaBosque5.jpg';

import imgGym1 from '../../components/images/gym1.jpg';
import imgGym2 from '../../components/images/gym2.jpg';

import imgFutbol1 from '../../components/images/futbol1.jpg';
import imgFutbol2 from '../../components/images/futbol2.jpg';

import imgGymkana from '../../components/images/gymkana.jpg';

import videoAquagym from '../../components/images/aquagym.mp4';

import imgDecoracion1 from '../../components/images/decoracion1.jpg';
import imgDecoracion2 from '../../components/images/decoracion2.jpg';

import imgGrupos1 from '../../components/images/grupos1.jpg';
import imgGrupos2 from '../../components/images/grupos2.jpg';
import imgGrupos3 from '../../components/images/grupos3.jpg';

import imgRecogidaJuguetes from '../../components/images/recogidaJuguetes.jpg';


const slideImagesVolun = [
    imgVolun1,
    imgVolun2,
    imgVolun3,
    imgVolun4
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

const slideImagesGym = [
    imgGym1,
    imgGym2
]

const slideImagesFutbol = [
    imgFutbol1,
    imgFutbol2
]

const slideImagesGymkana = [
    imgGymkana,
    imgGymkana
]

const slideVideosAquagym = [
    videoAquagym,
    videoAquagym
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
    imgRecogidaJuguetes,
    imgRecogidaJuguetes
]

const isVideo = (slideImage) => {
    if(slideImage == slideImagesCarrera[0]){
        return <img src={slideImagesCarrera[0]} alt={slideImagesCarrera[0]} className='actSlideImg' />              
    }else{
        return  <div className='actSlideVideo'>
                    <ReactPlayer 
                    url={slideImagesCarrera[1]}
                    pip={true}
                    controls={true}
                    playing={false}
                    />
                </div>
    }
}

const Actividad = () => {
    return (
        <div className='actividad'>
        <h1 className='actTitulo'>ACTIVIDAD</h1>

            <h1>VOLUNTARIADO COMO "COLABORADORA EN LOS SALESIANOS MANUEL LORA TAMAYO"</h1>
            <div className='act'>
                <p className='actParrafo'> Esta experiencia consiste en asistir todos los viernes de 4 a 9 de la noche y realizar diferentes talleres, gymkhanas y juegos para niños de entre 0 y 14 años.Lo realicé en el colegio Salesianos Manuel Lora Tamayo desde septiembre de 2021 hasta junio de 2022 todos los viernes exentos festivos. Es una forma de que los niños se entretengan, relacionen y adquieran cualidades de forma gratuita además de tener numerosos regalos y sorpresas con los que tendrán gran ilusión por volver y pasar una buena tarde. Realizamos numerosas actividades temáticas como casas del terror, competiciones de fútbol… Esta experiencia me ha servido para indagar más en el comportamiento de los niños pequeños y para darme cuenta de lo difícil que es a veces entenderles o que te entiendan, a pesar de ello, ha sido una experiencia única en la que he aprendido muchas cualidades gracias a los niños como son la paciencia, el compañerismo e incluso expresar los sentimientos.</p>
                <div className="actSlideContainer">
                    <Fade infinite={true}>
                        {slideImagesVolun.map((slideImage, index)=> (
                            <div key={index}  className="actSlide">
                                <img src={slideImage} alt={slideImage} className='actSlideImg' />
                            </div>
                        ))} 
                    </Fade>
                </div>
            </div>

            <h1>VOLUNTARIADO EN LA PERRERA</h1>
            <div className='act'>
                <p className='actParrafo'>Esta experiencia se trata de un día en el que fuimos a la perrera para ver la realidad de esta y en qué condiciones llegan algunos animales al lugar. Fue bastante impactante ya que cuando entras hay jaulas a ambos lados del pasillo y vas escuchando tanto llantos como ladridos de los perros que sólo quieren jugar y salir de lo que para ellos es una especie de prisión. Por ello, hay unas zonas en las que varios perros van saliendo a la vez para jugar y pasar un rato al aire libre y con mayor libertad, siempre teniendo en cuenta los perros que se llevan bien con otros perros o con las personas etc. Estuvimos toda la mañana jugando con diferentes perros y sobre todo dándoles mucho cariño, ya que es lo que más necesitan en ese momento. Es increíble ver cómo a pesar de lo mal que se han portado los humanos con ellos, simplemente se acercan a ti a darte cariño y no guardan ningún tipo de rencor ni enfado sino todo lo contrario. Esta experiencia fue muy bonita ya que una vez más tuve la oportunidad de ayudar a animales, pero a la vez creo que ha sido de las más duras y difíciles para mí al principio. Sufrí mucho al ver las condiciones en las que se encontraban y sentí mucha impotencia al no poder hacer prácticamente nada por ayudarlos, ya que si no encuentran familia pronto tienen que ir abandonando la perrera y finalmente perderán su vida. Es muy triste ver eso sobre todo si tienes una pasión tan grande por los animales cómo lo es en mi caso, además, mi perra también fue rescatada tras ser abandonada por otra familia y sentí que seguramente habrá sufrido igual que los perros que ví yo en esta experiencia, por lo que aunque me llevo un recuerdo bastante triste, también me alegro de haberles podido alegrar la mañana a algunos de esos perros.</p>
                <div className="actSlideContainer">
                    <Fade infinite={true}>
                        {slideImagesPerritos.map((slideImage, index)=> (
                            <div key={index}  className="actSlide">
                                <img src={slideImage} alt={slideImage} className='actSlideImg' />
                            </div>
                        ))} 
                    </Fade>
                </div>
            </div>

            <h1>CLASES DE BAILE EN EL RECREO</h1>
            <div className='act'>
                <p className='actParrafo'>Esta experiencia trata de realizar clases de baile durante el recreo y se ha expandido los dos años de curso, en los cuales 1 o 2 días a la semana se realizaban en el salón de actos. Esto me ha ayudado a mejorar en dos ámbitos de mi vida. El primero de ellos es la vergüenza, ya que bailar delante del resto de mis compañeros ha hecho que consiguiera mayor confianza en mí misma y dejara a un lado la vergüenza que pudiera estar pasando para disfrutar y aprender con ellos. Además de esto, también me ha ayudado a mejorar mi actividad física, ya que es el campo más débil que tengo y que más necesitaba reforzar. Y no sólo eso, sino que también he mejorado mi técnica de baile y la coordinación al practicar semana tras semana diferentes tipos de baile latino.</p>
                <div className="actSlideContainerVideo">
                    <Fade infinite={true}>
                        {slideVideosBaile.map((slideVideo, index)=> (
                            <div key={index}>
                                <div className='actSlideVideo'>
                                    <ReactPlayer 
                                    url={slideVideo}
                                    pip={true}
                                    controls={true}
                                    playing={false}
                                    />
                                </div>
                            </div>
                        ))} 
                    </Fade>
                </div>
            </div>

            <h1>CARRERA SOLIDARIA</h1>
            <div className='act'>
                <p className='actParrafo'>Esta experiencia consistió en una carrera a cambio de un kilo de comida, se realizó el 17 de diciembre en el parque de la Feria de Jerez. Esta experiencia fue difícil para mí ya que tengo asma y esto dificulta mi rendimiento y resistencia física, sobre todo cuando se trata de una carrera. Aún así, preferí apoyar la causa y formar parte de esta actividad solidaria en la que disfruté mucho con mis amigos además de sentirme realizada por recaudar numerosos kilos de alimentos. Esta experiencia me demostró que a pesar de ciertas dificultades, todos somos capaces de conseguir y realizar lo que nos propongamos mediante el esfuerzo y la voluntad.</p>
                <div className="actSlideContainerVideo">
                    <Fade infinite={true}>
                        {slideImagesCarrera.map((slideImage, index)=> (
                            <div key={index}  className="actSlide">
                                {isVideo(slideImage)}
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>

            <h1>1 DÍA DE CROSSFIT</h1>
            <div className='exp'>
                <p className='expParrafo'>Esta experiencia consistió en asistir el 20 de febrero a una clase intensiva de crossfit, ya que mis amigas tenían un plan en el cual podían invitar gratuitamente a alguien para que probara. Estas clases son totalmente intensivas y para mi rendimiento, teniendo en cuenta mi problema asmático, fueron demasiado. De hecho, a pesar del esfuerzo que le dediqué, tuve que parar casi al final de la clase por no poder continuar por el bien de mi salud. Esta experiencia me ayudó a superarme nuevamente en el ámbito físico y de actividad y también me enseñó que a veces hay dificultades que te impiden llegar al final, pero que lo importante es esforzarse hasta el final e intentar dar el máximo de uno mismo. Además, también valoré el trabajo y esfuerzo que realizan todas las personas que practican este deporte y aprecié lo difícil que este era aunque desde fuera no lo pareciera tanto.</p>
                <div className="expSlideContainerVideo">
                    <Fade  infinite={true} >
                        {slideVideosCrossfit.map((slideVideo, index)=> (
                            <div key={index} className='expSlide'>
                                <div className='expSlideVideo'>
                                    <ReactPlayer 
                                    url={slideVideo}
                                    pip={true}
                                    controls={true}
                                    playing={false}
                                    />
                                </div>
                            </div>
                        ))} 
                    </Fade>
                </div>
            </div>

            <h1>SALIDA PROCESIONAL</h1>
            <div className='exp'>
                <p className='expParrafo'>Esta experiencia consistió en una salida procesional de 4 horas y media el día 12 de abril de 2021. Esta experiencia fue muy gratificante ya que fue muestra de penitencia y también de superación, en general, andar es de los deportes que menos me motivan o me llaman la atención, pero muchas veces es algo necesario para la salud física y también mental. Por ello, no encontré mejor forma de superarme en este sentido que realizar la estación de penitencia de mi hermandad, ya que además de superarme, también haría feliz a una persona super importante para mí, mi abuelo. De esta forma, esta experiencia ha servido para adentrarme aún más en el campo de actividad, que es el más débil desde mi punto de vista y además fue una experiencia totalmente emotiva al hacer tan feliz a una de las personas que más ha hecho por mí.</p>
                <div className="expSlideContainer">
                    <Fade  infinite={true}>
                        {slideImagesSemanaSanta.map((slideImage, index)=> (
                            <div key={index}  className="expSlide">
                                <img src={slideImage} alt={slideImage} className='expSlideImg' />
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>

            <h1>RECORRIDO EL BOSQUE</h1>
            <div className='exp'>
                <p className='expParrafo'>Esta experiencia se realizó el 18 de marzo y consistió en realizar una ruta de manera voluntaria. Esta experiencia me hizo conectar mucho con mis compañeros de clase y entablar mucho más compañerismo entre nosotros. Estuvimos todo el día de ruta y realizamos algunas actividades juntos, hicimos bromas, hablamos y también comimos juntos. Esta experiencia me demostró la importancia de relacionarme con los demás ya que a pesar de mi asma y el clima que dificultaron el camino, prácticamente se me olvidó entre risas y charla. Esta experiencia unió mucho a la clase y me sirvió para darme cuenta de que estamos todos juntos en esta aventura y en esta nueva experiencia; el Diploma de Bachillerato Internacional.</p>
                <div className="expSlideContainer">
                    <Fade  infinite={true}>
                        {slideImagesRutaBosque.map((slideImage, index)=> (
                            <div key={index}  className="expSlide">
                                <img src={slideImage} alt={slideImage} className='expSlideImg' />
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>

            <h1>TEATRO EN MISA</h1>
            <div className='exp'>
                <p className='expParrafo'>Esta experiencia consistió en elaborar un teatro que mostrará la amistad y el amor para niños de entre 6-14 años en la misa de los Salesianos Manuel Lora Tamayo y se realizó el 24 de abril. En ella, primero realizamos algunas manualidades para utilizarlas como símbolo en nuestro teatro además de crear todo el diálogo y la escenificación. Fue una experiencia muy bonita ya que era la primera vez que realizaba un teatro desde cero y gracias a la ayuda de mis amigos y la motivación que me nace al ser algo para los niños, fue una escena preciosa en la que tanto los niños como nosotros los actores disfrutamos y a mi parecer salió increíble. Me ilusionó mucho haber sido capaz de crear un teatro desde cero y la buena retroalimentación que recibí tras hacerlo, ya que todos nos agradecieron el esfuerzo y la dedicación empleada.</p>
                <div className="expSlideContainer">
                    <div className="expSlide">
                        <img src={imgVolun3} alt={imgVolun3} className='expSlideImg' />
                    </div>
                </div>
            </div>

            <h1>GIMNASIO</h1>
            <div className='exp'>
                <p className='expParrafo'>Esta experiencia consistió en estar asistiendo al gimnasio Activaclub 3 veces a la semana durante 3 meses (junio, julio y agosto). Esta experiencia ha sido de las más importantes para mi ya que no realizaba nada de actividad física y esto afectaba tanto a mi salud física como a mi salud mental. Realizar deporte semanalmente me ayudó a reducir el estrés y también lo acompañe de una mejor alimentación así que mejore mi físico a uno más equilibrado. Esta experiencia fue dura ya que mi asma y mi poca movilidad a veces dificultaba mis entrenamientos pero también fue muy positivo ver mi progreso día tras día y verme capaz de realizar actividad física de forma regular ya que durante el curso me es imposible compatibilizar la actividad con las actividades extraescolares y las clases. Por lo que esta experiencia ha sido de las más significativas durante mi curso CAS.</p>
                <div className="expSlideContainer">
                    <Fade  infinite={true}>
                        {slideImagesGym.map((slideImage, index)=> (
                            <div key={index}  className="expSlide">
                                <img src={slideImage} alt={slideImage} className='expSlideImg' />
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>

            <h1>CAMPAMENTO DE VERANO</h1>
            <div className='exp'>
                <p className='expParrafo'>Esta experiencia consistió en asistir a una campamento de fé en el que realicé numerosas yinkanas y actividades en equipo desde el 11 de julio al 18 de este mes. Realicé muchas actividades diferentes pero me gustaría destacar:</p>
                <ul className='listaCampamento'>
                    <li>
                        <h3>PARTIDO DE FÚTBOL</h3>
                        <div className='exp'>
                            <p className='expParrafo'>Era la primera vez que jugaba un partido de fútbol y hacerlo con personas que no conocía me hizo sentirme menos juzgada y dar lo mejor de mí durante este. Por ello, fue muy gratificante el juego en equipo ya que hizo que mejorara mis habilidades sociales y también aprendí mucho mi actividad y mis técnicas en dicho deporte.</p>
                            <div className="expSlideContainer">
                                <Fade  infinite={true}>
                                    {slideImagesFutbol.map((slideImage, index)=> (
                                        <div key={index}  className="expSlide">
                                            <img src={slideImage} alt={slideImage} className='expSlideImg' />
                                        </div>
                                    ))}
                                </Fade>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h3>GYMKANA POR GRUPOS</h3>
                        <div className='exp'>
                            <p className='expParrafo'>Esta trató de numerosos stands en los que había que realizar retos diferentes, todos ellos en equipo. Lo realicé con mi grupo en el cuál cada uno pertenecíamos a una provincia diferente o a una ciudad distinta. Por ello, formar parte de esto fue una oportunidad para conocer a personas nuevas y entablar relaciones muy bonitas. Además, para conseguir los retos debíamos participar todos y aportar cada uno de nuestra parte para superarlo y pasar al siguiente, por ello sentí que mi ayuda fue igual de necesaria que la del resto y pude valorar una vez más la importancia del trabajo en equipo, aunque se trate de personas desconocidas.</p>
                            <div className="expSlideContainer">
                                <Fade  infinite={true}>
                                    {slideImagesGymkana.map((slideImage, index)=> (
                                        <div key={index}  className="expSlide">
                                            <img src={slideImage} alt={slideImage} className='expSlideImg' />
                                        </div>
                                    ))}
                                </Fade>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h3>AQUAGYM</h3>
                        <div className='exp'>
                            <p className='expParrafo'>Consistió en realizar dos horas de aquagym en la piscina del pueblo. Esta experiencia me ayudó tanto con mi actividad física, ya que fue algo totalmente nuevo y divertido ya que no lo había realizado nunca y pasé un buen rato con mis nuevos amigos, como con mi timidez, ya que realizamos esta actividad delante del resto de personas que asistieron a la piscina pública ese día, por lo que tuve que dejar la vergüenza de lado y pasar un buen rato con mis amigos sin preocuparme por ello.</p>
                            <div className="expSlideContainerVideo">
                                <Fade  infinite={true} >
                                    {slideVideosAquagym.map((slideVideo, index)=> (
                                        <div key={index} className='expSlide'>
                                            <div className='expSlideVideo'>
                                                <ReactPlayer 
                                                url={slideVideo}
                                                pip={true}
                                                controls={true}
                                                playing={false}
                                                />
                                            </div>
                                        </div>
                                    ))} 
                                </Fade>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <h1>DECORACIÓN DE NAVIDAD</h1>
            <div className='exp'>
                <p className='expParrafo'>Se realizó el 10 de diciembre y consistió en decorar la casa de mis suegros como sorpresa de Navidad. Puede parecer algo que realiza cualquier familia en estas fechas pero me encargué de que fuera lo más bonito posible. Para ello, tuve que hacer uso de una escalera, a pesar de mi pánico a las alturas; al hacerlo por otra persona siempre intento superarme y así fue, conseguí superar algunos de mis miedo y me atreví a subirme y decorar el árbol. Decoramos la casa entera, incluido el tejado e hicimos muchos adornos de forma artesanal con objetos que encontramos o compramos, fue una experiencia larga ya que tuvimos que decidir dónde colocar cada adorno, buscar un momento en el que no hubiese nadie en la casa y además, dedicarle la tarde entera ya que hubo complicaciones, algunas luces no encendían etc. Al final conseguimos que se emocionaran y me sentí muy orgullosa del trabajo y esfuerzo que le dediqué, ya que superé mi miedo a las alturas o al menos lo afronté y además realice manualidades que quedaron muy bien como decoración.</p>
                <div className="expSlideContainer">
                    <Fade  infinite={true}>
                        {slideImagesDecoracion.map((slideImage, index)=> (
                            <div key={index}  className="expSlide">
                                <img src={slideImage} alt={slideImage} className='expSlideImg' />
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>

            <h1>GRUPOS DE FE</h1>
            <div className='exp'>
                <p className='expParrafo'>Además de ser animadora de patio en el Centro Juvenil Futuro Abierto, también coordino grupos de fe a un grupo de entre 10-11 años desde septiembre hasta el día de hoy. Esta experiencia ha sido de las más bonitas durante estos dos años ya que he creado un vínculo muy especial con ellos y he aprendido muchas cosas a la vez que enseñado valores esenciales. Estos grupos se realizan todos los viernes de 5 y media a 6 y media, y cada semana tengo que preparar y organizar un grupo con temáticas diferentes, pueden ser manualidades, reflexiones e incluso juegos o gymkanas. Muchas veces es frustrante ya que es una labor que realizo de forma totalmente voluntaria y recibo contestaciones o comportamiento grosero por parte de los niños, pero por otro lado así puedo darme cuenta de lo difícil que es enseñar a veces y de esta forma he conseguido ponerme en la piel de mis profesores y entender muchas veces sus cabreos o broncas. Además de esto, también considero que es una gran responsabilidad ya que aunque sea de manera voluntaria, este grupo cuenta conmigo viernes tras viernes y no es algo que pueda dejar de repente o no asistir un día simplemente porque no me apetece, soy consciente del compromiso que esto requiere y de que a pesar de que haya veces que este más o menos ilusionada, todos los días tengo que dar lo mejor de mí para que esos niños reciban un mensaje bonito y aprendan algo nuevo. Por ello, esta experiencia es tan importante tanto para mi como para mi proyecto CAS en general, ya que he adquirido muchas cualidades gracias a mis alumnos y también me he implicado mucho en la elaboración de las actividades para cada viernes, a pesar de los exámenes que tuviera o lo ocupada que estuviera esa semana.</p>
                <div className="expSlideContainer">
                    <Fade  infinite={true}>
                        {slideImagesGrupos.map((slideImage, index)=> (
                            <div key={index}  className="expSlide">
                                <img src={slideImage} alt={slideImage} className='expSlideImg' />
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>

            <h1>RECOGIDA DE JUGUETES</h1>
            <div className='exp'>
                <p className='expParrafo'>Esta experiencia consistió en el proyecto de una compañera el cual se caracterizó por la recogida de juguetes con vistas a la navidad los días previos a las vacaciones. En ella, mis compañeros y yo nos encargamos de dar propaganda al proyecto y una vez finalizada la fecha, de ordenar todos los juguetes, desechar los que no servían o les faltaban piezas y empaquetarlos de la mejor manera posible. Fue una labor totalmente en equipo ya que mientras uno organizaba el otro empaquetaba y viceversa y gracias a todos pudimos amenizar mucho el trabajo. Fue una experiencia preciosa y también reflexiva ya que nunca me había parado a pensar en la cantidad de juguetes que tenemos en casa y ya no utilizamos y a la vez la cantidad de niños que no reciben juguetes por navidad ya sea por una u otra razón. De esta manera, esta experiencia me sirvió para concienciarme y darme cuenta de la importancia de compartir y donar siempre que haga falta.</p>
                <div className="expSlideContainer">
                    <Fade  infinite={true}>
                        {slideImagesRecogidaJuguetes.map((slideImage, index)=> (
                            <div key={index}  className="expSlide">
                                <img src={slideImage} alt={slideImage} className='expSlideImg' />
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Actividad;
