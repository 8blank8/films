/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { useState } from 'react';
import { THEME } from '../../theme/theme';
import { TextMedium } from '../../ui/Text';

export const Slider = ({ text, minNum, maxNum }) => {

   const [minValue, setMinValue] = useState(minNum);
   const [maxValue, setMaxValue] = useState(maxNum);

   return (
      <View style={styles.wrapper}>
         <View style={styles.wrapperText}>
            <TextMedium>{text}</TextMedium>
            <TextMedium style={styles.textSelect}>от {minValue} до {maxValue}</TextMedium>
         </View>
         <View style={styles.wrapperSlider}>
            <MultiSlider
               min={minNum}
               max={maxNum}
               step={1}
               sliderLength={Dimensions.get('window').width - 60}
               values={[minNum, maxNum]}
               trackStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
               selectedStyle={{ backgroundColor: THEME.MAIN_COLOR }}
               markerStyle={{ backgroundColor: THEME.MAIN_COLOR }}
               onValuesChange={(values) => {
                  setMinValue(values[0]);
                  setMaxValue(values[1]);
               }} />
         </View>
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

   textSelect: {
      opacity: 0.5
   },

   wrapperSlider: {
      alignItems: 'center'
   }
})
