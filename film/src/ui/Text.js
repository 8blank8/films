/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Text, StyleSheet, View } from "react-native";

export const TextMedium = (props) => {
   return (
      <Text style={{ ...styles.text, fontFamily: 'Outfit-Medium', ...props.style }}>{props.children}</Text>
   )
}


export const TextRegular = (props) => {
   return (
      <Text style={{ ...styles.text, fontFamily: 'Outfit-Regular', ...props.style }}>{props.children}</Text>
   )
}

export const TextBold = (props) => {
   return (
      <Text style={{ ...styles.text, fontFamily: 'Outfit-Bold', ...props.style }}>{props.children}</Text>
   )
}

export const TextSemiBold = (props) => {
   return (
      <Text style={{ ...styles.text, fontFamily: 'Outfit-SemiBold', ...props.style }}>{props.children}</Text>
   )
}


const styles = StyleSheet.create({
   text: {
      fontSize: 16,
      color: '#fff'
   }
})

