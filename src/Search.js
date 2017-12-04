import React, { Component } from 'react';

class Search extends Component {
    constructor(){
        super()
        this.state = {
            startDate: '',
            endDate: ''
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
            .then(function (data) {
                // Create and append the li's to the ul
                console.log(data)
            })
    }

    render(){
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
                    </div>
        )
    }
}

export default Search
