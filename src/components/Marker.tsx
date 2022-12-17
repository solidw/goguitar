import {StyleSheet, View} from 'react-native';
import {colors} from '../theme/colors';

export function Marker() {
  return (
    <View style={[styles.container, styles.single]}>
      <View style={styles.circle} />
    </View>
  );
}

Marker.Double = function DoubleMarker() {
  return (
    <View style={[styles.container, styles.double]}>
      <View style={styles.circle} />
      <View style={styles.circle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  single: {
    justifyContent: 'center',
  },
  double: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.marker,
    alignSelf: 'center',
  },
});
