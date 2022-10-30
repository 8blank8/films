/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, ScrollView } from 'react-native';

export const FilmList = (props) => {
   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.filmsTodo}>
            {props.children}
         </View>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   filmsTodo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: 20
   },
})