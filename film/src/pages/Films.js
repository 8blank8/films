/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import { FilmItem } from '../components/FilmItem';
import { ModalFilterFilms } from '../components/ModalFilterFilms';
import { HeaderPage } from '../components/HeaderPage';

import { THEME } from '../theme/theme';
import { useState } from 'react';

import { FilmList } from '../ui/FilmList';

export const Films = () => {

   const [visibleModal, setVisibleModal] = useState(false);

   const toggleModal = () => {
      setVisibleModal(!visibleModal);
   }

   return (
      <View style={styles.wrapper}>
         <HeaderPage toggleModal={toggleModal} filters={true} text='Фильмы' />
         <FilmList>
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
         </FilmList>
         <ModalFilterFilms visibleModal={visibleModal} toggleModal={toggleModal} />
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      backgroundColor: THEME.BACKGROUND_COLOR,
      flexDirection: 'column',
      flex: 1,
      paddingTop: THEME.WRAPPER_PADDING_TOP,
      paddingHorizontal: THEME.WRAPPER_PADDING_HORIZONTAL
   },

})