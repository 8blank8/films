/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import { TextMedium } from './Text';

export const Select = (props) => {

   const text = props.text.map((item, i) => {
      if (props.text.length !== i + 1) {
         return `${item}, `;
      } else {
         return item;
      }
   })

   return (
      <View style={{ ...styles.wrapper, ...props.style }}>
         <View style={styles.line}></View>
         <View style={styles.wrapperText}>
            <TextMedium>{props.title}</TextMedium>
            <TextMedium style={styles.text}>{text}</TextMedium>
         </View>
         <View style={styles.line}></View>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      maxWidth: 350
   },

   line: {
      height: 1,
      maxWidth: 350,
      width: '100%',
      backgroundColor: 'rgba(255, 255,255, 0.2)'
   },

   wrapperText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10
   },


   text: {
      opacity: 0.5
   }
})