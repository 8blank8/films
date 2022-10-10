/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { THEME } from '../theme/theme';

export const ModalSelect = ({ setVisibleModal, visibleModal, content }) => {
   return (
      <Modal isVisible={visibleModal}
         swipeDirection='down'
         onSwipeComplete={() => setVisibleModal(false)}>
         <View style={styles.modalSelect}>
            {content}
         </View>
      </Modal>
   )
}

const styles = StyleSheet.create({
   modalSelect: {
      backgroundColor: THEME.BACKGROUND_COLOR,
      maxWidth: 350,
      width: '100%',
      borderRadius: 20,
      paddingVertical: 20
   }
})