import {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {PinchGestureHandler} from 'react-native-gesture-handler';
import {TOTAL_FRET} from '../constants/constants';
import {colors} from '../theme/colors';
import {Frets} from './Frets';
import {Strings} from './Strings';

const getSafeScale = (scale: number, min: number, max: number) => {
  const integerScale = Math.round(scale);
  return Math.min(Math.max(integerScale, min), max);
};

export function Neck() {
  const [totalFret, setTotalFret] = useState(TOTAL_FRET);

  return (
    <PinchGestureHandler
      onGestureEvent={e => {
        const {scale} = e.nativeEvent;

        setTotalFret(getSafeScale(totalFret + (1 - scale) * 10, 1, TOTAL_FRET));
      }}>
      <ScrollView
        style={styles.container}
        horizontal={true}
        contentContainerStyle={styles.contents}>
        <Frets totalFret={totalFret} />
        <Strings totalFret={totalFret} />
      </ScrollView>
    </PinchGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: colors.neck,
    height: '100%',
  },
  contents: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flex: 1,
  },
});
