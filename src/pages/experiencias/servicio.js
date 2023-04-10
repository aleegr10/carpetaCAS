import './servicio.css';
import { Fade } from 'react-slideshow-image';
import ReactPlayer from "react-player";
import 'react-slideshow-image/dist/styles.css'
import imgDibuSon1 from '../../components/images/dibuSon1.jpg';
import imgDibuSon2 from '../../components/images/dibuSon2.jpg';
import imgDibuSon3 from '../../components/images/dibuSon3.png';

import imgVolun1 from '../../components/images/volun1.jpg';
import imgVolun2 from '../../components/images/volun2.jpg';
import imgVolun3 from '../../components/images/volun3.jpg';
import imgVolun4 from '../../components/images/volun4.jpg';

import imgGatitos1 from '../../components/images/gatitos1.jpg';
import imgGatitos2 from '../../components/images/gatitos2.jpg';
import imgGatitos3 from '../../components/images/gatitos3.jpg';

import imgprofeUnDia1 from '../../components/images/profeUnDia1.jpg';
import imgprofeUnDia2 from '../../components/images/profeUnDia2.jpg';
import imgprofeUnDia3 from '../../components/images/profeUnDia3.jpg';
import imgprofeUnDia4 from '../../components/images/profeUnDia4.jpg';

import imgPerritos1 from '../../components/images/perritos1.jpg';
import imgPerritos2 from '../../components/images/perritos2.jpg';
import imgPerritos3 from '../../components/images/perritos3.jpg';

import imgCarreraSolidaria from '../../components/images/carreraSolidaria1.jpg';
import videoCarreraSolidaria from '../../components/images/carreraSolidaria2.mp4';

import imgRelatosCortos1 from '../../components/images/relatosCortos1.jpg';
import imgRelatosCortos2 from '../../components/images/relatosCortos2.jpg';

import imgTeatroMisa from '../../components/images/teatroMisa.jpg';

import imgCancer from '../../components/images/cancer.jpg';

import imgGraduacion1 from '../../components/images/graduacion1.jpg';
import imgGraduacion2 from '../../components/images/graduacion2.jpg';

import imgNoViolencia from '../../components/images/noViolencia.jpg';

import imgDecoracion1 from '../../components/images/decoracion1.jpg';
import imgDecoracion2 from '../../components/images/decoracion2.jpg';

import imgGrupos1 from '../../components/images/grupos1.jpg';
import imgGrupos2 from '../../components/images/grupos2.jpg';
import imgGrupos3 from '../../components/images/grupos3.jpg';

import imgRecogidaJuguetes from '../../components/images/recogidaJuguetes.jpg';

import imgDonBosco1 from '../../components/images/donBosco1.jpg';
import imgDonBosco2 from '../../components/images/donBosco2.jpg';

import imgSanValentin from '../../components/images/sanValentin.jpg';


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

const slideImagesCarrera = [
    imgCarreraSolidaria,
    videoCarreraSolidaria
]

const slideImagesRelatos = [
    imgRelatosCortos1,
    imgRelatosCortos2
]

const slideImagesTeatroMisa = [
    imgTeatroMisa,
    imgTeatroMisa
]

const slideImagesCancer = [
    imgCancer,
    imgCancer
]

const slideImagesGraduacion = [
    imgGraduacion1,
    imgGraduacion2
]

const slideImagesNoViolencia = [
    imgNoViolencia,
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
    imgRecogidaJuguetes,
    imgRecogidaJuguetes
]

const slideImagesDonBosco = [
    imgDonBosco1,
    imgDonBosco2
]

const slideImagesSanValentin = [
    imgSanValentin,
    imgSanValentin
]

const isVideo = (slideImage) => {
    if(slideImage == slideImagesCarrera[0]){
        return <img src={slideImagesCarrera[0]} alt={slideImagesCarrera[0]} className='serSlideImg' />              
    }else{
        return  <div className='serSlideVideo'>
                    <ReactPlayer 
                    url={slideImagesCarrera[1]}
                    pip={true}
                    controls={true}
                    playing={false}
                    />
                </div>
    }
}

