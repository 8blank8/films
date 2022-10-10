/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button } from "../ui/Button";
import { Select } from "../ui/Select";
import { ModalSelectButton } from "../ui/ModalSelectButton";
import Modal from 'react-native-modal';
import { THEME } from "../theme/theme";
import { useState } from "react";

import { ModalSelect } from "./ModalSelect";

export const ModalFilterFilms = () => {

   const [visibleModalGenre, setVisibleModalGenre] = useState(false);
   const [visibleModalCountry, setVisibleModalCountry] = useState(false);

   const [genre, setGenre] = useState('любые');
   const [country, setCountry] = useState('любые');
   const [category, setCategory] = useState('Все');
   const [sort, setSort] = useState('Рейтингу');
   const [year, setYear] = useState('любые');

   const categoryArr = ['Все', 'Фильмы', 'Сериалы'];
   const sortArr = ['Рейтингу', 'Дате', 'Алфавиту'];
   const genresArr = ['любые', 'комедии', 'ужасы', 'драмы'];
   const countryArr = ['любые', 'США', 'Россия', 'Ирландия', 'Великобритания'];

   const setAtiveButton = (text) => {
      switch (text) {
         case 'Все':
            return true;
         case 'Фильмы':
            return true;
         case 'Сериалы':
            return true;
         default:
            return false;
      }
   }

   const contentButtonCategory = categoryArr.map(item => {
      return (
         <TouchableOpacity style={styles.button} onPress={() => {
            setCategory(item);
            setAtiveButton(category);
         }}>
            <Button active={category === item ? true : false} style={styles.buttonModal}>{item}</Button>
         </TouchableOpacity>
      )
   })

   const setActiveButtonSort = (text) => {
      switch (text) {
         case 'Рейтингу':
            return true;
         case 'Дате':
            return true;
         case 'Алфавиту':
            return true;
         default:
            return false;
      }
   }

   const contentButtonSort = sortArr.map(item => {
      return (
         <TouchableOpacity style={styles.button} onPress={() => {
            setSort(item);
            setActiveButtonSort(category);
         }}>
            <Button active={sort === item ? true : false} style={styles.buttonModal}>{item}</Button>
         </TouchableOpacity>
      )
   })

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
            <TouchableOpacity onPress={() => setActiveSelect(item, setText, setVisibleModal)} >
               <ModalSelectButton text={item} notLine={i + 1 === arr.length ? true : false} />
            </TouchableOpacity>
         )
      })

      return newArr;
   }

   const modalGenre = setDataModal(genresArr, setGenre, setVisibleModalGenre);
   const modalCountry = setDataModal(countryArr, setCountry, setVisibleModalCountry);

   return (
      <Modal isVisible={true} backdropOpacity={0} style={styles.modal}>
         <View style={styles.wrapperModal}>
            <View style={styles.buttonsModal}>
               {contentButtonCategory}
            </View>
            <View style={styles.wrapperSelect}>
               <TouchableOpacity onPress={() => setVisibleModalGenre(true)}>
                  <Select title='Жанры' text={genre} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => setVisibleModalCountry(true)}>
                  <Select style={styles.select} title='Страны' text={country} />
               </TouchableOpacity>
            </View>
            <View>
               <Text style={styles.text}>Сортировать по</Text>
               <View style={styles.buttonsModal}>
                  {contentButtonSort}
               </View>
            </View>
         </View>
         <ModalSelect setVisibleModal={setVisibleModalGenre} visibleModal={visibleModalGenre} content={modalGenre} />
         <ModalSelect setVisibleModal={setVisibleModalCountry} visibleModal={visibleModalCountry} content={modalCountry} />
      </Modal >
   )
}




const styles = StyleSheet.create({
   modal: {
      backgroundColor: THEME.BACKGROUND_COLOR,
   },

   wrapperModal: {
      flexDirection: 'column',
      flex: 1
   },

   buttonsModal: {
      flexDirection: 'row',
      justifyContent: 'space-between'
   },

   buttonModal: {
      maxWidth: 103
   },

   select: {
      marginTop: 10
   },

   wrapperSelect: {
      marginTop: 40
   },

   button: {
      width: '100%',
      maxWidth: 103
   },

   text: {
      fontSize: 16,
      color: '#fff',
      marginTop: 40,
      marginBottom: 15
   }

})