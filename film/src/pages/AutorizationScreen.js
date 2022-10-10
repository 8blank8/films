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
   const [isReg, setIsReg] = useState(false);

   const activeSignIn = () => {
      setIsSignIn(true);
      setIsReg(false);
   }

   const activeReg = () => {
      setIsSignIn(false);
      setIsReg(true);
   }

   const contentModal = isSignIn ? <AutorizationForm /> : <RegistrationForm />;

   return (
      <View style={styles.wrapper}>
         <ScrollView style={{ flex: 1 }} contentContainerStyle={{ minHeight: '100%' }}>
            <View style={styles.buttons}>
               <TouchableOpacity style={styles.touchableOpacity} onPress={() => activeSignIn()}>
                  <Button active={isSignIn} >Вход</Button>
               </TouchableOpacity>
               <TouchableOpacity style={styles.touchableOpacity} onPress={() => activeReg()}>
                  <Button active={isReg}>Регистрация</Button>
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
