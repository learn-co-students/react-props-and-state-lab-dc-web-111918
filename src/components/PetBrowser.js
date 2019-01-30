import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  render(props) {

    return <div className="ui cards">
      {this.props.getPets.map(pet=>
        <Pet petInfo={pet} key={pet.id} adoptPet={this.props.adoptPet}/>
      )}
    </div>
  }
}

export default PetBrowser
