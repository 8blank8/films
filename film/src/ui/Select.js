/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';

export const Select = (props) => {
   return (
      <View style={{ ...styles.wrapper, ...props.style }}>
         <View style={styles.line}></View>
         <View style={styles.wrapperText}>
            <Text style={styles.textTitle}>{props.title}</Text>
            <Text style={styles.text}>{props.text}</Text>
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

   textTitle: {
      fontSize: 16,
      color: '#FFF'
   },

   text: {
      fontSize: 16,
      color: 'rgba(255, 255, 255, 0.5)'
   }
})