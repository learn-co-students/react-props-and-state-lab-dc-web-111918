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
    if (type === 'all') {
      type = ''
    } else if (type === 'cat') {
      type = `?type=cat`
    } else if (type === 'dog') {
      type = `?type=dog`
    } else if (type === 'micropig') {
      type = '?type=micropig'
    }

    fetch(`/api/pets${type}`)
      .then(res => res.json())
      .then(allAnimal => {
        this.setState({ pets: allAnimal })
        console.log(allAnimal) //animal in a new array of pets
      })
  }

  onAdoptPetHandler = (petObj) => {
    // // console.log(petObj)
    // petObj.isAdopted = true
    // let newPetsArr = [...this.state.pets]
    // this.setState({
    //    pets: newPetsArr
    // })
    let newArr = this.state.pets.map(pet => {
      if (pet.id === petObj.id) {
        return { ...pet, isAdopted: true }
      }
      return pet
    })
    this.setState({
      pets: newArr
    })
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
              <Filters changeType={this.onChangeType}
                findPet={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                petsArr={this.state.pets}
                onAdoptPet={this.onAdoptPetHandler}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
