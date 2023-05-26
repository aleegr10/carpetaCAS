import './creatividad.css';
import 'react-slideshow-image/dist/styles.css'
import imgDibuSon1 from '../../components/images/dibuSon1.jpg';
import imgDibuSon2 from '../../components/images/dibuSon2.jpg';
import imgDibuSon3 from '../../components/images/dibuSon3.png';

import imgVolun1 from '../../components/images/volun1.jpg';
import imgVolun2 from '../../components/images/volun2.jpg';
import imgVolun3 from '../../components/images/volun3.jpg';
import imgVolun4 from '../../components/images/volun4.jpg';

import imgprofeUnDia1 from '../../components/images/profeUnDia1.jpg';
import imgprofeUnDia2 from '../../components/images/profeUnDia2.jpg';
import imgprofeUnDia3 from '../../components/images/profeUnDia3.jpg';
import imgprofeUnDia4 from '../../components/images/profeUnDia4.jpg';

import imgTeatroMisa from '../../components/images/teatroMisa.jpg';

import imgBollitos1 from '../../components/images/bollitos1.jpg';
import imgBollitos2 from '../../components/images/bollitos2.jpg';
import imgBollitos3 from '../../components/images/bollitos3.jpg';

import imgNoViolencia from '../../components/images/noViolencia.jpg';
import imgDecoracion1 from '../../components/images/decoracion1.jpg';
import imgDecoracion2 from '../../components/images/decoracion2.jpg';

import imgGrupos1 from '../../components/images/grupos1.jpg';
import imgGrupos2 from '../../components/images/grupos2.jpg';
import imgGrupos3 from '../../components/images/grupos3.jpg';

import imgDonBosco1 from '../../components/images/donBosco1.jpg';
import imgDonBosco2 from '../../components/images/donBosco2.jpg';


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

const slideImagesProfeUnDia = [
    imgprofeUnDia1,
    imgprofeUnDia2,
    imgprofeUnDia3,
    imgprofeUnDia4
]

const slideImagesTeatroMisa = [
    imgTeatroMisa,
    imgTeatroMisa
]

