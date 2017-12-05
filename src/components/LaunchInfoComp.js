import React, { Component} from 'react'
import './launchInfo.css'
import { observer } from 'mobx-react'
import store from '../models/FavoritesModel'

@observer 
class LaunchInfo extends Component {
    constructor(){
        super()
        this.state = {
            clicked: "Add to Favorites",
            isAdded: 'false'
        }
    }
    addNewFavorite() {
        
            console.log(store)
            console.log(this.props)
            store.addFavorite(this.props);
            this.setState({
                clicked: "Favorited",
                isAdded: true
            })
        }
    removeFromFavorites(){

        store.removeFavorite(this.props);
        this.setState({
            clicked: "Add to Favorites",
            isAdded: false
        })
    }

    render(){
        return(
            <div className="col-md-8 offset-md-3" id={this.props.countryCode}>
                <div className="card w-75" id={this.props.launchID}>
                    <div className="card-body">
                        <img className="card-img-top rocketPic" src={this.props.rocketImage} alt="Rocket" />
                        <h4 className="card-title">{this.props.rocketName}</h4>
                        <p className="card-text">Launch Name:{this.props.launchName}</p>
                        <p className="card-text">Launch Start:{this.props.launchStartTime}</p>
                        <p className="card-text">Launch Location:{this.props.launchLocation}</p>
                        <p className="card-text">Agencies: {this.props.agencyInfoNames} </p>
                        <button onClick={this.props.isFavorited ? this.removeFromFavorites.bind(this) : this.addNewFavorite.bind(this)}>{this.props.isFavorited ? "Remove Favorite" : this.state.clicked}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LaunchInfo