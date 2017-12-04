import React, { Component} from 'react'

class LaunchInfo extends Component {
    render(){
        return(
            <div>
                <ul>
                    <li>
                        {this.props.launchID}
                    </li>
                    <li>
                        {this.props.launchName}
                    </li>
                    </ul>
                </div>
        )
    }
}

export default LaunchInfo