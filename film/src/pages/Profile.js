/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { THEME } from '../theme/theme';
import account from '../assets/account.png';
import { FormAutorization } from '../ui/FormAutorization';
import { Button } from '../ui/Button';

export const Profile = () => {
   return (
      <View style={styles.wrapper}>
         <ScrollView>
            <Text style={styles.titleProfile}>Профиль</Text>
            <View style={styles.wrapperColumn}>
               <Image style={styles.image} resizeMode='stretch' source={account} />
               <Text style={styles.addImage}>Добавить новое фото</Text>
               <Text style={styles.textFullname}>Селиванова Анастасия</Text>
               <Text style={styles.email}>echelontwoles@mail.ru</Text>
            </View>
            <FormAutorization style={styles.info} width={350} height={293} border={20} radius={20}>
               <View style={styles.infoColumn}>
                  <Text style={styles.infoNumber}>24</Text>
                  <Text style={styles.infoText}>фильмов просмотрено</Text>
               </View>
               <View style={styles.infoColumnTwo}>
                  <Text style={styles.infoNumber}>126</Text>
                  <Text style={styles.infoText}>фильмов посмотреть</Text>
               </View>
            </FormAutorization>
            <TouchableOpacity>
               <Button style={styles.button}>Выйти из аккаунта</Button>
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

   titleProfile: {
      color: '#fff',
      fontSize: 26,
      paddingLeft: 20,
      paddingTop: 30
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
      color: '#fff',
      paddingTop: 10
   },

   textFullname: {
      fontSize: 18,
      paddingTop: 30,
      color: THEME.MAIN_COLOR,
   },

   email: {
      opacity: 0.5,
      color: '#FFF',
      paddingTop: 10
   },

   info: {
      minHeight: 293,
      maxWidth: 350,
      backgroundColor: 'rgba(32, 32, 32, 1)',
   },

   infoNumber: {
      fontSize: 50,
      color: THEME.MAIN_COLOR
   },

   infoText: {
      fontSize: 16,
      color: '#FFF'
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