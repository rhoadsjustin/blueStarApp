import { observable } from 'mobx'

class Favorite {
    id = Math.random();
    @observable launchName;
    @observable launchStartTime; 
    @observable agencyInfoNames; 
    @observable agencyAbbr;
    @observable rocketName;
    @observable launchLocation; 
    @observable countryCode;
    @observable rocketImage;

    constructor(launch){
        this.launchName = launch.name;
        this.launchStartTime = launch.windowstart
        // this.agencyInfoNames = agencyNodes
        // this.agencyAbbr = agencyAbbrv
        this.rocketName = launch.rocketName
        this.launchLocation = launch.launchLocation
        this.countryCode = launch.countryCode
        this.rocketImage = launch.rocketImage

    }
}

export class FavoriteStore {
    @observable favorites = [];

    addFavorite(obj) {
        this.favorites.push(new Favorite(obj))
    }
}
const store = new FavoriteStore()

export default store

