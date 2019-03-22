import React, { Component } from 'react';
import './App.css';

import CharacterCard from './components/starwarsCard'

// let characterCard = {   
//   birth_year: '',
//   created: '',
//   edited: '',
//   eye_color: '',
//   films: [],
//   gender: '',
//   hair_color: '',
//   height: '',
//   homeworld: '',
//   mass: '',
//   name: '',
//   skin_color: '',
//   species: [],
//   startships: [],
//   url: '',
//   vehicles: []
// }


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        // this.makeCharacterCard()
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // makeCharacterCard = () => {
  //   let data = this.state.starwarsChars.slice()
  //   data.forEach()
    
  //   // this.state.starwarsChars.map(card => {
  //   //   return (
  //   //     ,
  //   //     card.created,
  //   //     card.edited,
  //   //     
  //   //     card.films,
  //   //     
  //   //     ,
  //   //     card.homeworld,
  //   //     
  //   //     card.species,
  //   //     card.startships,
  //   //     card.url,
  //   //     card.vehicles
  //   //   )
  //   // })
    
  //   // console.log(characterCard)
  //   // console.log(this.state.starwarsChars)
    
  // };

  

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className='character-container'>
         {this.state.starwarsChars.map( event =>
          <CharacterCard key={event.url} card={event} />)}
        </div>
      </div>
    );
  }
}

export default App;
