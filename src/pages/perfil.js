import './perfil.css';
import foto from '../components/images/imgPerfil.jpg'
import {Link} from 'react-router-dom'
import {scroller} from 'react-scroll'


const scrollType = {
    duration: 1000,
    delay: 50,
    smooth: true,
    offset: -110,
}

const scroll = () => {
    setTimeout(function() {
        window.scrollTo(0, 0)
    }, 0); 
    setTimeout(function() {
        scroller.scrollTo("queEsCAS", scrollType)
    }, 0);
    
}

const Perfil = () => {
    return (
        <div className='perfil'>
            
            <h1 className='perTitulo'>PERFIL</h1>
            <img src={foto} className="imgPerfil"></img>


            <div className='descripcion'>
                <div>
                    <p className='parrafo'>Hola soy Luz López Castelao y como alumna del Bachillerato Internacional (BI) necesito realizar esta carpeta de la asignatura CAS (Creatividad, Actividad y Servicio) para recibir el diploma. Esta asignatura queda explicada en el apartado <Link to='/' onClick={scroll} className='linkPerfil'>¿QUÉ ES CAS?</Link></p>
                </div>

                <div>
                    <h3 className='miniCabecera'>INTERESES</h3>
                    <p className='parrafo'>En cuanto a mis intereses, me gusta mucho todo lo relacionado con la naturaleza, la moda y los niños pequeños. En un futuro, me gustaría ser veterinaria ya que me encantan los animales y en especial los perros, gatos y caballos pero, a la vez, también me apasiona la educación infantil y en concreto, la educación dirigida a niños con discapacidades mentales como el autismo o el asperger. Se me da bastante bien la interacción con los demás, aunque de primeras soy algo tímida para relacionarme sobre todo con personas con más edad que yo. Mis talentos son el diseño digital de posters o tatuajes y mi organización y creatividad, por ejemplo, a la hora de hacer apuntes o realizar trabajos.</p>
                </div>

                <div>
                    <h3 className='miniCabecera'>OBJETIVOS</h3>
                    <p className='parrafo'>Respecto a mis objetivos respecto a CAS, me gustaría superarme principalmente en el aspecto de actividad, ya que creo que es el más complejo para mí. He hecho muchos deportes desde muy pequeña pero a partir de los 13 años empecé a tener lesiones continuamente y esto hizo que dejara la Gimnasia Artística en la que llevaba 4 años. Desde entonces, me desmotivé en cuanto al deporte por lo que pretendo que CAS sea una oportunidad para retomar de forma más relajada algo que siempre me ha gustado. También espero realizar numerosas experiencias en grupo con mi clase y formar un vínculo especial además de seguir con algunas experiencias creativas. En cuanto al servicio, el voluntariado es algo que me fascina y llevo realizando uno desde hace 3 años en el que hago talleres y juegos para niños pequeños, por lo que me gustaría poder realizar otros diferentes y también algunos relacionados con animales o con el medio ambiente.</p>
                </div>
            </div>
        </div>
    );
}

export default Perfil;
