/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import imageFilm from '../assets/imageFilm.png';
import { TextMedium } from '../ui/Text';


export const FilmItem = ({ navigation }) => {
   return (
      <TouchableOpacity onPress={() => navigation.navigate('filmScreen')}>
         <View style={styles.film}>
            <Image source={imageFilm} style={styles.filmImage} />
            <TextMedium style={styles.filmTitle}>Дом дракона</TextMedium>
            <TextMedium style={styles.filmGenre}>фэнтези</TextMedium>
         </View>
      </TouchableOpacity>
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
      fontSize: 16,
      paddingTop: 5
   },

   filmGenre: {
      fontSize: 14,
      opacity: 0.5
   }
})