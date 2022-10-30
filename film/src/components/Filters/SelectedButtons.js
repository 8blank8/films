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

   const [genre, setGenre] = useState('любые');
   const [country, setCountry] = useState('любые');

   const genresArr = ['любые', 'комедии', 'ужасы', 'драмы'];
   const countryArr = ['любые', 'США', 'Россия', 'Ирландия', 'Великобритания'];

   const closeVisibleModal = (setVisibleModal) => {
      setVisibleModal(false);
   }

   const setActiveSelect = (text, setText, setVisibleModal, dispatch) => {
      setText(text);
      closeVisibleModal(setVisibleModal);
   }

   const setDataModal = (arr, setText, setVisibleModal, dispatch) => {
      const newArr = arr.map((item, i) => {
         return (
            <TouchableOpacity key={i} onPress={() => setActiveSelect(item, setText, setVisibleModal)} >
               <ModalSelectButton text={item} notLine={i + 1 === arr.length ? true : false} />
            </TouchableOpacity>
         )
      })

      return newArr;
   }

   const modalGenre = setDataModal(genresArr, setGenre, setVisibleModalGenre);
   const modalCountry = setDataModal(countryArr, setCountry, setVisibleModalCountry);

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