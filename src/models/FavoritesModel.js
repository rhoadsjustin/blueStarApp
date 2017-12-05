import { observable, autorun } from 'mobx'

// export default class FavoritesModel {
//     id = Math.random();
//     @observable launchName;
//     @observable launchStartTime; 
//     @observable agencyInfoNames; 
//     @observable agencyAbbr;
//     @observable rocketName;
//     @observable launchLocation; 
//     @observable countryCode;
//     @observable rocketImage;

//     constructor()
// }

export class FavoriteStore {
    @observable favorites = [];
    @observable filter = '';
}

const store = window.store = new FavoriteStore

export default store

