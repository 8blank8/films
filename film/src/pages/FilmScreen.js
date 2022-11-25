/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useState } from 'react';

import { ModalAddFilm } from '../components/FIlmPage/Modal/ModalAddFilm';
import { FilmList } from '../ui/FilmList';
import { FilmItem } from '../components/FilmItem';
import { ActorItem } from '../components/ActorItem';

import arrowImage from '../assets/arrow.png';
import filmImage from '../assets/filmImage.png';
import trillerImage from '../assets/triller.png';

import { Button } from '../ui/Button';
import { TextSemiBold, TextMedium, TextRegular } from '../ui/Text';
import { THEME } from '../theme/theme';
import { OrientationLocker, PORTRAIT } from 'react-native-orientation-locker';

export const FilmScreen = ({ navigation }) => {

   const [visibleModal, setVisibleModal] = useState(false);

   return (
      <View style={styles.wrapper}>
         <OrientationLocker orientation={PORTRAIT} />
         <ScrollView>
            <View style={styles.buttonTop}>
               <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image source={arrowImage} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => setVisibleModal(true)}>
                  <TextSemiBold>Добавить в моё</TextSemiBold>
               </TouchableOpacity>
            </View>
            <Image source={filmImage} style={styles.filmImage} />
            <View style={styles.titleWrapper}>
               <TextSemiBold style={styles.titleText}>Дом дракона</TextSemiBold>
               <TextSemiBold style={styles.titleText}>8.4</TextSemiBold>
            </View>
            <View style={styles.genreWrapper}>
               <TextMedium style={styles.textGenre}>фэнтези, боевик, драма, мелодрама</TextMedium>
               <TextMedium style={styles.textGenre}>2022</TextMedium>
            </View>
            <View style={styles.descriptionWrapper}>
               <TextRegular>
                  Члены дома Таргариенов оставляют обреченную Валирию и отправляются на ...
               </TextRegular>
               <TouchableOpacity>
                  <TextRegular style={styles.descOption}>развернуть описание</TextRegular>
               </TouchableOpacity>
            </View>
            <View style={styles.wrapperTriller}>
               <Image style={styles.trillerImage} source={trillerImage} />
               <TouchableOpacity style={styles.trillerButtonWrapper}>
                  <Button style={styles.trillerButton}>
                     <TextRegular style={styles.textTrailer}>Трейлер</TextRegular>
                  </Button>
               </TouchableOpacity>
               <TouchableOpacity style={styles.trillerButtonWrapperTwo}
                  onPress={() => navigation.navigate('video')}>
                  <Button style={styles.trillerButton}>
                     <TextRegular style={styles.textTrailer}>Смотреть</TextRegular>
                  </Button>
               </TouchableOpacity>
            </View>
            <View style={styles.wrapperItems}>
               <TextRegular>Актерский состав</TextRegular>
               <View style={styles.wraperItem}>
                  <ActorItem />
                  <ActorItem />
                  <ActorItem />
                  <ActorItem />
                  <ActorItem />
                  <ActorItem />
               </View>
               <TouchableOpacity >
                  <TextRegular style={styles.actorButton}>смотреть всех </TextRegular>
               </TouchableOpacity>
            </View>
            <View style={styles.wrapperItems}>
               <TextRegular>Похожее</TextRegular>
               <FilmList>
                  <FilmItem />
                  <FilmItem />
                  <FilmItem />
                  <FilmItem />
                  <FilmItem />
               </FilmList>
            </View>
         </ScrollView>
         <ModalAddFilm visibleModal={visibleModal} setVisibleModal={setVisibleModal} />
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      backgroundColor: THEME.BACKGROUND_COLOR,
      flexDirection: 'column',
      flex: 1,
   },

   buttonTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 30,
      paddingHorizontal: 20,
      position: 'absolute',
      top: 0,
      zIndex: 10,
      width: '100%'
   },

   filmImage: {
      width: '100%',
      height: 510
   },

   titleWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginTop: -16
   },

   titleText: {
      color: THEME.MAIN_COLOR,
      fontSize: 26
   },

   genreWrapper: {
      paddingHorizontal: 20,
      paddingTop: 5
   },

   textGenre: {
      opacity: 0.5,
      fontSize: 14
   },

   descriptionWrapper: {
      paddingHorizontal: 20,
      paddingTop: 30
   },

   descOption: {
      paddingTop: 5,
      fontSize: 13,
      opacity: 0.5
   },

   wrapperTriller: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30
   },

   trillerImage: {
      maxWidth: 350,
      width: '100%'
   },

   trillerButtonWrapper: {
      position: 'absolute',
      bottom: 10,
      left: 30,
      width: '100%',
   },

   trillerButtonWrapperTwo: {
      position: 'absolute',
      bottom: 10,
      left: 260,
      width: '100%',
   },

   trillerButton: {
      backgroundColor: THEME.MAIN_COLOR,
      borderWidth: 0,
      maxWidth: 100
   },

   wrapperItems: {
      paddingHorizontal: 20,
      marginTop: 30
   },

   wraperItem: {
      paddingTop: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
   },

   wrapperSimilarItem: {
      borderRadius: 20,
      marginBottom: 20,
      maxWidth: 165,
      width: '100%'
   },

   similarImage: {
      maxHeight: 216,
      maxWidth: 165,
      width: '100%'
   },

   similarTitle: {
      color: '#FFF',
      fontSize: 16,
      paddingTop: 5
   },

   similarGenre: {
      color: 'rgba(255, 255, 255, 0.5)'
   },

   textTrailer: {
      fontSize: 14
   }



})