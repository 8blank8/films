/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import IconFilter from 'react-native-vector-icons/FontAwesome';
import { THEME } from '../theme/theme';
import { TextBold } from '../ui/Text';


export const HeaderPage = ({ toggleModal, filters, text, activeFilter }) => {
   return (
      <View style={styles.wrapperTitle}>
         <TextBold style={styles.title}>{text}</TextBold>
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
      fontSize: 26
   },
})