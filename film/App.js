/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { View, Image } from 'react-native';

import { Provider } from 'react-redux';

import store from './src/redux/store';

import { AutorizationScreen } from './src/pages/AutorizationScreen';
import { Profile } from './src/pages/Profile';
import { Films } from './src/pages/Films';
import { FilmScreen } from './src/pages/FilmScreen';

// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { THEME } from './src/theme/theme';

import filmsIcon from './src/assets/filmsIcon.png';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

   const MyTheme = {
      dark: false,
      colors: {
         primary: THEME.MAIN_COLOR,
         background: 'rgb(32, 32, 32)',
         card: THEME.BACKGROUND_COLOR,
         text: 'rgb(255, 255, 255)',
         border: 'rgb(199, 199, 204)',
         notification: 'rgb(255, 69, 58)',
      },
   };

   return (
      <Provider store={store}>
         <NavigationContainer theme={MyTheme}>
            <Tab.Navigator>
               <Tab.Screen options={{ headerShown: false }} name='Aut' component={AutorizationScreen} />
               <Tab.Screen
                  options={{
                     headerShown: false,
                     tabBarIcon: () => {
                        return <Image source={filmsIcon} />
                     }
                  }}
                  name='Фильмы'
                  component={Films} />
               <Tab.Screen options={{ headerShown: false }} name='FilmScreen' component={FilmScreen} />
               <Tab.Screen options={{ headerShown: false }} name='Profile' component={Profile} />
            </Tab.Navigator>
         </NavigationContainer>
      </Provider>
   );
};

export default App;
