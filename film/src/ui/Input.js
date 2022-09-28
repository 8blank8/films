/* eslint-disable prettier/prettier */
import { TextInput, StyleSheet } from "react-native";
import { THEME } from "../theme/theme";

export const Input = (props) => {
   return (
      <TextInput placeholderTextColor={'rgba(255, 255, 255, 0.2)'} placeholder={props.placeholder} style={{ ...styles.input, ...props.style }} />
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
      paddingLeft: 30,
   }
})