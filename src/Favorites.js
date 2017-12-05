import React, {Component} from 'react'

import { observer,  } from 'mobx-react'
import store from './models/FavoritesModel'

@observer
export default class Favorites extends Component {
    render(){
        return(
            <div>
                {store.favorites[0]}
            </div>
        )
    }
}