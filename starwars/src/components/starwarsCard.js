import React from 'react'

import './StarWars.css'

function CharacterCard(props) {
  return (
    <div className='card-container'>
      <div className={`card-item-front`}>
        <h3>{props.card.name}</h3>

        <p>{props.card.birth_year}</p>

        <p>{props.card.eye_color}</p>

        <p>{props.card.hair_color}</p>

        <p>{props.card.gender}</p>

        <p>{props.card.height}</p>

        <p>{props.card.mass}</p>

        <p>{props.card.skin_color}</p>

        <p>{props.card.species}</p>
      
      </div>

      <div className={`card-item-back`}>
        <h3>{props.card.url}</h3>

        <p>{props.card.created}</p>

        <p>{props.card.edited}</p>

        <p>{props.card.films}</p>

        <p>{props.card.homeworld}</p>

        <p>{props.card.starships}</p>

        <p>{props.card.vehicles}</p>
      
      </div>
      
    </div>
  )
}


export default CharacterCard