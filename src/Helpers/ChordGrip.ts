import { Chord } from './Chords';

const chordGrip = (chord: Chord) => {
  let result: (number | null)[] = [];
  switch (chord) {
    case Chord.C:
      result = [null, 3, 0, 2, 1, 0];
      break;
    case Chord.Csharp:
      result = [null, 4, 6, 6, 6, null];
      break;
    case Chord.D:
      result = [null, null, 0, 2, 3, 2];
      break;
    case Chord.Dsharp:
      result = [null, 6, 8, 8, 8, null];
      break;
    case Chord.E:
      result = [0, 2, 2, 1, 0, 0];
      break;
    case Chord.F:
      result = [1, 3, 3, 2, 1, 1];
      break;
    case Chord.Fsharp:
      result = [2, 4, 4, 3, 2, 2];
      break;
    case Chord.G:
      result = [3, 2, 0, 0, 0, 1];
      break;
    case Chord.Gsharp:
      result = [4, 6, 6, 5, 4, 4];
      break;
    case Chord.A:
      result = [null, 0, 2, 2, 2, 0];
      break;
    case Chord.Bb:
      result = [0, 1, 3, 3, 3, null];
      break;
    case Chord.B:
      result = [0, 2, 4, 4, 4, null];
      break;

    default:
      break;
  }
  return result;
};


export default chordGrip;