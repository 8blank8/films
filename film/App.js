/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import Orientation from 'react-native-orientation-locker';
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
import { VideoPlay } from './src/pages/ViewFilm';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { THEME } from './src/theme/theme';
import { useEffect } from 'react';

const FilmsStack = createStackNavigator();

const FilmsStackScreen = () => {
   return (
      <FilmsStack.Navigator>
         <FilmsStack.Screen options={{ headerShown: false }} name='films' component={Films} />
         <FilmsStack.Screen options={{ headerShown: false }} name='filmScreen' component={FilmScreen} />
         <FilmsStack.Screen options={{ headerShown: false, tabBarVisible: false }} name='video' component={VideoPlay} />
      </FilmsStack.Navigator>
   )
}

const Tab = createBottomTabNavigator();

const App = () => {

   useEffect(() => {
      Orientation.lockToPortrait();
      StatusBar.setHidden(true);
   })

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
                     if (route.name === '????????????') {
                        return <IconFilm name='film' size={20} color={color} />
                     } else if (route.name === '??????????????') {
                        return <View style={{
                           width: 25,
                           height: 25,
                           borderRadius: 12,
                           borderWidth: 1,
                           borderColor: color
                        }}></View>
                     } else if (route.name === '??????????') {
                        return <IconSearch name='search1' size={20} color={color} />
                     } else if (route.name === '??????') {
                        return <IconMyFilms name='bookmark-o' size={20} color={color} />
                     }
                     return;
                  },
                  tabBarActiveTintColor: THEME.MAIN_COLOR,
                  tabBarInactiveTintColor: 'gray',
               })}>
               {/* <Tab.Screen options={{ headerShown: false }} name='Aut' component={AutorizationScreen} /> */}
               <Tab.Screen options={{ headerShown: false }} name='????????????' component={FilmsStackScreen} />
               <Tab.Screen options={{ headerShown: false }} name='??????' component={MyFilms} />
               <Tab.Screen options={{ headerShown: false }} name='??????????' component={SearchScreen} />
               {/* <Tab.Screen options={{ headerShown: false }} name='FilmScreen' component={FilmScreen} /> */}
               <Tab.Screen options={{ headerShown: false }} name='??????????????' component={Profile} />
            </Tab.Navigator>
         </NavigationContainer>
      </Provider>
   );
};

export default App;
