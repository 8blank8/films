/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import { Button } from '../../ui/Button';
import { ButtonsModal } from '../../ui/ButtonsModal';

export const SortButtons = () => {

   const [sort, setSort] = useState('Рейтингу');

   const sortArr = ['Рейтингу', 'Дате', 'Алфавиту'];

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
            setActiveButtonSort(sort);
         }}>
            <Button active={sort === item ? true : false} style={styles.buttonModal}>{item}</Button>
         </TouchableOpacity>
      )
   })

   return (
      <ButtonsModal>
         {contentButtonSort}
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