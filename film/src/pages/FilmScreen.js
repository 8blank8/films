/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import arrowImage from '../assets/arrow.png';
import filmImage from '../assets/filmImage.png';
import trillerImage from '../assets/triller.png';
import actorImage from '../assets/actor.png';
import similarImage from '../assets/similar.png';

import { Button } from '../ui/Button';
import { THEME } from '../theme/theme';

export const FilmScreen = ({ navigation }) => {
   return (
      <View style={styles.wrapper}>
         <ScrollView>
            <View style={styles.buttonTop}>
               <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image source={arrowImage} />
               </TouchableOpacity>
               <TouchableOpacity>
                  <Text style={styles.textAdd}>Добавить в моё</Text>
               </TouchableOpacity>
            </View>
            <Image source={filmImage} style={styles.filmImage} />
            <View style={styles.titleWrapper}>
               <Text style={styles.titleText}>Дом дракона</Text>
               <Text style={styles.titleText}>8.4</Text>
            </View>
            <View style={styles.genreWrapper}>
               <Text style={styles.textGenre}>фэнтези, боевик, драма, мелодрама</Text>
               <Text style={styles.textGenre}>2022</Text>
            </View>
            <View style={styles.descriptionWrapper}>
               <Text style={styles.textDesc}>
                  Члены дома Таргариенов оставляют обреченную Валирию и отправляются на ...
               </Text>
               <TouchableOpacity>
                  <Text style={styles.descOption}>развернуть описание</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.wrapperTriller}>
               <Image style={styles.trillerImage} source={trillerImage} />
               <TouchableOpacity style={styles.trillerButtonWrapper}>
                  <Button style={styles.trillerButton}>Трейлер</Button>
               </TouchableOpacity>
            </View>
            <View style={styles.wrapperItems}>
               <Text style={styles.title}>Актерский состав</Text>
               <View style={styles.wraperItem}>
                  <View style={styles.actorItem}>
                     <Image style={styles.actorImage} source={actorImage} />
                     <Text style={styles.actorName}>Пэдди Консидайн</Text>
                  </View>
                  <View style={styles.actorItem}>
                     <Image style={styles.actorImage} source={actorImage} />
                     <Text style={styles.actorName}>Пэдди Консидайн</Text>
                  </View>
                  <View style={styles.actorItem}>
                     <Image style={styles.actorImage} source={actorImage} />
                     <Text style={styles.actorName}>Пэдди Консидайн</Text>
                  </View>
                  <View style={styles.actorItem}>
                     <Image style={styles.actorImage} source={actorImage} />
                     <Text style={styles.actorName}>Пэдди Консидайн</Text>
                  </View>
                  <View style={styles.actorItem}>
                     <Image style={styles.actorImage} source={actorImage} />
                     <Text style={styles.actorName}>Пэдди Консидайн</Text>
                  </View>
               </View>
               <TouchableOpacity >
                  <Text style={styles.actorButton}>смотреть всех </Text>
               </TouchableOpacity>
            </View>
            <View style={styles.wrapperItems}>
               <Text style={styles.title}>Похожее</Text>
               <View style={styles.wraperItem}>
                  <View style={styles.wrapperSimilarItem}>
                     <Image style={styles.similarImage} source={similarImage} />
                     <Text style={styles.similarTitle}>Рик и морти</Text>
                     <Text style={styles.similarGenre}>комедия</Text>
                  </View>
                  <View style={styles.wrapperSimilarItem}>
                     <Image style={styles.similarImage} source={similarImage} />
                     <Text style={styles.similarTitle}>Рик и морти</Text>
                     <Text style={styles.similarGenre}>комедия</Text>
                  </View>
                  <View style={styles.wrapperSimilarItem}>
                     <Image style={styles.similarImage} source={similarImage} />
                     <Text style={styles.similarTitle}>Рик и морти</Text>
                     <Text style={styles.similarGenre}>комедия</Text>
                  </View>
                  <View style={styles.wrapperSimilarItem}>
                     <Image style={styles.similarImage} source={similarImage} />
                     <Text style={styles.similarTitle}>Рик и морти</Text>
                     <Text style={styles.similarGenre}>комедия</Text>
                  </View>
                  <View style={styles.wrapperSimilarItem}>
                     <Image style={styles.similarImage} source={similarImage} />
                     <Text style={styles.similarTitle}>Рик и морти</Text>
                     <Text style={styles.similarGenre}>комедия</Text>
                  </View>
                  <View style={styles.wrapperSimilarItem}>
                     <Image style={styles.similarImage} source={similarImage} />
                     <Text style={styles.similarTitle}>Рик и морти</Text>
                     <Text style={styles.similarGenre}>комедия</Text>
                  </View>
               </View>
            </View>
         </ScrollView>
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

   textAdd: {
      color: '#FFF',
      fontSize: 16
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
      color: 'rgba(255, 255, 255, 0.5)'
   },

   descriptionWrapper: {
      paddingHorizontal: 20,
      paddingTop: 30
   },

   textDesc: {
      color: '#fff',
      fontSize: 16
   },

   descOption: {
      paddingTop: 5,
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: 13
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

   trillerButton: {
      backgroundColor: THEME.MAIN_COLOR,
      borderWidth: 0,
      maxWidth: 100
   },

   wrapperItems: {
      paddingHorizontal: 20,
      marginTop: 30
   },

   title: {
      color: '#fff',
      fontSize: 16
   },

   wraperItem: {
      paddingTop: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
   },

   actorItem: {
      flexDirection: 'row',
      maxWidth: 165,
      width: '100%',
      marginBottom: 10,
      borderRadius: 20
   },

   actorName: {
      color: '#fff',
      maxWidth: 95,
      marginTop: 20,
      marginLeft: 10
   },

   actorButton: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: 13
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
   }



})