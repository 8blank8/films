/* eslint-disable prettier/prettier */
import { View, StyleSheet } from 'react-native';
import { THEME } from '../theme/theme';
import { BoxShadow } from 'react-native-shadow';



export const FormAutorization = (props) => {

   const shadowOpt = {
      width: props.width,
      height: props.height,
      color: THEME.MAIN_COLOR,
      border: props.border,
      radius: props.radius,
      opacity: 1,
      x: 0,
      y: 0,

      style: {
         alignItems: 'center',
      }
   }

   return (
      <View style={styles.wrapper}>
         <BoxShadow setting={shadowOpt}>
            <View style={{ ...styles.content, ...props.style }}>
               {props.children}
            </View>
         </BoxShadow>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      alignItems: 'center',
      paddingTop: 50
   },
   content: {
      backgroundColor: 'rgba(32, 32, 32, 0.6)',
      width: '100%',
      maxWidth: 350,
      minHeight: 369,
      borderRadius: 20,
   }
})