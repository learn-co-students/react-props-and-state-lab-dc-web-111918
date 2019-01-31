import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <div className="ui cards">
        {this.props.petsArr.map(petObj =>
          <Pet
            petsInfo={petObj}
            key={petObj.id}
            onAdoptPet={this.props.onAdoptPet}
          />
        )}
      </div>
    )
  }
}

export default PetBrowser
