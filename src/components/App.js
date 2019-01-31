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
    // console.log('e')
    e.persist()
    this.setState(
        {
          ...this.state,
          filters: {
            type: e.target.value
        }
      }
    )
  }

  onAdoptPetHandler = (petObj) => {
    // petObj.isAdopted = true
    // this.setState(
    //   {
    //     pets: [...this.state.pets]
    //
    //   }
    // )
    let newPetsArr = this.state.pets.map(pet => {
      if(pet.id === petObj.id){
        return {...pet, isAdopted: true}
      }
      return pet
    })
    this.setState({pets: newPetsArr})
  }

  getPets = () => {
    return fetch(`/api/${this.route()}`)
    .then(r => r.json())
    .then(petsArr => this.setState(
      {
        // ...this.state,
        pets: petsArr
      }
    ))
  }

  // getPets = () => {
  //   filter = this.state.filters.type
  //   return (filter === 'all' ? `fetch(`/api/${this.route()}`)`: `fetch(`/api/pets?type=${filter}`)`)
  //   .then(r => r.json())
  //   .then(petsArr => this.setState(
  //     {
  //       // ...this.state,
  //       pets: petsArr
  //     }
  //   ))
  // }


  onFindPetsClick = (e) => {
    console.log(this.getPets())
    e.persist()
    // this.getPets()
  }

  route = (props) => {
    let filter = this.state.filters.type
    return (filter === 'all' ? 'pets' : `pets?type=${filter}`)
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
              <Filters
                selectedFilter = {this.state.filters.type}
                onChangeType={this.onChangeType}
                onFindPetsClick = {this.onFindPetsClick}
                >
              </Filters>
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
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
