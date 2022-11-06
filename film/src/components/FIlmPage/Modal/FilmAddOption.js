/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useState } from 'react';

import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { THEME } from '../../../theme/theme';

import { Button } from '../../../ui/Button';
import { Input } from '../../../ui/Input';
import { TextRegular } from '../../../ui/Text';


export const FilmAddOption = () => {

   const [category, setCategory] = useState('Сериал');
   const [grade, setGrade] = useState(0);

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
               <TextRegular>{item}</TextRegular>
            </Button>
         </TouchableOpacity>
      )
   })

   return (
      <View>
         <View style={styles.wrapperButtons}>
            {categoryButtons}
         </View>
         <View >
            <TextRegular>Добавить оценку</TextRegular>
            <View style={styles.wrapperGrade}>
               <TextRegular style={styles.grade}>0</TextRegular>
               <TextRegular style={styles.gradeActive}>{grade}</TextRegular>
               <TextRegular style={styles.grade}>10</TextRegular>
            </View>
            <MultiSlider
               min={0}
               max={10}
               values={[grade]}
               sliderLength={Dimensions.get('window').width - 80}
               trackStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
               selectedStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
               markerStyle={{ backgroundColor: THEME.MAIN_COLOR }}
               onValuesChange={(values) => setGrade(values[0])}
            />
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
   },

   wrapperGrade: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      marginBottom: -10,
      alignItems: 'center'
   },

   grade: {
      fontSize: 15,
      opacity: 0.5
   },

   gradeActive: {
      fontSize: 26
   }
})