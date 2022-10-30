/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import IconSearch from 'react-native-vector-icons/AntDesign';

import { HeaderPage } from '../components/HeaderPage';
import { FilmItem } from '../components/FilmItem';

import { Input } from '../ui/Input';
import { FilmList } from '../ui/FilmList';

export const SearchScreen = () => {
   return (
      <View style={styles.wrapper}>
         <HeaderPage text='Поиск' />
         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.wrapperInput}>
               <Input style={styles.input} placeholder='поиск' />
               <IconSearch style={styles.icon} name='search1' color='rgba(255, 255, 255, 0.5)' size={20} />
            </View>
            <FilmList>
               <FilmItem />
               <FilmItem />
               <FilmItem />
               <FilmItem />
               <FilmItem />
               <FilmItem />
            </FilmList>
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      paddingHorizontal: 20,
      paddingTop: 30
   },

   input: {
      maxWidth: Dimensions.get('window').width,
      borderWidth: 2
   },

   wrapperInput: {

   },

   icon: {
      position: 'absolute',
      right: 20,
      top: 15
   }
})