const Servicio = () => {
    return (
        <div className='servicio'>
        <h1 className='serTitulo'>SERVICIO</h1>

            <h1>DIBUJANDO SONRISAS</h1>
            <div className='ser'>
                <p className='parrafo'>Algunos alumnos de mi clase y yo realizamos un proyecto por el Día Mundial de la Sonrisa 2021 en el que todo el que quisiera tenía que asistir al instituto con una sonrisa pintada en la mascarilla para reivindicar que a pesar de las dificultades que nos ha puesto la COVID-19 tenemos que tener siempre una sonrisa que simboliza además lo que las mismas mascarillas esconden a veces; nuestras bonitas sonrisas. Además llenamos el instituto de numerosos carteles con frases motivacionales o positivas relacionadas con este día. Yo en concreto realicé dos carteles. Uno de ellos fue en inglés con la frase “Happiness comes in waves, It’ll find you again” y el otro en español con la frase “La sonrisa lo cura todos”. Tarde dos horas ya que la mayoría de dibujos fueron realizados por mí misma de forma digital y la caligrafía del segundo cartel también. Esta experiencia me hizo darme cuenta de cómo había afectado la COVID-19 y que afrontar la vida con una sonrisa es fundamental sobre todo en las peores situaciones.</p>
                <div className="serSlideContainer">
                    <Fade infinite={true}>
                        {slideImagesDibuSon.map((slideImage, index)=> (
                            <div key={index}  className="serSlide">
                                <img src={slideImage} alt={slideImage} className='serSlideImg' />
                            </div>
                        ))} 
                    </Fade>
                </div>
            </div>

            <h1>VOLUNTARIADO COMO "COLABORADORA EN LOS SALESIANOS MANUEL LORA TAMAYO"</h1>
            <div className='ser'>
                <p className='parrafo'> Esta experiencia consiste en asistir todos los viernes de 4 a 9 de la noche y realizar diferentes talleres, gymkhanas y juegos para niños de entre 0 y 14 años.Lo realicé en el colegio Salesianos Manuel Lora Tamayo desde septiembre de 2021 hasta junio de 2022 todos los viernes exentos festivos. Es una forma de que los niños se entretengan, relacionen y adquieran cualidades de forma gratuita además de tener numerosos regalos y sorpresas con los que tendrán gran ilusión por volver y pasar una buena tarde. Realizamos numerosas actividades temáticas como casas del terror, competiciones de fútbol… Esta experiencia me ha servido para indagar más en el comportamiento de los niños pequeños y para darme cuenta de lo difícil que es a veces entenderles o que te entiendan, a pesar de ello, ha sido una experiencia única en la que he aprendido muchas cualidades gracias a los niños como son la paciencia, el compañerismo e incluso expresar los sentimientos.</p>
                <div className="serSlideContainer">
                    <Fade infinite={true}>
                        {slideImagesVolun.map((slideImage, index)=> (
                            <div key={index}  className="serSlide">
                                <img src={slideImage} alt={slideImage} className='serSlideImg' />
                            </div>
                        ))} 
                    </Fade>
                </div>
            </div>

            <h1>VOLUNTARIADO EN TIENDA ANIMAL</h1>
            <div className='ser'>
                <p className='parrafo'>Esta experiencia consistió en visitar varios días Tienda Animal y encargarnos del cuidado y la atención de los gatos que tienen en adopción. En ella, limpiabamos las jaulas de los gatos, les alimentábamos y jugábamos con ellos para hacerles pasar un rato agradable hasta que llegue el momento de su adopción. Esta experiencia me ha servido mucho ya que en un futuro me gustaría trabajar de veterinaria y poder hacer un voluntariado con animales ha hecho reforzar aún más mi vocación y motivarme a seguir adelante con el proceso. Además, es cierto que a veces era una tarea complicada y que supuso un reto para mí, ya que limpiar las jaulas sin evitar que se salieran de la misma o llenar los comederos sin que intentara. jugar con tu brazo era una tarea sumamente complicada, y algunos días salía de allí con arañazos o mordiscos de alguno de los gatos. A pesar de las complicaciones, fue muy gratificante poder ayudar a estos animales y darles la oportunidad de tener un lugar limpio y seguro donde vivir y dónde puedan sentirse en casa, que es lo más importante, además de sentirse queridos y entretenerse cuando íbamos a jugar con ellos.</p>
                <div className="serSlideContainer">
                    <Fade infinite={true}>
                        {slideImagesGatitos.map((slideImage, index)=> (
                            <div key={index}  className="serSlide">
                                <img src={slideImage} alt={slideImage} className='serSlideImg' />
                            </div>
                        ))} 
                    </Fade>
                </div>
            </div>

            <h1>VOLUNTARIADO "PROFE POR UN DIA"</h1>
            <div className='ser'>
                <p className='parrafo'>Este voluntariado consistió en, de manera voluntaria, prepararnos un tema de matemáticas para explicarle al resto de mis compañeras en clase, resolviendo ejemplos y todas las dudas que pudiesen surgir en el momento. Además de ello, también era necesario subir unos apuntes dónde quedase bien explicado el tema que había preparado. Esta experiencia me aportó más de lo que esperaba, y pude ponerme en el papel del profesor y darme cuenta de lo difícil que es a veces que otros entiendan lo que tu tratas de explicar o simplemente intentar seguir el hilo de una explicación mientras te interrumpen o preguntan de manera constante. Por ello, esta experiencia significó un gran aprendizaje para mí e hizo que cambiase tanto mi comportamiento en clases cómo el trato que les daba a los profesores, mejorandolo tras darme cuenta de cómo se siente.</p>
                <div className="serSlideContainer">
                    <Fade infinite={true}>
                        {slideImagesProfeUnDia.map((slideImage, index)=> (
                            <div key={index}  className="serSlide">
                                <img src={slideImage} alt={slideImage} className='serSlideImg' />
                            </div>
                        ))} 
                    </Fade>
                </div>
            </div>

            <h1>VOLUNTARIADO EN LA PERRERA</h1>
            <div className='ser'>
                <p className='parrafo'>Esta experiencia se trata de un día en el que fuimos a la perrera para ver la realidad de esta y en qué condiciones llegan algunos animales al lugar. Fue bastante impactante ya que cuando entras hay jaulas a ambos lados del pasillo y vas escuchando tanto llantos como ladridos de los perros que sólo quieren jugar y salir de lo que para ellos es una especie de prisión. Por ello, hay unas zonas en las que varios perros van saliendo a la vez para jugar y pasar un rato al aire libre y con mayor libertad, siempre teniendo en cuenta los perros que se llevan bien con otros perros o con las personas etc. Estuvimos toda la mañana jugando con diferentes perros y sobre todo dándoles mucho cariño, ya que es lo que más necesitan en ese momento. Es increíble ver cómo a pesar de lo mal que se han portado los humanos con ellos, simplemente se acercan a ti a darte cariño y no guardan ningún tipo de rencor ni enfado sino todo lo contrario. Esta experiencia fue muy bonita ya que una vez más tuve la oportunidad de ayudar a animales, pero a la vez creo que ha sido de las más duras y difíciles para mí al principio. Sufrí mucho al ver las condiciones en las que se encontraban y sentí mucha impotencia al no poder hacer prácticamente nada por ayudarlos, ya que si no encuentran familia pronto tienen que ir abandonando la perrera y finalmente perderán su vida. Es muy triste ver eso sobre todo si tienes una pasión tan grande por los animales cómo lo es en mi caso, además, mi perra también fue rescatada tras ser abandonada por otra familia y sentí que seguramente habrá sufrido igual que los perros que ví yo en esta experiencia, por lo que aunque me llevo un recuerdo bastante triste, también me alegro de haberles podido alegrar la mañana a algunos de esos perros.</p>
                <div className="serSlideContainer">
                    <Fade infinite={true}>
                        {slideImagesPerritos.map((slideImage, index)=> (
                            <div key={index}  className="serSlide">
                                <img src={slideImage} alt={slideImage} className='serSlideImg' />
                            </div>
                        ))} 
                    </Fade>
                </div>
            </div>

            <h1>CARRERA SOLIDARIA</h1>
            <div className='ser'>
                <p className='parrafo'>Esta experiencia consistió en una carrera a cambio de un kilo de comida, se realizó el 17 de diciembre en el parque de la Feria de Jerez. Esta experiencia fue difícil para mí ya que tengo asma y esto dificulta mi rendimiento y resistencia física, sobre todo cuando se trata de una carrera. Aún así, preferí apoyar la causa y formar parte de esta actividad solidaria en la que disfruté mucho con mis amigos además de sentirme realizada por recaudar numerosos kilos de alimentos. Esta experiencia me demostró que a pesar de ciertas dificultades, todos somos capaces de conseguir y realizar lo que nos propongamos mediante el esfuerzo y la voluntad.</p>
                <div className="serSlideContainerVideo">
                    <Fade infinite={true}>
                        {slideImagesCarrera.map((slideImage, index)=> (
                            <div key={index}  className="serSlide">
                                {isVideo(slideImage)}
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>

            <h1>CONCURSO DE RELATOS CORTOS (JUEZA)</h1>
            <div className='exp'>
                <p className='expParrafo'>Esta experiencia consistió en ayudar a un compañero en su proyecto, siendo la jueza del ganador de dicho concurso. Para ello, estuvimos todo el mes de diciembre y principios de enero haciendo promoción a este concurso, pasando por el resto de clases del instituto para informar y recordar el concurso y por último, elegir la primera semana de enero a los que serían los ganadores. En mi caso, me tocó otorgarle el premio a mi compañera el día 11 de Enero. Esta experiencia fue muy interesante y útil para mí, ya que leer estos relatos me inspiró y me hizo admirar el talento que había en mi instituto acerca de esta actividad. Además, el poder ayudar a mi compañero en su proyecto me demostró la importancia del compañerismo y del trabajo en equipo y el ser jueza me enseñó la dificultad que tiene elegir ya que todos tenían algo que los hacía especial, y me ayudó ya que me considero una persona muy indecisa pero en este caso tuve que intentar superarme en ese ámbito.</p>
                <div className="expSlideContainer">
                    <Fade  infinite={true}>
                        {slideImagesRelatos.map((slideImage, index)=> (
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
                    <Fade  infinite={true} >
                        {slideImagesTeatroMisa.map((slideImage, index)=> (
                            <div key={index}  className="expSlide">
                                <img src={slideImage} alt={slideImage} className='expSlideImg' />
                            </div>
                        ))} 
                    </Fade>
                </div>
            </div>

            <h1>RECAUDACIÓN ASOCIACIÓN CONTRA EL CANCER</h1>
            <div className='exp'>
                <p className='expParrafo'>Esta experiencia consistió en intentar recaudar el máximo dinero posible para la ayuda de la investigación contra el cáncer y se realizó el día 12 de mayo. Fue un tanto agridulce ya que para mí era muy gratificante ayudar en una experiencia así ya que muchos de mis familiares han fallecido por padecer cáncer y es un tema muy sensible para mí por lo que me enorgullece haber formado parte de ello, pero por otro lado, fue algo decepcionante ver la realidad de la sociedad y la poca solidaridad que hay, ya que muchas personas nos mintieron o ignoraron a pesar de estar haciendo este proyecto con un buen fin. Además, está experiencia me sirvió para aprender y cambiar mis formas cuando alguien se acerca a mí por alguna campaña o recaudación, ya que ahora he mejorado mucho mis formas e intento tratar de forma educada y sobretodo amable a esas personas, ya que he entendido la dificultad que tiene y sobretodo al ser algo voluntario he descubierto la importancia del buen trato y el respeto hacia esas personas, que lo hacen por el bien de algo sin querer nada a cambio.</p>
                <div className="expSlideContainer">
                    <Fade  infinite={true}>
                        {slideImagesCancer.map((slideImage, index)=> (
                            <div key={index}  className="expSlide">
                                <img src={slideImage} alt={slideImage} className='expSlideImg' />
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>

            <h1>AYUDA GRADUACIÓN</h1>
            <div className='exp'>
                <p className='expParrafo'>Esta experiencia consistió en ayudar a la preparación y el transcurso de la graduación de mis compañeros de segundo de bachiller el día 16 de junio. Para esta experiencia, estuvimos durante toda la mañana limpiando y colocando sillas y el mobiliario necesario para la graduación, además de organizar las becas y ayudar en el propio acto a subir y bajar las escaleras a los alumnos y en cualquier otro asunto en el que fuera necesaria nuestra ayuda. Fue una experiencia muy bonita ya que el acto fue precioso y me sentí fue feliz de haber podido formar parte de la organización de este, ya que sin mi ayuda probablemente no habría sido posible por lo que me sentí responsable de que todo saliera bien y nuevamente disfrute mucho del compañerismo y el trabajo en equipo que realicé junto con mis compañeras.</p>
                <div className="expSlideContainer">
                    <Fade  infinite={true}>
                        {slideImagesGraduacion.map((slideImage, index)=> (
                            <div key={index}  className="expSlide">
                                <img src={slideImage} alt={slideImage} className='expSlideImg' />
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>

            <h1>ACTIVIDAD DÍA 25N</h1>
            <div className='exp'>
                <p className='expParrafo'>Esta se realizó el día 25 de noviembre en el Centro Juvenil Futuro Abierto y la realicé junto con mis niños a los que doy grupos de fe. Fue muy importante para mí enseñarles la importancia de tratar bien a los demás y en especial a las mujeres, ya que son las que les han dado la vida. Para ello, les mostré una canción y tenían que apuntar una frase que les gustara de ella, después tenían que explicar el por qué y además tenían que mencionar a una mujer importante en sus vidas. De esta forma, les enseñé la importancia y el valor del respeto y lo hice de una forma entretenida para que disfrutaran y lo entendieran de la mejor forma.</p>
                <div className="expSlideContainer">
                    <Fade  infinite={true}>
                        {slideImagesNoViolencia.map((slideImage, index)=> (
                            <div key={index}  className="expSlide">
                                <img src={slideImage} alt={slideImage} className='expSlideImg' />
                            </div>
                        ))}
                    </Fade>
                </div>
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

            <h1>DIA DE DON BOSCO</h1>
            <div className='exp'>
                <p className='expParrafo'>Esta experiencia se realizó el 27 de enero con motivo de la celebración del Día de Don Bosco en el Centro Juvenil Futuro Abierto. Esta experiencia consistió en elaborar un concurso para todos los grupos de fe de entre 10-14 años, para ello, elaboré una presentación con diferentes retos: decir un trabalenguas, adivinar quién es el profesor viendo fotos de él de pequeño, decir una canción que contenga cierta palabra… Para esta actividad tuve que tomarme más tiempo que para cualquier otro viernes ya que debía estar a la altura de todas las edades y de todos los grupos y no únicamente del mío, también debía buscar retos que fueran difíciles pero no imposibles ya que debía haber un ganador, por lo que estuve un gran tiempo investigando y elaborando la presentación de la mejor forma posible. Fue exitoso ya que los niños disfrutaron mucho de la experiencia, y yo con ellos ya que verles así de contentos me hizo tener ganas de esforzarme de esa forma por ellos mil veces más. Además, el no conseguir nada a cambio y ser de manera voluntaria hace que para mi el premio sea su felicidad por lo que no hay nada que me llene más que el hecho de que pasen una buena tarde con alguna actividad realizada y propuesta por mi. Aunque sea una labor dura a veces estar pendiente de tantos niños, es muy bonito ver todo lo que consiguen y aprenden a tu lado.</p>
                <div className="expSlideContainer">
                    <Fade  infinite={true}>
                        {slideImagesDonBosco.map((slideImage, index)=> (
                            <div key={index}  className="expSlide">
                                <img src={slideImage} alt={slideImage} className='expSlideImg' />
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>

            <h1>DIA DE SAN VALENTIN</h1>
            <div className='exp'>
                <p className='expParrafo'>Este proyecto se realizó el 14 de febrero tanto de 2022 como de 2023 y consistió en recaudar alimentos además de tener una segunda intención para hacerlo más llamativo, el reparto de flores en anónimo. Para ello, tuve que encargarme de apuntar y recoger el dinero de los alumnos que desearan participar en el proyecto además de repartir dichas flores anónimas el día de San Valentin. Fue un proyecto muy bonito ya que además de ayudar a personas que necesitan alimentos, también hacemos felices a personas entregándoles flores, que es un detalle que siempre hace ilusión. Por ello, esta experiencia fue muy gratificante y pude disfrutar mucho de ella los dos años.</p>
                <div className="expSlideContainer">
                    <Fade  infinite={true}>
                        {slideImagesSanValentin.map((slideImage, index)=> (
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

export default Servicio;
