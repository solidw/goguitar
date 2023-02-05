export type Pitch =
  | 'C'
  | 'C#'
  | 'D'
  | 'D#'
  | 'E'
  | 'F'
  | 'F#'
  | 'G'
  | 'G#'
  | 'A'
  | 'A#'
  | 'B';

const PITCH: Pitch[] = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
];

export type GuitarTone =
  | 'E2'
  | 'F2'
  | 'F#2'
  | 'G2'
  | 'G#2'
  | 'A2'
  | 'A#2'
  | 'B2'
  | 'C3'
  | 'C#3'
  | 'D3'
  | 'D#3'
  | 'E3'
  | 'F3'
  | 'F#3'
  | 'G3'
  | 'G#3'
  | 'A3'
  | 'A#3'
  | 'B3'
  | 'C4'
  | 'C#4'
  | 'D4'
  | 'D#4'
  | 'E4'
  | 'F4'
  | 'F#4'
  | 'G4'
  | 'G#4'
  | 'A4'
  | 'A#4'
  | 'B4'
  | 'C5'
  | 'C#5'
  | 'D5'
  | 'D#5'
  | 'E5'
  | 'F5'
  | 'F#5'
  | 'G5'
  | 'G#5'
  | 'A5'
  | 'A#5'
  | 'B5'
  | 'C6'
  | 'C#6'
  | 'D6'
  | 'D#6'
  | 'E6';

const BASE_FREQUENCY = 440;

/** fn = f0 * (a)^n
 *
 * where
 * f0 = the frequency of one fixed note which must be defined. A common choice is setting the A above middle C (A4) at f0 = 440 Hz.
 * n = the number of half steps away from the fixed note you are. If you are at a higher note, n is positive. If you are on a lower note, n is negative.
 * fn = the frequency of the note n half steps away.
 */

// E2 ~ E6
export class GuitarNote {
  tone: GuitarTone;
  constructor(tone: GuitarTone) {
    this.tone = tone;
  }

  /** A4 = 440hz */
  toFrequency(): number {
    return BASE_FREQUENCY * Math.pow(2, (this.tone.charCodeAt(0) - 69) / 12);
  }

  intervalTo(direction: 'up' | 'down', interval: number): GuitarTone {
    const {pitch, octave} = parseTone(this.tone);
    const weight = direction === 'up' ? 1 : -1;

    const newPitchIndex = PITCH.indexOf(pitch) + interval * weight;
    const {pitch: newPitch, octave: newOctave} =
      PITCH[newPitchIndex] == null
        ? {
            pitch: PITCH[newPitchIndex % PITCH.length],
            octave: octave + 1 * weight,
          }
        : {pitch: PITCH[newPitchIndex], octave};
    return `${newPitch}${newOctave}` as GuitarTone;
  }

  toString() {
    return this.tone;
  }
}

// A2 14 up ?

function parseTone(guitarTone: GuitarTone): {pitch: Pitch; octave: number} {
  const [pitch, octave] = guitarTone.split(/(\d)/).filter(Boolean);

  return {
    pitch: pitch as Pitch,
    octave: Number(octave),
  };
}
