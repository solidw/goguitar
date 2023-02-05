import {StyleSheet, Text, View} from 'react-native';
import {GuitarTone} from '../models/Sound';
import {colors} from '../theme/colors';

export function Finger({sound}: {sound: GuitarTone}) {
  return (
    <View style={styles.finger}>
      <View style={styles.line} />
      <Text style={styles.sound}>{sound}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  finger: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    borderWidth: 2,
    width: 1,
    flex: 1,
    borderColor: colors.string,
  },
  sound: {
    position: 'absolute',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
});
