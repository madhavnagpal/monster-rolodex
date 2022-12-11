import { Monster } from '../../App';
import './card.styles.css';

type CardProps = {
  monster: Monster;
};

function Card({ monster }: CardProps) {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
}

export default Card;
