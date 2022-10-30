/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { useState } from 'react';
import { THEME } from '../../theme/theme';

export const Slider = ({ text, minNum, maxNum }) => {

   const [minValue, setMinValue] = useState(minNum);
   const [maxValue, setMaxValue] = useState(maxNum);

   return (
      <View style={styles.wrapper}>
         <View style={styles.wrapperText}>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.textSelect}>от {minValue} до {maxValue}</Text>
         </View>
         <MultiSlider
            min={minNum}
            max={maxNum}
            step={1}
            sliderLength={Dimensions.get('window').width - 45}
            values={[minNum, maxNum]}
            trackStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            selectedStyle={{ backgroundColor: THEME.MAIN_COLOR }}
            markerStyle={{ backgroundColor: THEME.MAIN_COLOR }}
            onValuesChange={(values) => {
               setMinValue(values[0]);
               setMaxValue(values[1]);
            }} />
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      paddingTop: 40
   },

   wrapperText: {
      flexDirection: 'row',
      justifyContent: 'space-between'
   },

   text: {
      color: '#fff',
      fontSize: 16
   },

   textSelect: {
      color: 'rgba(255, 255, 255, 0.5)'
   }
})
