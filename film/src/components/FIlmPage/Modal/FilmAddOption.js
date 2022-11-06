/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';

import { THEME } from '../../../theme/theme';

import { Button } from '../../../ui/Button';
import { Input } from '../../../ui/Input';


export const FilmAddOption = () => {

   const [category, setCategory] = useState('Сериал');

   const categoryArr = ['Сериал', 'Фильм'];


   const categoryButtons = categoryArr.map((item, i) => {
      return (
         <TouchableOpacity
            key={i}
            style={styles.wrapperButton}
            onPress={() => setCategory(item)}>
            <Button
               active
               style={item === category ? { ...styles.button, ...styles.buttonActive } : styles.button}>
               <Text>{item}</Text>
            </Button>
         </TouchableOpacity>
      )
   })

   return (
      <View>
         <View style={styles.wrapperButtons}>
            {categoryButtons}
         </View>
         <View style={styles.wrapperButtons}>
            <Text style={styles.text}>Добавить оценку</Text>
            <Input style={styles.inputGrade} />
         </View>
      </View>
   )
}


const styles = StyleSheet.create({

   wrapperButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      alignItems: 'center'
   },

   wrapperButton: {
      flexDirection: 'row'
   },


   button: {
      maxWidth: 148,
      height: 50,
   },

   buttonActive: {
      backgroundColor: THEME.MAIN_COLOR
   },

   inputGrade: {
      maxWidth: 70,
      height: 50
   },

   text: {
      color: '#fff',
      fontSize: 16
   }
})