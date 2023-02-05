import {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
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

  const gesture = Gesture.Pinch().onUpdate(event => {
    const fret = getSafeScale(event.scale, 1, TOTAL_FRET);
    setTotalFret(fret);
  });

  return (
    <GestureDetector gesture={gesture}>
      <ScrollView
        style={styles.container}
        horizontal={true}
        contentContainerStyle={styles.contents}>
        <Frets totalFret={totalFret} />
        <Strings totalFret={totalFret} />
      </ScrollView>
    </GestureDetector>
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
