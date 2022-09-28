/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { View, StyleSheet, Text } from 'react-native';
import { THEME } from '../theme/theme';

export const Button = (props) => {
   return (
      <View style={{ ...styles.wrapper, ...props.style }}>
         <Text style={{ ...styles.text, ...props.styleText }}>{props.children}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      borderWidth: 2,
      borderColor: THEME.MAIN_COLOR,
      borderRadius: 20,
      maxWidth: 165,
      height: 40,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
   },

   text: {
      fontSize: 16,
      color: '#FFF'
   }

})