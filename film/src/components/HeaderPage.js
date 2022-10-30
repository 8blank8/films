/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import IconFilter from 'react-native-vector-icons/FontAwesome';
import { THEME } from '../theme/theme';


export const HeaderPage = ({ toggleModal, filters, text, activeFilter }) => {
   return (
      <View style={styles.wrapperTitle}>
         <Text style={styles.title}>{text}</Text>
         {filters && <TouchableOpacity onPress={toggleModal}>
            <IconFilter name='sliders' size={30} color={!activeFilter ? 'rgba(255, 255, 255, 0.3)' : THEME.MAIN_COLOR} />
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