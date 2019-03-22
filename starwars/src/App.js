import React, { Component } from 'react';
import './App.css';

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
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  makeCharacterCard = info => {
    // let characterCard 
    let characterCard = this.state.starwarsChars.map(card => {
      return (
        info.birth_year = card.birth_year,
        info.created = card.created,
        info.edited = card.edited,
        info.eye_color = card.eye_color,
        info.films = card.films,
        info.gender = card.gender,
        info.hair_color = card.hair_color,
        info.height = card.height,
        info.homeworld = card.homeworld,
        info.mass = card.mass,
        info.name = card.name,
        info.skin_color = card.skin_color,
        info.species = card.species,
        info.startships = card.startships,
        info.url = card.url,
        info.vehicles = card.vehicles
      )
    })
    console.log(characterCard)
    
  };




  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className='character-container'>
        {console.log(this.state.starwarsChars)}
          <p>{this.characterCard}</p>
        </div>
      </div>
    );
  }
}

export default App;
