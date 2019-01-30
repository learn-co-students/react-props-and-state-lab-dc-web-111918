import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filter: {
        type: 'all'
      }
    }
  }
  changeFilter=(e)=>{
    let filterType = e.target.value
    this.setState({
      filter:{
        type: filterType
      }
    })
  }
  fetchPets=()=>{
    let petType = this.state.filter.type
    if (this.state.filter.type === 'all'){
      fetch(`/api/pets`)
      .then(res=>res.json())
      .then(petsData=>{
        this.setState({
          pets: petsData
        })
      })
    }
    else{
    fetch(`/api/pets?type=${petType}`)
    .then(res=>res.json())
    .then(petsData=>{
      this.setState({
        pets: petsData
      })
    })
    }
  }

  adoptPet=(petObj)=>{
    let newArray =this.state.pets.map((pet)=>{
      if(pet.id === petObj.id){
        return {...pet,isAdopted:true}
      }else{
        return pet
      }
    })

    this.setState({
      pets: newArray
    })
    //this works but is not good practice
      //=> petObj.isAdopted = true
      //=> this.setState({
      //=> pets: [...this.state.pets]
      //=>})
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
              <Filters text={this.state.filter.type} changeFilter={this.changeFilter}
                fetchPets={this.fetchPets}/>
            </div>
            <div className="twelve wide column">

              <PetBrowser getPets={this.state.pets} adoptPet={this.adoptPet}/>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
