import React, { Component } from 'react';
import LaunchInfoComp from './components/LaunchInfoComp'
class Search extends Component {
    constructor(){
        super()
        this.state = {
            startDate: '',
            endDate: '',
            launchArray: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.getLaunchSchedule = this.getLaunchSchedule.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        this.setState({
            [e.target.id]: value
        })
    }
    
    getLaunchSchedule(){
        let fetchUrl = 'https://launchlibrary.net/1.2/launch/';
        console.log(this.state);
        fetchUrl = fetchUrl + this.state.startDate +  '/' + this.state.endDate
        console.log(fetchUrl)
        return fetch(fetchUrl, {
            method: 'GET'
        })
            .then((resp) => {
                        var data= resp.json();
                        return data;
                    
                    }) // Transform the data into json
            .then((data) => {
                // taking the launch data array to manipulate
                //TODO: Need the name, window start time, rocket name, list of space agencies associated with the Rocket, launch location name/country, image of rocket (if available)
                console.log(data)
                let launchesList = data.launches
                this.setState({
                    launchArray: launchesList
                })
            })
    }

    render(){
        const LaunchInfoNodes = this.state.launchArray.map((launch) => {
            return(
                <LaunchInfoComp
                    launchID={launch.id}
                    launchName={launch.name}
                    launchStartTime={launch.windowstart}
                    rocketName={launch.rocket.name}
                    rocketAgencies={launch.rocket.agencies}
                    launchLocation={launch.location.name}
                    rocketImage={launch.rocket.imageUrl}>
                 </LaunchInfoComp>
            )
        })
        return(
            <div>
            <div>
                This is the search screen
                    <input type="text" id="startDate" value={this.state.startDate} onChange={this.handleChange} placeholder="Start Date eg.2015-08-20 " />
                    <input type="text" id="endDate" value={this.state.endDate} onChange={this.handleChange} placeholder="End Date eg.2015-08-28" />
                </div>
                <div>
                    <button onClick={this.getLaunchSchedule}>
                        Search
                        </button>
                    </div>
                    <div>
                   {LaunchInfoNodes}
                        </div>
                    </div>
        )
    }
}

export default Search
