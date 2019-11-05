import { StrokeTable, StrokeEntry } from '../src/model/stroke_table.js';
import { StrokeState } from '../src/model/stroke_state.js';

import assert from 'assert';

it('StrokeTable', () => {
  const strokeTable = StrokeTable.fromGoogleIMEFormat('kna\tきゃ\ntt\tっ\tt');

  // @ts-ignore
  assert(strokeTable.get('kna').entry.output === 'きゃ');
  // @ts-ignore
  assert(strokeTable.get('tt').entry.output === 'っ');
  // @ts-ignore
  assert(strokeTable.get('tt').entry.next === 't');
});

it('StrokeState', () => {
  const strokeTable = new StrokeTable(
    new Map([
      ['ko', new StrokeEntry('ko', 'こ', '')],
      ['co', new StrokeEntry('co', 'こ', '')],
      ['kq', new StrokeEntry('k,', 'こん', '')],
      ['cq', new StrokeEntry('k,', 'こん', '')],
      ['n', new StrokeEntry('n', 'ん', '')],
      ['nn', new StrokeEntry('nn', 'ん', '')],
      ['ni', new StrokeEntry('ni', 'に', '')],
      ['ti', new StrokeEntry('ti', 'ち', '')],
      ['chi', new StrokeEntry('chi', 'ち', '')],
      ['ha', new StrokeEntry('ha', 'は', '')],
    ])
  );

  const strokeState = new StrokeState(strokeTable);

  ['konnnichiha', 'cqnitiha', 'kqnitiha', 'connnichiha', 'connnittiha'].forEach(
    str => {
      str.split('').map(ch => strokeState.addCharacter(ch));
      assert(strokeState.takeOutput() === 'こんにちは');

      strokeState.reset();
    }
  );
});
