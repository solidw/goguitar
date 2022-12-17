import {ScrollView, StyleSheet} from 'react-native';
import {Frets} from './Frets';
import {Strings} from './Strings';

export function Neck() {
  const totalFret = 5;

  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      contentContainerStyle={styles.contents}>
      <Frets totalFret={totalFret} />
      <Strings totalFret={totalFret} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'grey',
    height: '100%',
  },
  contents: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flex: 1,
  },
});
