/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import { useState } from 'react';

import { FilmAdd } from './FilmAdd';
import { FilmAddOption } from './FilmAddOption';

import { THEME } from '../../../theme/theme';

export const ModalAddFilm = ({ visibleModal, setVisibleModal }) => {

   const [filmAdd, setFilmAdd] = useState(null);
   const [visibleModalOption, setVisibleModalOption] = useState(false);

   const onSetFilmAdd = (add) => {
      setFilmAdd(add);
   }

   return (
      <View>
         <FilmAdd
            visibleModal={visibleModal}
            setVisibleModal={setVisibleModal}
            onSetFilmAdd={onSetFilmAdd}
            setVisibleModalOption={setVisibleModalOption}
         />
         <FilmAddOption
            visibleModal={visibleModalOption}
            setVisibleModalOption={setVisibleModalOption}
         />
      </View>
   )
}


// isVisible={visibleModal}
//          style={styles.modal}
//          swipeDirection='up'
//          onSwipeComplete={() => setVisibleModal()}



const styles = StyleSheet.create({
   wrapper: {
      backgroundColor: THEME.BACKGROUND_COLOR,
      maxWidth: 350,
      borderRadius: 20,
      paddingVertical: 30,
      paddingHorizontal: 20
   },

   modal: {
      alignItems: 'center',
   }

})