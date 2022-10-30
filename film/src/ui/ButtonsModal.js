/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet } from 'react-native';

export const ButtonsModal = (props) => {
   return (
      <View style={styles.buttonsModal}>
         {props.children}
      </View>
   )
}

const styles = StyleSheet.create({
   buttonsModal: {
      flexDirection: 'row',
      justifyContent: 'space-between'
   }
})