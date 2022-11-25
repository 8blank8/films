/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { StyleSheet, View, Dimensions, StatusBar } from "react-native";
import VideoPlayer from "react-native-video-controls";
import { LANDSCAPE, OrientationLocker } from "react-native-orientation-locker";
import { useEffect } from "react";

export const VideoPlay = ({ navigation }) => {

   useEffect(() => {

      navigation.getParent()?.setOptions({
         tabBarStyle: {
            display: "none"
         }
      });
      return () => navigation.getParent()?.setOptions({
         tabBarStyle: undefined
      });
   }, [navigation])

   return (
      <View>
         <OrientationLocker
            orientation={LANDSCAPE}
         />
         <View style={styles.video}>
            <VideoPlayer
               source={{
                  uri: 'https://dl5.vibio.tv/53052552da886fc240dec7ce7f8fe2a0/2940/2940858/output.lq.mp4'
               }}
               disableVolume
            />
         </View>
      </View>
   )

}

const styles = StyleSheet.create({
   video: {
      width: Dimensions.get('window').height,
      height: Dimensions.get('window').width,
   },
})