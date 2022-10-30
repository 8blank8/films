/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, TouchableOpacity, Text, Image, Dimensions } from "react-native";
import { Button } from "../ui/Button";
import { Select } from "../ui/Select";
import { ModalSelectButton } from "../ui/ModalSelectButton";
import Modal from 'react-native-modal';
import { THEME } from "../theme/theme";
import { useState } from "react";
import filtersActive from '../assets/filtersAcive.png';

import { ModalSelect } from "./ModalSelect";
import { Slider } from './Slider/Slider';
import { HeaderPage } from "./HeaderPage";

export const ModalFilterFilms = ({ visibleModal, toggleModal }) => {

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

   const contentButtonCategory = categoryArr.map((item, i) => {
      return (
         <TouchableOpacity key={i} style={styles.button} onPress={() => {
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

   const contentButtonSort = sortArr.map((item, i) => {
      return (
         <TouchableOpacity key={i} style={styles.button} onPress={() => {
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
            <TouchableOpacity key={i} onPress={() => setActiveSelect(item, setText, setVisibleModal)} >
               <ModalSelectButton text={item} notLine={i + 1 === arr.length ? true : false} />
            </TouchableOpacity>
         )
      })

      return newArr;
   }

   const modalGenre = setDataModal(genresArr, setGenre, setVisibleModalGenre);
   const modalCountry = setDataModal(countryArr, setCountry, setVisibleModalCountry);

   // получение текущего года для фильтра по годам

   const dateYear = new Date().getFullYear();

   return (
      <Modal
         isVisible={visibleModal}
         backdropOpacity={0}
         style={styles.modal}
      >
         <HeaderPage toggleModal={toggleModal} filters={true} text='Фильмы ' />
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
               <Slider minNum={1970} maxNum={dateYear} text='Года' />
            </View>
            <View>
               <Slider minNum={1} maxNum={8} text='Рейтинг' />
            </View>
            <View>
               <Text style={styles.text}>Сортировать по</Text>
               <View style={styles.buttonsModal}>
                  {contentButtonSort}
               </View>
            </View>
            <View style={styles.buttonSelectedWrapper}>
               <TouchableOpacity style={styles.touchebleOpacity}>
                  <Button style={styles.buttonSelected}>
                     <Text stylText={{ fontSize: 16 }}>Применить фильтры</Text>
                  </Button>
               </TouchableOpacity>
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
      width: '100%',
      marginHorizontal: 0,
      paddingHorizontal: 20,
      marginBottom: 0
   },

   wrapperModal: {
      flexDirection: 'column',
      flex: 1,
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
      marginBottom: 15,
      marginTop: 20
   },

   buttonSelectedWrapper: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      marginBottom: 38
   },

   buttonSelected: {
      borderWidth: 0,
      backgroundColor: THEME.MAIN_COLOR,
      maxWidth: 214,
      height: 60,
   },

   touchebleOpacity: {
      width: 214,
   }
})