/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { FilmItem } from '../components/FilmItem';
import { ModalFilterFilms } from '../components/ModalFilterFilms';
import filterImage from '../assets/filters.png';
import { THEME } from '../theme/theme';
import { useState } from 'react';

export const Films = () => {

   const [visibleModal, setVisibleModal] = useState(false);

   const toggleModal = (value) => {
      setVisibleModal(value);
   }

   return (
      <View style={styles.wrapper}>
         <View style={styles.wrapperTitle}>
            <Text style={styles.title}>Фильмы</Text>
            <TouchableOpacity onPress={toggleModal}>
               <Image source={filterImage} />
            </TouchableOpacity>
         </View>
         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.filmsTodo}>
               <FilmItem />
               <FilmItem />
               <FilmItem />
               <FilmItem />
               <FilmItem />
               <FilmItem />
               <FilmItem />
            </View>
         </ScrollView>
         <ModalFilterFilms visibleModal={visibleModal} toggleModal={toggleModal} />
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      backgroundColor: THEME.BACKGROUND_COLOR,
      flexDirection: 'column',
      flex: 1,
      paddingTop: 20,
      paddingHorizontal: 20
   },

   wrapperTitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 20
   },

   title: {
      color: '#FFF',
      fontSize: 26
   },

   filmsTodo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: 20
   },


})