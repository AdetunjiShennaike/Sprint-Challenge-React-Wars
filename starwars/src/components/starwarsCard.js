import React from 'react'

import './StarWars.css'

function CharacterCard(props) {
  return (
    <div className='card-container'>
      <div className={`card card-item-front display${props.card.check ? '' : ' diplay'}`} onClick={() => props.toggle(props.card.url)}>
        <h3>{props.card.name}</h3>
        <div className='info'>
          <div className='left-row'>
            <p><span>Birth Year: </span> {props.card.birth_year}</p>

            <p><span>Eye Color: </span>{props.card.eye_color}</p>

            <p><span>Hair Color: </span>{props.card.hair_color}</p>

            <p><span>Gender: </span>{props.card.gender}</p>
          </div>

          <div className='right-row'>
            <p><span>Height: </span>{props.card.height}</p>

            <p><span>Weight: </span>{props.card.mass}</p>

            <p><span>Skin Color: </span>{props.card.skin_color}</p>

            <p><a href={props.card.species} alt='species'>Species</a></p>
          </div>
        </div>
      </div>

      <div className={`card card-item-back${props.card.check ? ' diplay' : ''}`} onClick={() => props.toggle(props.card.url)}>
        <h3><a href={props.card.url} alt='link'>More on {props.card.name}</a></h3>
        <div className='info'>
          <div className='left-row'>
            <p><span>Created: </span>{props.card.created}</p>

            <p><span>Edited: </span>{props.card.edited}</p>

            <p><span>Featured Films: </span>{props.card.films.forEach((element, i) => {
              <a href={element.i}>Movie #{i}</a>
            })}</p>
          </div>

          <div className='right-side'>
            <p><span><a href={props.card.homeworld} alt='home'>Homeworld</a></span></p>

            <p><span>Star Ships: </span>{props.card.starships}</p>

            <p><span>Vehicles: </span>{props.card.vehicles}</p>
          </div>
        </div>
      </div> 
    </div>
  )
}


export default CharacterCard