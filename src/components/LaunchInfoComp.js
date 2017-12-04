import React, { Component} from 'react'

class LaunchInfo extends Component {
    render(){
        return(
            <div>
                <li id={this.props.launchID}>
                    <h2>Rocket Name: {this.props.rocketName}</h2>
                    <h2>Launch Name:{this.props.launchName}</h2>
                    <h4>Launch Start:{this.props.launchStartTime}</h4>
                    <p>Launch Location:{this.props.launchLocation}</p>
                    <p>Agencies: {this.props.agencyInfoNames} </p>
                    <img src={this.props.rocketImage} alt="rocket"/>
                    </li>
                </div>
        )
    }
}

export default LaunchInfo