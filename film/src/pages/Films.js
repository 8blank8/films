/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

import { FilmItem } from '../components/FilmItem';

import filterImage from '../assets/filters.png';

import { THEME } from '../theme/theme';

export const Films = () => {
   return (
      <View style={styles.wrapper}>
         <View style={styles.wrapperTitle}>
            <Text style={styles.title}>Фильмы</Text>
            <Image source={filterImage} />
         </View>
         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.filmsTodo}>
               <FilmItem />
               <FilmItem />
               <FilmItem />
               <FilmItem />
               <FilmItem />
               <FilmItem />
               <FilmItem />
            </View>
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      backgroundColor: THEME.BACKGROUND_COLOR,
      flexDirection: 'column',
      flex: 1,
      paddingTop: 20,
      paddingHorizontal: 20
   },

   wrapperTitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 20
   },

   title: {
      color: '#FFF',
      fontSize: 26
   },

   filmsTodo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: 20
   },


})