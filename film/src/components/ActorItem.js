/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Image } from 'react-native';
import { TextRegular } from '../ui/Text';

import actorImage from '../assets/actor.png';


export const ActorItem = (props) => {
   return (
      <View style={styles.actorItem}>
         <Image style={styles.actorImage} source={actorImage} />
         <TextRegular style={styles.actorName}>Пэдди Консидайн</TextRegular>
      </View>
   )
}

const styles = StyleSheet.create({
   actorItem: {
      flexDirection: 'row',
      width: '42.3%',
      marginBottom: 10,
      borderRadius: 20
   },

   actorName: {
      maxWidth: 95,
      marginTop: 20,
      marginLeft: 10,
      fontSize: 14
   },

   actorButton: {
      fontSize: 13,
      opacity: 0.5
   },
})