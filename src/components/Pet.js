import React from 'react'

// age:
// 4
// gender:
// "male"
// id:
// "9750e959-f8ef-465f-9e13-16323454dc1f"
//
// isAdopted:
// false
// name:
// "Hemingway"
// type:
// "micropig"
// weight:
// 5

class Pet extends React.Component {

  //
  // onAdoptPet = () => {
  //   // this.props.isAdopted = true
  //   // console.log(this)
  //   document.getElementById('adopted').class = "ui primary button"
  //   document.getElementById('adopt').class = "ui disabled button"
  // }

  render() {
    // console.log(this.props)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name} {this.props.pet.gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.props.pet.isAdopted ?
          <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={()=>{this.props.onAdoptPet(this.props.pet)}}>Adopt pet</button>
        }
        </div>
      </div>
    )
  }
}

export default Pet
