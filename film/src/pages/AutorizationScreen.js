/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import { THEME } from '../theme/theme';
import { Button } from '../ui/Button';
import { FormAutorization } from '../ui/FormAutorization';
import { Input } from '../ui/Input';


export const AutorizationScreen = () => {

   return (
      <View style={styles.wrapper}>
         <View style={styles.buttons}>
            <Button>Вход</Button>
            <Button>Регистрация</Button>
         </View>
         <View>
            <Text style={styles.title}>Войдите в аккаунт</Text>
         </View>
         <FormAutorization styles={styles.formStyle} style={{ paddingTop: 50 }}>
            <Text style={styles.titleForm}>Введите email и пароль</Text>
            <Input placeholder='Email' />
            <Input placeholder='••••••••' style={styles.input} />
            <Button style={styles.button}>Войти в аккаунт</Button>
         </FormAutorization>
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
   },

   title: {
      fontSize: 20,
      color: 'rgba(255, 255, 255, 0.2)',
      textAlign: 'center',
      paddingTop: 60,
      zIndex: 10
   },

   titleForm: {
      color: '#fff',
      fontSize: 18,
      paddingTop: 50,
      paddingBottom: 30
   },

   formStyle: {
      alignItems: 'center'
   },

   input: {
      marginTop: 20
   },

   button: {
      backgroundColor: THEME.MAIN_COLOR,
      maxWidth: 310,
      height: 60,
      marginTop: 40
   }
});
