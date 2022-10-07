/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { THEME } from '../theme/theme';
import { Button } from '../ui/Button';
import { FormAutorization } from '../ui/FormAutorization';
import { AutorizationForm } from '../components/AutorizationForm';
import { RegistrationForm } from '../components/RegistrationForm';
import { useState } from 'react';


export const AutorizationScreen = () => {

   const [isSignIn, setIsSignIn] = useState(true);

   const contentModal = isSignIn ? <AutorizationForm /> : <RegistrationForm />;

   const buttonSign = {
      borderWidth: isSignIn ? 2 : 1,
      borderColor: isSignIn ? 'rgba(74, 21, 99, 1)' : 'rgba(255, 255, 255, 0.2)'
   }

   const buttonReg = {
      borderWidth: !isSignIn ? 2 : 1,
      borderColor: !isSignIn ? 'rgba(74, 21, 99, 1)' : 'rgba(255, 255, 255, 0.2)'
   }

   return (
      <View style={styles.wrapper}>
         <ScrollView style={{ flex: 1 }} contentContainerStyle={{ minHeight: '100%' }}>
            <View style={styles.buttons}>
               <TouchableOpacity style={styles.touchableOpacity} onPress={() => setIsSignIn(true)}>
                  <Button style={buttonSign} >Вход</Button>
               </TouchableOpacity>
               <TouchableOpacity style={styles.touchableOpacity} onPress={() => setIsSignIn(false)}>
                  <Button style={buttonReg}>Регистрация</Button>
               </TouchableOpacity>
            </View>
            <View>
               <Text style={styles.title}>Войдите в аккаунт</Text>
            </View>
            <FormAutorization style={{ paddingBottom: 50 }} width={350} height={369} border={170} radius={100}>
               {contentModal}
            </FormAutorization>
         </ScrollView>
      </View>
   );
};

const styles = StyleSheet.create({
   wrapper: {
      backgroundColor: THEME.BACKGROUND_COLOR,
      height: '100%',
   },
   buttons: {

      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 40,
      paddingHorizontal: 20,
      zIndex: 10
   },

   title: {
      fontSize: 20,
      color: 'rgba(255, 255, 255, 0.2)',
      textAlign: 'center',
      paddingTop: 60,
      zIndex: 10
   },

   touchableOpacity: {
      maxWidth: 165,
      flex: 1
   }
});
