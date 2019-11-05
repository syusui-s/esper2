import { Tree } from '../src/lib/algorithm.js';

import assert from 'assert';

describe('Tree', () => {
  it('#insert and #get should work', () => {
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
    assert(tree.get(['p', 'y', 'i']) === undefined);
  });
});
