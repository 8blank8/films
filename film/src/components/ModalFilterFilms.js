/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Modal from 'react-native-modal';

import { Button } from "../ui/Button";
import { TextMedium, TextSemiBold } from "../ui/Text";

import { THEME } from "../theme/theme";
import { useState } from "react";

import { Slider } from './Slider/Slider';
import { HeaderPage } from "./HeaderPage";
import { CategoryButtons } from "./Filters/CategoryButton";
import { SelectedButtons } from "./Filters/SelectedButtons";
import { SortButtons } from "./Filters/SortButtons";

export const ModalFilterFilms = ({ visibleModal, toggleModal, isMyFilms }) => {

   const [year, setYear] = useState('любые');

   // получение текущего года для фильтра по годам

   const dateYear = new Date().getFullYear();

   return (
      <Modal
         isVisible={visibleModal}
         backdropOpacity={0}
         style={styles.modal}
         animationIn='slideInDown'
         animationOut='slideOutUp'
         animationInTiming={500}
         animationOutTiming={500}
      >
         <HeaderPage toggleModal={toggleModal} activeFilter filters={true} text={!isMyFilms ? 'Фильмы' : 'Моё'} />
         <View style={styles.wrapperModal}>
            <ScrollView showsVerticalScrollIndicator={false}>
               <CategoryButtons />
               <SelectedButtons />
               <View>
                  <Slider minNum={1970} maxNum={dateYear} text='Года' />
               </View>
               <View>
                  <Slider minNum={1} maxNum={8} text='Рейтинг' />
               </View>
               <View>
                  <TextMedium style={styles.text}>Сортировать по</TextMedium>
                  <SortButtons />
               </View>
               {isMyFilms &&
                  <View style={styles.wrapperUserFilter}>
                     <TextSemiBold style={styles.textTitle}>Сортировка по пользвательским настройкам</TextSemiBold>
                     <CategoryButtons />
                     <SelectedButtons />
                     <View>
                        <Slider minNum={1} maxNum={8} text='Рейтинг' />
                     </View>
                     <View>
                        <TextMedium style={styles.text}>Сортировать по</TextMedium>
                        <SortButtons />
                     </View>
                  </View>}
               <View style={styles.buttonSelectedWrapper}>
                  <TouchableOpacity style={styles.touchebleOpacity}>
                     <Button style={styles.buttonSelected}>
                        <TextMedium>Применить фильтры</TextMedium>
                     </Button>
                  </TouchableOpacity>
               </View>
            </ScrollView>
         </View>
      </Modal >
   )
}




const styles = StyleSheet.create({
   modal: {
      backgroundColor: THEME.BACKGROUND_COLOR,
      width: '100%',
      // height: Dimensions.get('window').height,
      marginVertical: 0,
      marginHorizontal: 0,
      paddingHorizontal: 20,
      marginBottom: 0
   },

   wrapperModal: {
      flexDirection: 'column',
      flex: 1,
   },

   text: {
      marginBottom: 15,
      marginTop: 20
   },

   buttonSelectedWrapper: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      marginVertical: 40
   },

   buttonSelected: {
      borderWidth: 0,
      backgroundColor: THEME.MAIN_COLOR,
      maxWidth: 214,
      height: 60,
   },

   touchebleOpacity: {
      width: 214,
   },

   wrapperUserFilter: {
      paddingTop: 50
   },

   textTitle: {
      fontSize: 14,
      paddingBottom: 40
   },
})