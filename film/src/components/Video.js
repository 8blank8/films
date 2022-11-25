/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import Video from "react-native-video";
import { StyleSheet } from "react-native";

export const VideoPlayer = () => {

   return (
      <Video
         source={{
            uri: 'https://dl5.vibio.tv/53052552da886fc240dec7ce7f8fe2a0/2940/2940858/output.lq.mp4'
         }}
         style={styles.video}
         controls={true}
         paused
         poster={'https://img3.imgzona.video/images/film_240/7/7962.jpg'}
         repeat={true}
      />
   )

}

const styles = StyleSheet.create({
   video: {
      width: '100%',
      height: 200,
      borderWidth: 2,
      borderColor: '#fff'
   }
})