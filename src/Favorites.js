import React, {Component} from 'react'

import { observer,  } from 'mobx-react'
import store from './models/FavoritesModel'
import LaunchInfoComp from './components/LaunchInfoComp'


@observer
export default class Favorites extends Component {
    render(){
           const favoriteList = store.favorites.map(favorite => {
                return(
                    <LaunchInfoComp
                        //unique id for iterator
                        key={favorite.id}
                        launchName={favorite.launchNamename}
                        launchStartTime={favorite.launchStartTime}
                        agencyInfoNames={favorite.agencyInfoNames}
                        agencyAbbr={favorite.agencyAbbr} 
                        rocketName={favorite.rocketName}
                        launchLocation={favorite.launchLocation}
                        countryCode={favorite.countryCode}
                        rocketImage={favorite.rocketImageL}>
                    </LaunchInfoComp>
                )
            })
            return (
                <div>
                    <h3>Here are your favorite launches!</h3>
                     {favoriteList}
                </div>
            )
        }

}