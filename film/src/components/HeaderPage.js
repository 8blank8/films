/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import filterImage from '../assets/filters.png';


export const HeaderPage = ({ toggleModal, filters, text }) => {
   return (
      <View style={styles.wrapperTitle}>
         <Text style={styles.title}>{text}</Text>
         {filters && <TouchableOpacity onPress={toggleModal}>
            <Image source={filterImage} />
         </TouchableOpacity>}
      </View>
   )
}

const styles = StyleSheet.create({
   wrapperTitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 20
   },

   title: {
      color: '#FFF',
      fontSize: 26
   },
})