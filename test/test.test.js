import { Tree } from '../src/lib/algorithm.js';
import { StrokeTable, StrokeEntry, StrokeState } from '../src/model/stroke.js';

import assert from 'assert';

describe('Tree', () => {
  it("Tree", () => {
    const tree = new Tree();

    tree.insert(['a'], 'あ');
    tree.insert(['i'], 'い');
    tree.insert(['k', 'a'], 'か');
    tree.insert(['k', 'i'], 'き');
    tree.insert(['p', 'y', 'a'], 'ぴゃ');

    assert(tree.get(['a']).entry === 'あ');
    assert(tree.get(['i']).entry === 'い');
    assert(tree.get(['u']) === undefined);
    assert(tree.get(['k', 'a']).entry === 'か');
    assert(tree.get(['k', 'i']).entry === 'き');
    assert(tree.get(['k', 'u']) === undefined);
    assert(tree.get(['p', 'y', 'a']).entry === 'ぴゃ');
  });
});

it('StrokeTable', () => {
  const strokeTable = StrokeTable.fromGoogleIMEFormat("kna\tきゃ\ntt\tっ\tt");

  assert(strokeTable.get("kna").entry.output === "きゃ");
  assert(strokeTable.get("tt").entry.output === "っ");
  assert(strokeTable.get("tt").entry.next === "t");
});

it('StrokeState', () => {
  const strokeTable = new StrokeTable(
    new Map([
      ["ko", new StrokeEntry("ko", "こ", "")],
      ["co", new StrokeEntry("co", "こ", "")],
      ["kq", new StrokeEntry("k,", "こん", "")],
      ["cq", new StrokeEntry("k,", "こん", "")],
      ["n", new StrokeEntry("n", "ん", "")],
      ["nn", new StrokeEntry("nn", "ん", "")],
      ["ni", new StrokeEntry("ni", "に", "")],
      ["ti", new StrokeEntry("ti", "ち", "")],
      ["chi", new StrokeEntry("chi", "ち", "")],
      ["ha", new StrokeEntry("ha", "は", "")]
    ])
  );

  const strokeState = new StrokeState(strokeTable);

  ["konnnichiha", "cqnitiha", "kqnitiha", "connnichiha", "connnittiha"].forEach(
    str => {
      str.split("").map(ch => strokeState.addCharacter(ch));
      assert(strokeState.takeOutput() === "こんにちは");

      strokeState.reset();
    }
  );
});
