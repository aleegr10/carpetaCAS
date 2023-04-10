import './calendarioEquilibrio.css';
import calendario from '../components/images/calendario.png';

const CalendarioEquilibrio = () => {
  return (
    <div className="calendario">
      <h1 className='calTitulo'>CALENDARIO</h1>
        <img src={calendario} alt={calendario} />
    </div>
  );
}

export default CalendarioEquilibrio;
