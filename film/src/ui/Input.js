/* eslint-disable prettier/prettier */
import { TextInput, StyleSheet, Keyboard } from "react-native";
import { THEME } from "../theme/theme";

export const Input = (props) => {
   return (
      <TextInput
         placeholderTextColor={'rgba(255, 255, 255, 0.2)'}
         placeholder={props.placeholder}
         style={{ ...styles.input, ...props.style }}
         multiline={props.multiline ? true : false}
         numberOfLines={props.numberOfLines ? props.numberOfLines : null}
         onKeyPress={(value) => {
            if (value === 'enter') {
               Keyboard.dismiss();
            }
         }} />
   )
}

const styles = StyleSheet.create({
   input: {
      borderWidth: 1,
      borderColor: THEME.MAIN_COLOR,
      borderRadius: 20,
      maxWidth: 310,
      width: '100%',
      height: 48,
      paddingLeft: 20,
      color: THEME.TEXT_COLOR,
   }
})