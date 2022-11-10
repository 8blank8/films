/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import { Button } from '../../../ui/Button';
import { THEME } from '../../../theme/theme';
import { TextRegular, TextMedium } from '../../../ui/Text';

export const FilmAdd = ({ visibleModal, setVisibleModal, onSetFilmAdd, setVisibleModalOption }) => {
   return (
      <Modal
         isVisible={visibleModal}
         swipeDirection={'down'}
         onSwipeComplete={() => setVisibleModal(false)}
         style={styles.modal}
         animationOut='slideOutUp'
         animationOutTiming={2500}
         animationInTiming={800}
      >
         <View style={styles.filmAdd}>
            <TextRegular style={styles.text}>
               Добавить “Дом дракона” в
            </TextRegular>
            <TouchableOpacity
               style={styles.wrapperButton}
               onPress={() => {
                  onSetFilmAdd('Посмотреть');
                  setVisibleModal(false);
                  setVisibleModalOption(true);
               }}>
               <Button style={styles.button}>
                  <TextMedium>Посмотреть</TextMedium>
               </Button>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.wrapperButton}
               onPress={() => {
                  onSetFilmAdd('Просмотренное');
                  setVisibleModal(false);
                  setVisibleModalOption(true);
               }}>
               <Button style={styles.button}>
                  <TextMedium>Просмотренное</TextMedium>
               </Button>
            </TouchableOpacity>
         </View>
      </Modal>
   )
}

const styles = StyleSheet.create({
   modal: {
      alignItems: 'center'
   },

   wrapperButton: {
      flexDirection: 'row'
   },

   button: {
      backgroundColor: THEME.MAIN_COLOR,
      borderWidth: 0,
      maxWidth: 208,
      height: 50,
      marginTop: 10
   },

   text: {
      paddingBottom: 10
   },

   filmAdd: {
      backgroundColor: THEME.BACKGROUND_COLOR,
      maxWidth: 350,
      borderRadius: 20,
      paddingVertical: 30,
      paddingHorizontal: 20,
      alignItems: 'center',
      width: '100%'
   },

})