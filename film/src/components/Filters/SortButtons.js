/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import { Button } from '../../ui/Button';
import { ButtonsModal } from '../../ui/ButtonsModal';
import { TextRegular } from '../../ui/Text';

export const SortButtons = () => {

   const [sort, setSort] = useState('Рейтингу');

   const sortArr = ['Рейтингу', 'Дате', 'Алфавиту'];

   const contentButtonSort = sortArr.map((item, i) => {
      return (
         <TouchableOpacity key={i} style={styles.button} onPress={() => setSort(item)}>
            <Button active={sort === item ? true : false} style={styles.buttonModal}>
               <TextRegular style={styles.text}>{item}</TextRegular>
            </Button>
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
   },
   text: {
      fontSize: 14
   }
})