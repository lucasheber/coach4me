import React from 'react';
import api from '../../services/api';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import convertMinutesToTime from '../../util/convertMinutesToTime';

export interface Coach {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
  week_day: number;
  from: number;
  to: number;
}

interface CoachItemProps {
  coach: Coach;
}

const CoachItem: React.FC<CoachItemProps> = ({ coach }) => {
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  function createNewConnection() {
    api.post('connections', {
      coach_id: coach.id,
    });
  }

  return (
    <article className="coach-item">
      <header>
        <img src={coach.avatar} alt={coach.name} />
        <div>
          <strong>{coach.name}</strong>
          <span>{coach.subject}</span>
        </div>
      </header>

      <p>{coach.bio}</p>

      <footer>
        <p>Preço/Hora
          <strong>R$ {coach.cost}</strong>
        </p>

        <p>
          <strong>{days[coach.week_day]}</strong> &nbsp;
          {convertMinutesToTime(coach.from)} - {convertMinutesToTime(coach.to)}
        </p>
        
        <a
          target="_blank" 
          onClick={createNewConnection} 
          href={`https://wa.me/${coach.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default CoachItem;