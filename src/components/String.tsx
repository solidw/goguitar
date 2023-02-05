import {StyleSheet, View} from 'react-native';
import {GuitarNote} from '../models/Sound';
import {range} from '../utils/range';
import {Finger} from './Finger';

export function String({
  totalFret,
  baseSound,
}: {
  totalFret: number;
  baseSound: GuitarNote;
}) {
  return (
    <View style={styles.string}>
      {range(totalFret).map((_, index) => {
        const fret = index + 1;
        const sound = baseSound.intervalTo('up', fret);

        return <Finger key={index} sound={sound} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  string: {
    flex: 1,
    alignItems: 'stretch',
    height: '100%',
  },
  fingerBoard: {
    flex: 1,
    alignItems: 'center',
  },
});
