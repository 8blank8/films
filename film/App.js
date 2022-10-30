/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { View, Image } from 'react-native';
import { Provider } from 'react-redux';
import IconFilm from 'react-native-vector-icons/SimpleLineIcons';
import IconSearch from 'react-native-vector-icons/AntDesign';
import IconMyFilms from 'react-native-vector-icons/FontAwesome';

import store from './src/redux/store';

import { AutorizationScreen } from './src/pages/AutorizationScreen';
import { Profile } from './src/pages/Profile';
import { Films } from './src/pages/Films';
import { FilmScreen } from './src/pages/FilmScreen';
import { SearchScreen } from './src/pages/SearchScreen';
import { MyFilms } from './src/pages/MyFilms';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { THEME } from './src/theme/theme';

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
            <Tab.Navigator
               screenOptions={({ route }) => ({
                  tabBarIcon: ({ color }) => {
                     let iconName;

                     if (route.name === 'Фильмы') {
                        return <IconFilm name='film' size={20} color={color} />
                     } else if (route.name === 'Профиль') {
                        return <View style={{
                           width: 25,
                           height: 25,
                           borderRadius: 12,
                           borderWidth: 1,
                           borderColor: color
                        }}></View>
                     } else if (route.name === 'Поиск') {
                        return <IconSearch name='search1' size={20} color={color} />
                     } else if (route.name === 'Моё') {
                        return <IconMyFilms name='bookmark-o' size={20} color={color} />
                     }
                     return;
                  },
                  tabBarActiveTintColor: THEME.MAIN_COLOR,
                  tabBarInactiveTintColor: 'gray',
               })}>
               {/* <Tab.Screen options={{ headerShown: false }} name='Aut' component={AutorizationScreen} /> */}
               <Tab.Screen options={{ headerShown: false }} name='Фильмы' component={Films} />
               <Tab.Screen options={{ headerShown: false }} name='Моё' component={MyFilms} />
               <Tab.Screen options={{ headerShown: false }} name='Поиск' component={SearchScreen} />
               {/* <Tab.Screen options={{ headerShown: false }} name='FilmScreen' component={FilmScreen} /> */}
               <Tab.Screen options={{ headerShown: false }} name='Профиль' component={Profile} />
            </Tab.Navigator>
         </NavigationContainer>
      </Provider>
   );
};

export default App;
