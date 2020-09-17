import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
  trainsList: undefined
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TRAINLIST_UPDATE':
      trainsList: {
        axios.get('/api/departures')
          .then(response => {
            return response.data
          })
          .catch(() => console.log('Error loading trains'))
      }
      break
    default:
      return state
  }
}

const store = createStore(reducer)
store.dispatch({ type: 'TRAINLIST_UPDATE' })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
