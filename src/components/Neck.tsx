import {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {TOTAL_FRET} from '../constants/constants';
import {colors} from '../theme/colors';
import {Frets} from './Frets';
import {Strings} from './Strings';
import {FretControlModal} from './FretControlModal';

export function Neck() {
  const [totalFret, setTotalFret] = useState(TOTAL_FRET);
  const [isOpenFretControl, setIsOpenFretControl] = useState(false);

  const gesture = Gesture.Tap().onEnd(() => {
    setIsOpenFretControl(true);
  });

  return (
    <SafeAreaView>
      <FretControlModal
        fret={totalFret}
        onFretChange={setTotalFret}
        visible={isOpenFretControl}
        onClose={() => setIsOpenFretControl(false)}
      />
      <GestureHandlerRootView>
        <GestureDetector gesture={gesture}>
          <ScrollView
            style={styles.container}
            horizontal={true}
            contentContainerStyle={styles.contents}>
            <Frets totalFret={totalFret} />
            <Strings totalFret={totalFret} />
          </ScrollView>
        </GestureDetector>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: colors.neck,
    height: '100%',
  },
  contents: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flex: 1,
  },
});
