import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import FavoriteStore from './models/FavoritesModel';

ReactDOM.render(<App store={FavoriteStore}/>, document.getElementById('root'));
registerServiceWorker();
