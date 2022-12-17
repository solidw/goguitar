import {StyleSheet, View} from 'react-native';
import {MARKER_POINTS} from '../constants/constants';
import {range} from '../utils/range';
import {Fret} from './Fret';
import {Marker} from './Marker';

export function Frets({totalFret}: {totalFret: number}) {
  return (
    <View style={styles.container}>
      {range(totalFret).map((_, index) => {
        const fret = index + 1;

        return (
          <Fret key={index}>
            {MARKER_POINTS.includes(fret) ? (
              fret !== 12 ? (
                <Marker />
              ) : (
                <Marker.Double />
              )
            ) : null}
          </Fret>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
