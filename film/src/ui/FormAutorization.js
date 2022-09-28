/* eslint-disable prettier/prettier */
import { View, StyleSheet } from 'react-native';
import { THEME } from '../theme/theme';
import { BoxShadow } from 'react-native-shadow';



export const FormAutorization = (props) => {

   const shadowOpt = {
      width: 350,
      height: 369,
      color: THEME.MAIN_COLOR,
      border: 170,
      radius: 100,
      opacity: 1,
      x: 0,
      y: 0,

      style: {
         alignItems: 'center',
      }
   }

   return (
      <View style={{ ...styles.wrapper, ...props.style }}>
         <BoxShadow setting={shadowOpt}>
            <View style={styles.content}>
               {props.children}
            </View>
         </BoxShadow>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      alignItems: 'center'
   },
   content: {
      backgroundColor: 'rgba(32, 32, 32, 0.6)',
      width: '100%',
      maxWidth: 350,
      minHeight: 369,
      borderRadius: 20,
      paddingBottom: 50
   }
})