/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { StyleSheet, View, Dimensions, StatusBar } from "react-native";
import VideoPlayer from "react-native-video-controls";
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";
import Modal from 'react-native-modal';
import { useEffect } from "react";

export const VideoPlay = ({ visible, setVisible }) => {

   useEffect(() => {
      StatusBar.setHidden(true);
   })

   return (
      <Modal
         isVisible={visible}
         style={styles.modal}
      >
         <OrientationLocker
            orientation={visible ? LANDSCAPE : PORTRAIT}
         />
         <View style={styles.video}>
            <VideoPlayer
               source={{
                  uri: 'https://dl5.vibio.tv/53052552da886fc240dec7ce7f8fe2a0/2940/2940858/output.lq.mp4'
               }}
               disableVolume
            // toggleResizeModeOnFullscreen={false}
            />
         </View>
      </Modal>
   )

}

const styles = StyleSheet.create({
   video: {
      width: '100%',
      height: '100%',
      zIndex: 10
   },
   modal: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      marginVertical: 0,
      marginHorizontal: 0
   }
})