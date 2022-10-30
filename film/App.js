/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';

import store from './src/redux/store';

import { AutorizationScreen } from './src/pages/AutorizationScreen';
import { Profile } from './src/pages/Profile';
import { Films } from './src/pages/Films';
import { FilmScreen } from './src/pages/FilmScreen';

// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

   return (
      <Provider store={store}>
         <NavigationContainer>
            <Tab.Navigator>
               <Tab.Screen options={{ headerShown: false }} name='Aut' component={AutorizationScreen} />
               <Tab.Screen options={{ headerShown: false }} name='Films' component={Films} />
               <Tab.Screen options={{ headerShown: false }} name='FilmScreen' component={FilmScreen} />
               <Tab.Screen options={{ headerShown: false }} name='Profile' component={Profile} />
            </Tab.Navigator>
         </NavigationContainer>
      </Provider>
   );
};

export default App;
