/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import { ModalSelect } from '../ModalSelect';

import { Select } from '../../ui/Select';
import { ModalSelectButton } from '../../ui/ModalSelectButton';

export const SelectedButtons = () => {

   const [visibleModalGenre, setVisibleModalGenre] = useState(false);
   const [visibleModalCountry, setVisibleModalCountry] = useState(false);

   const [genre, setGenre] = useState(['любые']);
   const [country, setCountry] = useState(['любые']);

   const genresArr = ['любые', 'комедии', 'ужасы', 'драмы'];
   const countryArr = ['любые', 'США', 'Россия', 'Ирландия', 'Великобритания'];

   const setActiveSelect = (text, activeSort, setText, setVisibleModal,) => {

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




   const setDataModal = (arr, activeSort, setText, setVisibleModal, dispatch) => {
      const newArr = arr.map((item, i) => {

         return (
            <TouchableOpacity
               key={i}
               onPress={() => {
                  setActiveSelect(item, activeSort, setText, setVisibleModal);
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

   const modalGenre = setDataModal(genresArr, genre, setGenre, setVisibleModalGenre);
   const modalCountry = setDataModal(countryArr, country, setCountry, setVisibleModalCountry);

   return (
      <View style={styles.wrapper}>
         <TouchableOpacity onPress={() => setVisibleModalGenre(true)}>
            <Select title='Жанры' text={genre} />
         </TouchableOpacity>
         <TouchableOpacity onPress={() => setVisibleModalCountry(true)}>
            <Select style={styles.select} title='Страны' text={country} />
         </TouchableOpacity>
         <ModalSelect setVisibleModal={setVisibleModalGenre} visibleModal={visibleModalGenre} content={modalGenre} />
         <ModalSelect setVisibleModal={setVisibleModalCountry} visibleModal={visibleModalCountry} content={modalCountry} />
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      marginTop: 40
   },

   select: {
      marginTop: 10
   },
})