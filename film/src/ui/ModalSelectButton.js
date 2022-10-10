/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';

export const ModalSelectButton = (props) => {
   return (
      <View style={styles.wrapper}>
         <Text style={styles.text}>{props.text}</Text>
         <View style={props.notLine ? { display: 'none' } : styles.line}></View>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      alignItems: 'center',
   },

   text: {
      fontSize: 16,
      color: '#fff',
      paddingVertical: 10
   },

   line: {
      maxWidth: 290,
      width: '100%',
      height: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      marginVertical: 1
   }
})