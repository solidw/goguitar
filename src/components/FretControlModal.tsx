import {ComponentProps, Dispatch, SetStateAction} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {TOTAL_FRET} from '../constants/constants';
import {colors} from '../theme/colors';

interface FretControlModalProps extends ComponentProps<typeof Modal> {
  fret: number;
  onFretChange: Dispatch<SetStateAction<number>>;
  onClose: () => void;
}

function getSafeFret(fret: number) {
  return Math.min(Math.max(0, fret), TOTAL_FRET);
}

export function FretControlModal({
  fret,
  onFretChange,
  onClose,
  ...props
}: FretControlModalProps) {
  const onFretDown = () => {
    onFretChange(getSafeFret(fret - 1));
  };
  const onFretUp = () => {
    onFretChange(getSafeFret(fret + 1));
  };

  return (
    <Modal {...props} transparent animationType="fade" style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.controller}>
          <Pressable style={styles.button} onPress={onFretDown}>
            <Text>-</Text>
          </Pressable>
          <Text>{fret}</Text>
          <Pressable style={styles.button} onPress={onFretUp}>
            <Text>+</Text>
          </Pressable>
        </View>
        <Pressable style={[styles.button, styles.close]} onPress={onClose}>
          <Text>X</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    height: 300,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  controller: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.neck,
    margin: 10,
  },
  close: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
