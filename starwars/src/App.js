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
//   vehicles: [],
//   check: false
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
        const itemlist = data.results.map(item =>  {return {...item, check:false}})
        this.setState({ starwarsChars:  itemlist});
        console.log(this.state.starwarsChars)
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  toggle= (event) => {
    let change = this.state.starwarsChars.map(card => {
      if (card.url === event) {
        card.check = !card.check;
        return card
      }
      else {
        return card
      }

    }) 

    this.setState = {
      starwarsChars: change
    }
    console.log(change)
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className='character-container'>
        {console.log(this.state.starwarsChars)}
         {this.state.starwarsChars.map( event =>
          <CharacterCard key={event.url} card={event} toggle={this.toggle}/>)}
        </div>
      </div>
    );
  }
}

export default App;
