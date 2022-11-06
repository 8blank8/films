/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import { useState } from 'react';

import { FilmAdd } from './FilmAdd';
import { FilmAddOption } from './FilmAddOption';

import { THEME } from '../../../theme/theme';

export const ModalAddFilm = ({ visibleModal }) => {

   const [filmAdd, setFilmAdd] = useState(null);

   const onSetFilmAdd = (add) => {
      setFilmAdd(add);
   }

   return (
      <Modal
         isVisible={visibleModal}>
         <View style={styles.wrapper} >
            {filmAdd === null ? <FilmAdd onSetFilmAdd={onSetFilmAdd} /> : <FilmAddOption />}
         </View>
      </Modal>
   )
}






const styles = StyleSheet.create({
   wrapper: {
      backgroundColor: THEME.BACKGROUND_COLOR,
      maxWidth: 350,
      borderRadius: 20,
      paddingVertical: 30,
      paddingHorizontal: 20
   },


})