/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { THEME } from '../theme/theme';
import account from '../assets/account.png';
import { FormAutorization } from '../ui/FormAutorization';
import { Button } from '../ui/Button';
import { HeaderPage } from '../components/HeaderPage';
import { TextMedium, TextSemiBold, TextRegular } from '../ui/Text';

export const Profile = () => {
   return (
      <View style={styles.wrapper}>
         <View style={styles.wrapperHeader}>
            <HeaderPage text='Профиль' />
         </View>
         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.wrapperColumn}>
               <Image style={styles.image} resizeMode='stretch' source={account} />
               <TouchableOpacity>
                  <TextMedium style={styles.addImage}>Добавить новое фото</TextMedium>
               </TouchableOpacity>
               <TextSemiBold style={styles.textFullname}>Селиванова Анастасия</TextSemiBold>
               <TextRegular style={styles.email}>echelontwoles@mail.ru</TextRegular>
            </View>
            <FormAutorization style={styles.info} width={350} height={293} border={20} radius={20}>
               <View style={styles.infoColumn}>
                  <TextSemiBold style={styles.infoNumber}>24</TextSemiBold>
                  <TextRegular style={styles.infoText}>фильмов просмотрено</TextRegular>
               </View>
               <View style={styles.infoColumnTwo}>
                  <TextSemiBold style={styles.infoNumber}>126</TextSemiBold>
                  <TextRegular style={styles.infoText}>фильмов посмотреть</TextRegular>
               </View>
            </FormAutorization>
            <TouchableOpacity>
               <Button style={styles.button}>
                  <TextRegular>Выйти из аккаунта</TextRegular>
               </Button>
            </TouchableOpacity>
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

   wrapperHeader: {
      paddingTop: THEME.WRAPPER_PADDING_TOP,
      paddingHorizontal: THEME.WRAPPER_PADDING_HORIZONTAL
   },

   titleProfile: {
      color: '#fff',
      fontSize: 26,
   },

   wrapperColumn: {
      alignItems: 'center',
      paddingTop: 50
   },

   image: {
      borderWidth: 2,
      borderColor: THEME.MAIN_COLOR,
      borderRadius: 50,
      width: 100,
      height: 100,
   },

   addImage: {
      paddingTop: 10,
      fontSize: 14
   },

   textFullname: {
      fontSize: 18,
      paddingTop: 30,
      color: THEME.MAIN_COLOR,
   },

   email: {
      opacity: 0.5,
      paddingTop: 10,
      fontSize: 14
   },

   info: {
      minHeight: 293,
      maxWidth: 350,
      backgroundColor: 'rgba(32, 32, 32, 1)',
      marginHorizontal: 20,
   },

   infoNumber: {
      fontSize: 50,
      color: THEME.MAIN_COLOR
   },

   infoText: {
      fontSize: 16,
   },

   infoColumn: {
      alignItems: 'center',
      paddingTop: 43
   },

   infoColumnTwo: {
      alignItems: 'center',
      paddingTop: 30
   },
   button: {
      maxWidth: 263,
      alignSelf: 'center',
      marginTop: 50,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
      marginBottom: 30
   }

})