import React from 'react';
import './card.styles.css'

export const Card = (props) => {
    const imgSRC = 'https://robohash.org/' + props.monster.id + '?set=set2&size180x180'
    return (
        <div className="card-container">
            <img alt="monster" src={imgSRC}/>
            <h2>{props.monster.name}</h2>
            <h3>{props.monster.email}</h3>
        </div>
    );
}