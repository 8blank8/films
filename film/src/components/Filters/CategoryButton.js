/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import { Button } from '../../ui/Button';
import { ButtonsModal } from '../../ui/ButtonsModal';

export const CategoryButtons = ({ style }) => {

   const [category, setCategory] = useState('Все');

   const categoryArr = ['Все', 'Фильмы', 'Сериалы'];

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
         <TouchableOpacity key={i} style={{ ...styles.button, ...style }} onPress={() => {
            setCategory(item);
            setAtiveButton(category);
         }}>
            <Button active={category === item ? true : false} style={styles.buttonModal}>{item}</Button>
         </TouchableOpacity>
      )
   })

   return (
      <ButtonsModal>
         {contentButtonCategory}
      </ButtonsModal>
   )
}

const styles = StyleSheet.create({
   buttonModal: {
      maxWidth: 103
   },
   button: {
      width: '100%',
      maxWidth: 103
   }
})