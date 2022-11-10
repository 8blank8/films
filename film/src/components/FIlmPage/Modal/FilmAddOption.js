/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useState } from 'react';
import Modal from 'react-native-modal';

import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { ModalSelect } from '../../ModalSelect';

import { THEME } from '../../../theme/theme';

import { Button } from '../../../ui/Button';
import { TextMedium, TextRegular } from '../../../ui/Text';
import { ModalSelectButton } from '../../../ui/ModalSelectButton';
import { Select } from '../../../ui/Select';
import { Input } from '../../../ui/Input';

export const FilmAddOption = ({ visibleModal, setVisibleModalOption }) => {

   const [category, setCategory] = useState('Сериал');
   const [grade, setGrade] = useState(0);
   const [genre, setGenre] = useState(['любые']);

   const categoryArr = ['Сериал', 'Фильм'];
   const genresArr = ['любые', 'комедии', 'ужасы', 'драмы'];

   const [visibleModalGenre, setVisibleModalGenre] = useState(false);


   const setActiveSelect = (text, activeSort, setText) => {

      const index = activeSort.indexOf(text);

      if (index === -1) {
         setText([...activeSort, text]);
      }

      if (index > -1) {
         const newArr = [];
         activeSort.map((item, i) => {
            if (i !== index) {
               newArr.push(item);
            }
         })

         return setText(newArr);
      }
   }

   const setDataModal = (arr, activeSort, setText) => {
      const newArr = arr.map((item, i) => {

         return (
            <TouchableOpacity
               key={i}
               onPress={() => {
                  setActiveSelect(item, activeSort, setText);
               }} >
               <ModalSelectButton
                  active={activeSort.indexOf(item) === -1 ? false : true}
                  text={item}
                  notLine={i + 1 === arr.length ? true : false} />
            </TouchableOpacity>
         )
      })

      return newArr;
   }

   const modalGenre = setDataModal(genresArr, genre, setGenre);


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
         <Modal
            isVisible={visibleModal}
            swipeDirection={'down'}
            onSwipeComplete={() => setVisibleModalOption(false)}
            style={styles.modal}
            animationInTiming={1000}
         >
            <View style={styles.wrapper}>
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
                     sliderLength={310}
                     trackStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                     selectedStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                     markerStyle={{ backgroundColor: THEME.MAIN_COLOR }}
                     onValuesChange={(values) => setGrade(values[0])}
                  />
                  <TouchableOpacity onPress={() => setVisibleModalGenre(true)}>
                     <Select title='Жанры' text={genre} />
                  </TouchableOpacity>
                  <TextRegular style={styles.title}>Добавить описание</TextRegular>
                  <Input style={styles.input} placeholder='Описание' multiline={true} numberOfLines={6} />
                  <TouchableOpacity style={styles.touchable}>
                     <Button style={{ ...styles.buttonActive, maxWidth: 309, height: 50 }}>
                        <TextMedium>Добавить</TextMedium>
                     </Button>
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
         <ModalSelect setVisibleModal={setVisibleModalGenre} visibleModal={visibleModalGenre} content={modalGenre} />
      </View>
   )
}


const styles = StyleSheet.create({

   modal: {
      alignItems: 'center'
   },

   wrapper: {
      backgroundColor: THEME.BACKGROUND_COLOR,
      maxWidth: 350,
      borderRadius: 20,
      paddingVertical: 30,
      paddingHorizontal: 20
   },

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
      backgroundColor: THEME.MAIN_COLOR,
      borderWidth: 0
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
   },

   input: {
      maxWidth: 310,
      height: 90,
      marginTop: 15,
      paddingBottom: 10,
      paddingRight: 20,
      textAlignVertical: 'top'
   },

   title: {
      marginTop: 20
   },

   touchable: {
      marginTop: 40
   }
})