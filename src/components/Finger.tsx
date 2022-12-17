import {StyleSheet, TouchableOpacity, View} from 'react-native';

export function Finger({fret}: {fret: number}) {
  return (
    <TouchableOpacity
      style={styles.finger}
      onPress={() => {
        console.log(fret);
      }}>
      <View style={styles.line} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  finger: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    borderWidth: 4,
    width: 1,
    flex: 1,
  },
});
