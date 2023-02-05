import {StyleSheet, View} from 'react-native';
import {GuitarNote} from '../models/Sound';
import {String} from './String';

export function Strings({totalFret}: {totalFret: number}) {
  return (
    <View style={styles.container}>
      <String totalFret={totalFret} baseSound={new GuitarNote('E2')} />
      <String totalFret={totalFret} baseSound={new GuitarNote('A2')} />
      <String totalFret={totalFret} baseSound={new GuitarNote('D3')} />
      <String totalFret={totalFret} baseSound={new GuitarNote('G3')} />
      <String totalFret={totalFret} baseSound={new GuitarNote('B3')} />
      <String totalFret={totalFret} baseSound={new GuitarNote('E3')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'stretch',
    flexDirection: 'row',
  },
});
