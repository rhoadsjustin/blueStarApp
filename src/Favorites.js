import React, {Component} from 'react'

import { observer } from 'mobx-react'


@observer
export default class Favorites extends Component {
    render(){
        return(
            <div>
                {this.props.store.Favorites}
            </div>
        )
    }
}