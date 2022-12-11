import React from 'react';
import { Monster } from '../../App';
import Card from '../card/card.component';
import './card-list.styles.css';

type CardListProps = {
  monsters: Monster[];
};

function CardList({ monsters }: CardListProps) {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default CardList;
