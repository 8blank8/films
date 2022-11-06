/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Button } from '../../../ui/Button';
import { THEME } from '../../../theme/theme';

export const FilmAdd = ({ onSetFilmAdd }) => {
   return (
      <View style={styles.filmAdd}>
         <Text style={styles.text}>
            Добавить “Дом дракона” в
         </Text>
         <TouchableOpacity
            style={styles.wrapperButton}
            onPress={() => onSetFilmAdd('Посмотреть')}>
            <Button style={styles.button}>
               <Text>Посмотреть</Text>
            </Button>
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.wrapperButton}
            onPress={() => onSetFilmAdd('Просмотренное')}>
            <Button style={styles.button}>
               <Text>Просмотренное</Text>
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
      color: '#fff',
      fontSize: 16,
      paddingBottom: 10
   },

   filmAdd: {
      alignItems: 'center'
   },

})