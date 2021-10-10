import React from 'react';
import Tabs from './navigation/tabs';
import { NavigationContainer } from '@react-navigation/native';

import  { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/rootReducer';


const store = createStore(
    rootReducer,
    applyMiddleware(thunk)  
  )
const App = () => {
  

  return (
    <Provider store={store}>
      <NavigationContainer>
          <Tabs/>
      </NavigationContainer>
    </Provider>
   
  );
};

export default App;
