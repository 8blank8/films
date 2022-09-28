/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { THEME } from "../theme/theme";


export const AutorizationForm = () => {
   return (
      <View style={{ width: '100%', alignItems: 'center' }}>
         <Text style={styles.titleForm}>Введите email и пароль</Text>
         <Input placeholder='Email' />
         <Input placeholder='••••••••' style={styles.input} />
         <Button style={styles.button}>Войти в аккаунт</Button>
      </View>
   )
}

const styles = StyleSheet.create({

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
})