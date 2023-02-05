import {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';

export function Fret({children, fret}: {children?: ReactNode; fret: number}) {
  return (
    <View style={styles.line}>
      <View style={styles.fretContainer}>
        <Text style={styles.fretNumber}>{fret}</Text>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    flex: 1,
    borderBottomWidth: 3,
    borderBottomColor: colors.fret,
  },
  fretContainer: {
    position: 'absolute',
    bottom: -10,
    backgroundColor: colors.fret,
    padding: 2,
  },
  fretNumber: {
    fontWeight: 'bold',
    color: 'white',
  },
});
