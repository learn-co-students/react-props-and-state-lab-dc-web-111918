import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

const petType = {
  all: "/api/pets",
  cat: "/api/pets?type=cat",
  dog: "/api/pets?type=dog",
  micropig: "/api/pets?type=micropig"
}

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

onChangeFilterType = (e) => {
    //needs to update state.filters.type
  console.log(e.target.value)
  console.log("pets", this.state.pets)
  this.setState({
    filters: {
      type: e.target.value
    }
  })
}

returnPetsPath = () => {
  return petType[this.state.filters.type]
}

onFindPetsClick = () => {
  fetch(petType[this.state.filters.type])
  .then(res => res.json())
  .then(petData => {
    console.log(petData);
    this.setState({
      pets: petData
    })

  })
}

onAdoptPet = (petId) => {
  // works but bad practice since mutating state directly
  // petObj.isAdopted = true;
  // let newPetArr = [...this.state.pets]
  // this.setState({
  //   pets: newlyCreatedArray
  // })


  let newPetArray = this.state.pets.map(pet => {
    if(pet.id === petId){
      return {...pet, isAdopted: true}
    }
    return pet
  })
  this.setState({pets: newPetArray})
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeFilterType}/>
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
