/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

import { HeaderPage } from '../components/HeaderPage';
import { FilmItem } from '../components/FilmItem';
import { ModalFilterFilms } from '../components/ModalFilterFilms';

import { FilmList } from '../ui/FilmList';
import { THEME } from '../theme/theme';

export const MyFilms = () => {

   const [visibleModal, setVisibleModal] = useState(false);

   const toggleModal = () => {
      setVisibleModal(!visibleModal);
   }

   return (
      <View style={styles.wrapper}>
         <HeaderPage text='Моё' filters toggleModal={toggleModal} />
         <FilmList>
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
         </FilmList>
         <ModalFilterFilms visibleModal={visibleModal} toggleModal={toggleModal} isMyFilms />
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      paddingHorizontal: THEME.WRAPPER_PADDING_HORIZONTAL,
      paddingTop: THEME.WRAPPER_PADDING_TOP,
      flex: 1
   }
})