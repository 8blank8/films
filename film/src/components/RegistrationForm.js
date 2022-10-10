/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { THEME } from "../theme/theme";


export const RegistrationForm = () => {

   const [continues, setContinues] = useState(false);

   const onPressContinue = () => {
      setContinues(true);
   }

   return (
      <View>
         {continues ? <TwoModal /> : <OneModal onPressContinue={onPressContinue} />}
      </View>
   )
}

const OneModal = ({ onPressContinue }) => {

   return (
      <View style={styles.wrapper}>
         <Text style={styles.titleForm}>Введите имя и фамилию</Text>
         <Input placeholder='Имя' />
         <Input placeholder='Фамилия' style={styles.input} />
         <TouchableOpacity style={styles.touchebleOpacity} onPress={onPressContinue} >
            <Button style={styles.button}>Далее</Button>
         </TouchableOpacity>
      </View>
   )
}

const TwoModal = () => {
   return (
      <View style={styles.wrapper}>
         <Text style={styles.titleForm}>Введите email и пароль</Text>
         <Input placeholder='Email' />
         <Input placeholder='••••••••' style={styles.input} />
         <Text style={{ ...styles.titleForm, paddingTop: 40, paddingBottom: 10 }}>Подтвердите пароль</Text>
         <Input placeholder='••••••••' style={styles.input} />
         <Button style={styles.button}>Зарегистрироваться</Button>
      </View>
   )
}

const styles = StyleSheet.create({

   wrapper: {
      width: '100%',
      alignItems: 'center'
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
      marginTop: 40,
      borderWidth: 0
   },

   touchebleOpacity: {
      flexDirection: "row",
      flex: 1,
   }
})