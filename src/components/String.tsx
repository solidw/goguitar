import {StyleSheet, View} from 'react-native';
import {range} from '../utils/range';
import {Finger} from './Finger';

export function String({totalFret}: {totalFret: number}) {
  return (
    <View style={styles.string}>
      {range(totalFret).map((_, index) => {
        const fret = index + 1;
        return <Finger fret={fret} />;
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
