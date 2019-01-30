import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => { 
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  onFindPetsClick = () => {
    let type = this.state.filters.type

    switch(type){
      case 'all':
        type = ''
        break;
      default:
        type = `?type=${type}`
    }

    fetch(`/api/pets${type}`)
    .then(res => res.json())
    .then(petsArray => {
      this.setState({
        pets: petsArray
      })
    })
  }

  onAdoptPet = (petObj) => {
    let newArray = this.state.pets.map(pet => {
      if (pet.id === petObj.id) {
        return {...pet, isAdopted: true}
      }
      return pet
    })
    this.setState({pets: newArray})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
