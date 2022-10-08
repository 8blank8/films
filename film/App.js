/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';

import store from './src/redux/store';

import { AutorizationScreen } from './src/pages/AutorizationScreen';
import { Profile } from './src/pages/Profile';
import { Films } from './src/pages/Films';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {

   return (
      <Provider store={store}>
         <NavigationContainer>
            <Stack.Navigator >
               {/* <Stack.Screen options={{ headerShown: false }} name='Aut' component={AutorizationScreen} /> */}
               <Stack.Screen options={{ headerShown: false }} name='Films' component={Films} />
               {/* <Stack.Screen options={{ headerShown: false }} name='Profile' component={Profile} /> */}
            </Stack.Navigator>
         </NavigationContainer>
      </Provider>
   );
};

export default App;