const slideImagesBollitos = [
    imgBollitos1,
    imgBollitos2,
    imgBollitos3
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

const slideImagesDonBosco = [
    imgDonBosco1,
    imgDonBosco2
]

const Creatividad = () => {
    return (
        <div className='creatividad'>
            <h1 className='creTitulo'>CREATIVIDAD</h1>

            <h1>DIBUJANDO SONRISAS</h1>
            <div className='cre'>
                <p className='creParrafo'>Algunos alumnos de mi clase y yo realizamos y organizamos un proyecto por el Día Mundial de la Sonrisa 2021 en el que todo el que quisiera tenía que asistir al instituto con una sonrisa pintada en la mascarilla para reivindicar que a pesar de las dificultades que nos ha puesto la COVID-19 tenemos que tener siempre esa expresión en nuestra cara que simboliza además lo que las mismas mascarillas esconden a veces; nuestras bonitas sonrisas. Además llenamos el instituto de numerosos carteles con frases motivacionales o positivas relacionadas con este día. Yo en concreto realicé dos carteles. Uno de ellos fue en inglés con la frase “Happiness comes in waves, It’ll find you again” y el otro en español con la frase “La sonrisa lo cura todos”. Tarde dos horas ya que la mayoría de dibujos fueron realizados por mí misma de forma digital y la caligrafía del segundo cartel también. Esta experiencia me hizo darme cuenta de cómo había afectado la COVID-19 y que afrontar la vida con una sonrisa es fundamental sobre todo en las peores situaciones y fue muy gratificante ver cómo muchos alumnos del instituto apoyaron y formaron parte del proyecto, en lugar de ignorarlo o reírse de él.</p>
                <div className='creSlideContainer'>
                    {slideImagesDibuSon.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="creSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>VOLUNTARIADO COMO "COLABORADORA EN LOS SALESIANOS MANUEL LORA TAMAYO"</h1>
            <div className='cre'>
                <p className='creParrafo'>Esta experiencia consiste en asistir todos los viernes de 4 a 9 de la noche y realizar diferentes talleres, gymkhanas y juegos para niños de entre 0 y 14 años.Lo realicé en el colegio Salesianos Manuel Lora Tamayo desde septiembre de 2021 hasta la actualidad todos los viernes excepo festivos. Este patio juvenil que queda a disposición de todos los jóvenes y niños cada viernes está dirigido por el Padre Marco y organizado por todos los colaboradores y animadores que formamos parte del equipo. Es una forma de que los niños se entretengan, relacionen y adquieran cualidades de forma gratuita además de tener numerosos regalos y sorpresas con los que tendrán gran ilusión por volver y pasar una buena tarde. Realizamos numerosas actividades temáticas como casas del terror, competiciones de fútbol y una cantidad de juegos impensables. La experiencia me ha servido para indagar más en el comportamiento de los niños pequeños y para darme cuenta de lo difícil que es a veces entenderles o que te entiendan, a pesar de ello, ha sido una experiencia única en la que he aprendido muchas cualidades gracias a los niños como son la paciencia, el compañerismo e incluso expresar los sentimientos.</p>
                <div className='creSlideContainer'>
                    {slideImagesVolun.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="creSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>VOLUNTARIADO "PROFE POR UN DIA"</h1>
            <div className='cre'>
                <p className='creParrafo'>Este voluntariado consistió en, de manera voluntaria, prepararnos un tema de matemáticas para explicarle al resto de mis compañeras en clase, resolviendo ejemplos y todas las dudas que pudiesen surgir en el momento y fue organizado por mi profesora Celia. Además de ello, también era necesario subir unos apuntes dónde quedase bien explicado el tema que había preparado, por lo que había que elaborarlos de tal forma que todas pudiesen entender lo explicado. Esta experiencia me aportó más de lo que esperaba, y pude ponerme en el papel del profesor y darme cuenta de lo difícil que es a veces que otros entiendan lo que tu tratas de explicar o simplemente intentar seguir el hilo de una explicación mientras te interrumpen o preguntan de manera constante. Por ello, significó un gran aprendizaje para mí e hizo que cambiase tanto mi comportamiento en clases cómo el trato que les daba a los profesores, mejorándolo tras darme cuenta de cómo se siente.</p>
                <div className='creSlideContainer'>
                    {slideImagesProfeUnDia.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="creSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>TEATRO EN MISA</h1>
            <div className='cre'>
                <p className='creParrafo'>Esta experiencia consistió en elaborar y organizar junto con mis compañeros un teatro que mostrará la amistad y el amor para niños de entre 6-14 años en la misa de los Salesianos Manuel Lora Tamayo y se realizó el 24 de abril. En ella, primero realizamos algunas manualidades para utilizarlas como símbolo en nuestro teatro además de crear todo el diálogo y la escenificación. Fue una experiencia muy bonita ya que era la primera vez que realizaba un teatro desde cero y gracias a la ayuda de mis amigos y la motivación que me nace al ser algo para los niños, fue una escena preciosa en la que tanto los niños como nosotros los actores disfrutamos y a mi parecer salió increíble. Me ilusionó mucho haber sido capaz de crear un teatro desde cero y la buena retroalimentación que recibí tras hacerlo, ya que todos nos agradecieron el esfuerzo y la dedicación empleada.</p>
                <div className='creSlideContainer'>
                    {slideImagesTeatroMisa.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="creSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>COCINA DE BOLLITOS DE JAMÓN Y QUESO</h1>
            <div className='cre'>
                <p className='creParrafo'>Esta experiencia consistió en realizar bollos de jamón y queso totalmente sola inspirandome en una receta vista por internet el día 10 de agosto. Esta experiencia fue más difícil de lo que puede parecer ya que la cocina no es una de mis virtudes sino que es de las peores tareas que se me dan. En esta experiencia descubrí que aunque dediques mucho tiempo a algo, puede que no salga bien o que creas que está saliendo mejor de lo que realmente es. Esto fue lo que pasó, tenían buena pinta pero cuando fui a probarlos la masa estaba cruda e insípida. Fue frustrante por una parte ya que le dediqué tiempo a la elaboración previa pero por otra parte me sirvió para aprender e intentar mejorar para la próxima vez que cocinara, ya que el error fue poner el fuego muy fuerte.</p>
                <div className='creSlideContainer'>
                    {slideImagesBollitos.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="creSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>ACTIVIDAD DÍA 25N</h1>
            <div className='cre'>
                <p className='creParrafo'>Esta se realizó el día 25 de noviembre en el Centro Juvenil Futuro Abierto y la realicé y organicé junto con mis niños a los que doy grupos de fe. Fue muy importante para mí enseñarles la importancia de tratar bien a los demás y en especial a las mujeres, ya que son las que les han dado la vida. Para ello, les mostré una canción y tenían que apuntar una frase que les gustara de ella, después tenían que explicar el por qué y además tenían que mencionar a una mujer importante en sus vidas. De esta forma, les enseñé la importancia y el valor del respeto y lo hice de una forma entretenida para que disfrutaran y lo entendieran de la mejor forma.</p>
                <div className='creSlideContainer'>
                    {slideImagesNoViolencia.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="creSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>DECORACIÓN DE NAVIDAD</h1>
            <div className='cre'>
                <p className='creParrafo'>Se realizó el 10 de diciembre y consistió en decorar la casa de mis suegros como sorpresa de Navidad. Puede parecer algo que realiza cualquier familia en estas fechas pero me encargué de que fuera lo más bonito posible. Para ello, tuve que hacer uso de una escalera, a pesar de mi pánico a las alturas; al hacerlo por otra persona siempre intento superarme y así fue, conseguí superar algunos de mis miedo y me atreví a subirme y decorar el árbol. Decoramos la casa entera, incluido el tejado e hicimos muchos adornos de forma artesanal con objetos que encontramos o compramos, fue una experiencia larga ya que tuvimos que decidir dónde colocar cada adorno, buscar un momento en el que no hubiese nadie en la casa y además, dedicarle la tarde entera ya que hubo complicaciones, algunas luces no encendían etc. Al final conseguimos que se emocionaran y me sentí muy orgullosa del trabajo y esfuerzo que le dediqué, ya que superé mi miedo a las alturas o al menos lo afronté y además realice manualidades que quedaron muy bien como decoración.</p>
                <div className='creSlideContainer'>
                    {slideImagesDecoracion.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="creSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>GRUPOS DE FE</h1>
            <div className='cre'>
                <p className='creParrafo'>Además de ser animadora de patio en el Centro Juvenil Futuro Abierto, también coordino grupos de fe a un grupo de entre 10-11 años desde septiembre hasta el día de hoy, organizado por la coordinadora Yolanda. Esta experiencia ha sido de las más bonitas durante estos dos años ya que he creado un vínculo muy especial con ellos y he aprendido muchas cosas a la vez que enseñado valores esenciales. Estos grupos se realizan todos los viernes de 5 y media a 6 y media, y cada semana tengo que preparar y organizar un grupo con temáticas diferentes, pueden ser manualidades, reflexiones e incluso juegos o gymkanas. Muchas veces es frustrante ya que es una labor que realizo de forma totalmente voluntaria y recibo contestaciones o comportamiento grosero por parte de los niños, pero por otro lado así puedo darme cuenta de lo difícil que es enseñar a veces y de esta forma he conseguido ponerme en la piel de mis profesores y entender muchas veces sus cabreos o broncas. Además de esto, también considero que es una gran responsabilidad ya que aunque sea de manera voluntaria, este grupo cuenta conmigo viernes tras viernes y no es algo que pueda dejar de repente o no asistir un día simplemente porque no me apetece, soy consciente del compromiso que esto requiere y de que a pesar de que haya veces que este más o menos ilusionada, todos los días tengo que dar lo mejor de mí para que esos niños reciban un mensaje bonito y aprendan algo nuevo. Por ello, esta experiencia es tan importante tanto para mi como para mi proyecto CAS en general, ya que he adquirido muchas cualidades gracias a mis alumnos y también me he implicado mucho en la elaboración de las actividades para cada viernes, a pesar de los exámenes que tuviera o lo ocupada que estuviera esa semana.</p>
                <div className='creSlideContainer'>
                    {slideImagesGrupos.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="creSlide">
                        </div>
                    ))} 
                </div>
            </div>

            <h1>DIA DE DON BOSCO</h1>
            <div className='cre'>
                <p className='creParrafo'>Esta experiencia se realizó el 27 de enero con motivo de la celebración del Día de Don Bosco en el Centro Juvenil Futuro Abierto. Esta experiencia consistió en elaborar un concurso para todos los grupos de fe de entre 10-14 años, para ello, elaboré una presentación con diferentes retos: decir un trabalenguas, adivinar quién es el profesor viendo fotos de él de pequeño, decir una canción que contenga cierta palabra… Para esta actividad tuve que tomarme más tiempo que para cualquier otro viernes ya que debía estar a la altura de todas las edades y de todos los grupos y no únicamente del mío, también debía buscar retos que fueran difíciles pero no imposibles ya que debía haber un ganador, por lo que estuve un gran tiempo investigando y elaborando la presentación de la mejor forma posible. Fue exitoso ya que los niños disfrutaron mucho de la experiencia, y yo con ellos ya que verles así de contentos me hizo tener ganas de esforzarme de esa forma por ellos mil veces más. Además, el no conseguir nada a cambio y ser de manera voluntaria hace que para mi el premio sea su felicidad por lo que no hay nada que me llene más que el hecho de que pasen una buena tarde con alguna actividad realizada y propuesta por mi. Aunque sea una labor dura a veces estar pendiente de tantos niños, es muy bonito ver todo lo que consiguen y aprenden a tu lado.</p>
                <div className='creSlideContainer'>
                    {slideImagesDonBosco.map((slideImage, index)=> (
                        <div key={index} style={{backgroundImage: `url(${slideImage})`}} className="creSlide">
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    );
}

export default Creatividad;
