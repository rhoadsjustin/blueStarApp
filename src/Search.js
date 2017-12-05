import React, { Component } from 'react';
import LaunchInfoComp from './components/LaunchInfoComp'
import './search.css'
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
        // this.handleAgencyFilter = this.handleAgencyFilter.bind(this);
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

        //launch info
        const LaunchInfoNodes = this.state.launchArray.map((launch) => {
            //list of agencies
           const agencyNodes = launch.rocket.agencies.map((agency) => {
                var agencyNames = agency.name
                return agencyNames
            })
            const agencyAbbrv = launch.rocket.agencies.map((agency) => {
                return agency.abbrev
            })
            return(
                <LaunchInfoComp
                //unique id for iterator
                    key={launch.id}
                    launchName={launch.name}
                    launchStartTime={launch.windowstart}
                    agencyInfoNames={agencyNodes}
                    agencyAbbr={agencyAbbrv}
                    rocketName={launch.rocket.name}
                    launchLocation={launch.location.name}
                    countryCode={launch.location.countryCode}
                    rocketImage={launch.rocket.imageURL}>
                 </LaunchInfoComp>
            )
        });

        return(
            <div>
                <div>
                    <div className="col-md-8 offset-md-2" id="searchInput">
                    <input type="text" id="startDate" value={this.state.startDate} onChange={this.handleChange} placeholder="Start Date eg.2015-08-20 " />
                    <input type="text" id="endDate" value={this.state.endDate} onChange={this.handleChange} placeholder="End Date eg.2015-08-28" />
                    <button 
                        onClick={this.getLaunchSchedule}>
                        Search
                        </button>
                    </div>
                </div>
                    <div>
                        <div className="center-align">
                            <button>Sort By Country</button>
                            <button>Sort By Agency</button>
                        </div>
                            {LaunchInfoNodes}
                </div>
             </div>
        )
    }
}

export default Search
