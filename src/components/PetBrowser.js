import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    console.log(this.props)
    return <div className="ui cards">
      {this.props.pets.map(petObj =>
      <Pet
        pet={petObj}
        isAdopted = {petObj.isAdopted}
        key={petObj.id}
        onAdoptPet={this.props.onAdoptPet}
      />
    )}
  </div>
  }
}

export default PetBrowser
