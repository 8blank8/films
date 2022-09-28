/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { THEME } from '../theme/theme';
import { Button } from '../ui/Button';
import { FormAutorization } from '../ui/FormAutorization';
import { AutorizationForm } from '../components/AutorizationForm';
import { RegistrationForm } from '../components/RegistrationForm';


export const AutorizationScreen = () => {

   return (
      <View style={styles.wrapper}>
         <ScrollView style={{ flex: 1 }} contentContainerStyle={{ minHeight: '100%' }}>
            <View style={styles.buttons}>
               <Button >Вход</Button>
               <Button >Регистрация</Button>
            </View>
            <View>
               <Text style={styles.title}>Войдите в аккаунт</Text>
            </View>
            <FormAutorization style={{ paddingTop: 50 }}>
               <AutorizationForm />
               {/* <RegistrationForm /> */}
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
   },

   title: {
      fontSize: 20,
      color: 'rgba(255, 255, 255, 0.2)',
      textAlign: 'center',
      paddingTop: 60,
      zIndex: 10
   },

});
