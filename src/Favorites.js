import React, {Component} from 'react'

import { observer  } from 'mobx-react'
import store from './models/FavoritesModel'
import LaunchInfoComp from './components/LaunchInfoComp'


@observer
export default class Favorites extends Component {
    render(){
           const FavoriteView = observer(({favorite}) => (
                    <div className="col-md-8 offset-md-3" id={favorite.countryCode}>
                        <div className="card w-75" id={favorite.launchID}>
                            <div className="card-body">
                           <img className="card-img-top rocketPic" src={favorite.rocketImage} alt="Rocket" />
                           <h4 className="card-title">{favorite.rocketName}</h4>
                           <p className="card-text">Launch Name:{favorite.launchName}</p>
                           <p className="card-text">Launch Start:{favorite.launchStartTime}</p>
                           <p className="card-text">Launch Location:{favorite.launchLocation}</p>
                           <p className="card-text">Agencies: {favorite.agencyInfoNames} </p>
                                <button>"Remove Favorite"</button>
                            </div>
                        </div>
                    </div>
                
            ))
            console.log(observer(store.favorites))
            return (
                <div>
                    <h3>Here are your favorite launches!</h3>
                    {store.favorites.map(favorite => (
                        <FavoriteView favorite={favorite} key={favorite.id} />
                    ))}
                </div>
            )
        }

}