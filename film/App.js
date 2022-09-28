/* eslint-disable prettier/prettier */

import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';

import store from './src/redux/store';

import { AutorizationScreen } from './src/pages/AutorizationScreen';

const App = () => {

   return (
      <Provider store={store}>
         <View>
            <AutorizationScreen />
         </View>
      </Provider>
   );
};

export default App;
