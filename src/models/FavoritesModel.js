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

    constructor(obj){
        this.launchName = obj.launchName;
        this.launchStartTime = obj.launchStartTime
        this.agencyInfoNames = obj.agencyInfoNames
        this.agencyAbbr = obj.agencyAbbrv
        this.rocketName = obj.rocketName
        this.launchLocation = obj.launchLocation
        this.countryCode = obj.countryCode
        this.rocketImage = obj.rocketImage

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

