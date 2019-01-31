import React from 'react'

class Pet extends React.Component {
  render() {
    // console.log(this.props.petsInfo)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.petsInfo.gender === 'female' ? '♀' : '♂'}
            {this.props.petsInfo.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petsInfo.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petsInfo.age}</p>
            <p>Weight: {this.props.petsInfo.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {
            this.props.petsInfo.isAdopted ?
              <button className="ui disabled button">Already adopted</button> :
              <button className="ui primary button"
                onClick={() => { this.props.onAdoptPet(this.props.petsInfo) }

                }>Adopt pet</button>
          }
        </div>
      </div >
    )
  }
}

export default Pet
