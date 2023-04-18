import './inicio.css';
import imgInicio from '../components/images/portada.jpg';
import QueEsCAS from './queEsCAS';

const Inicio = () => {
  return (
    <div className="inicio">
      <div>
        <img src={imgInicio} className='imgInicio' alt='imgInicio'/>
      </div>
      <div>
        <h1 className='h1Header'>CARPETA</h1>       
        <h1 className='h1Header'>CAS</h1>
        <h1 className='h1Nombre'>Luz López Castelao</h1>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Pompiere"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic SC"></link>
      </div>

      <a id='queEsCAS'><QueEsCAS></QueEsCAS></a>
    </div>
  );
}

export default Inicio;
