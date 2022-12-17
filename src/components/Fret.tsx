import {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../theme/colors';

export function Fret({children}: {children?: ReactNode}) {
  return <View style={styles.line}>{children}</View>;
}

const styles = StyleSheet.create({
  line: {
    flex: 1,
    borderBottomWidth: 10,
    borderBottomColor: colors.fret,
    borderRadius: 5,
  },
});
