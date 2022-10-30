/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, ScrollView } from 'react-native';

import { HeaderPage } from '../components/HeaderPage';
import { FilmItem } from '../components/FilmItem';

import { FilmList } from '../ui/FilmList';

export const MyFilms = () => {
   return (
      <View style={styles.wrapper}>
         <HeaderPage text='Моё' filters />
         <View>
            <FilmList>
               <FilmItem />
               <FilmItem />
               <FilmItem />
               <FilmItem />
               <FilmItem />
            </FilmList>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      paddingHorizontal: 20,
      paddingTop: 30
   }
})