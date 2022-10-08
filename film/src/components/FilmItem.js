/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image } from 'react-native';

import imageFilm from '../assets/imageFilm.png';


export const FilmItem = () => {
   return (
      <View style={styles.film}>
         <Image source={imageFilm} style={styles.filmImage} />
         <Text style={styles.filmTitle}>Дом дракона</Text>
         <Text style={styles.filmGenre}>фэнтези</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   film: {
      maxWidth: 165,
      maxHeight: 259,
      marginBottom: 20
   },

   filmImage: {
      borderRadius: 20
   },

   filmTitle: {
      color: '#FFF',
      fontSize: 16,
      paddingTop: 5
   },

   filmGenre: {
      color: 'rgba(255, 255, 255, 0.5)'
   }
})