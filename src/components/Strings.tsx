import {StyleSheet, View} from 'react-native';
import {String} from './String';

export function Strings({totalFret}: {totalFret: number}) {
  return (
    <View style={styles.container}>
      <String totalFret={totalFret} />
      <String totalFret={totalFret} />
      <String totalFret={totalFret} />
      <String totalFret={totalFret} />
      <String totalFret={totalFret} />
      <String totalFret={totalFret} />
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
