/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Button } from '../../../ui/Button';
import { THEME } from '../../../theme/theme';
import { TextRegular, TextMedium } from '../../../ui/Text';

export const FilmAdd = ({ onSetFilmAdd }) => {
   return (
      <View style={styles.filmAdd}>
         <TextRegular style={styles.text}>
            Добавить “Дом дракона” в
         </TextRegular>
         <TouchableOpacity
            style={styles.wrapperButton}
            onPress={() => onSetFilmAdd('Посмотреть')}>
            <Button style={styles.button}>
               <TextMedium>Посмотреть</TextMedium>
            </Button>
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.wrapperButton}
            onPress={() => onSetFilmAdd('Просмотренное')}>
            <Button style={styles.button}>
               <TextMedium>Просмотренное</TextMedium>
            </Button>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapperButton: {
      flexDirection: 'row'
   },

   button: {
      backgroundColor: THEME.MAIN_COLOR,
      borderWidth: 0,
      maxWidth: 208,
      height: 50,
      marginTop: 10
   },

   text: {
      paddingBottom: 10
   },

   filmAdd: {
      alignItems: 'center'
   },

})