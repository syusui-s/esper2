import { Tree } from '../lib/algorithm.js';

/**
 * ローマ字テーブルのエントリ
 *
 * @property {string} input
 * @property {string} output
 * @property {string} next
 */
export class StrokeEntry {
  /**
   * @param {string} input  入力
   * @param {string} output 出力
   * @param {string} next   次の入力
   */
  constructor(input, output, next) {
    this.input = input;
    this.output = output;
    this.next = next;
  }
}

/**
 * Google IME互換のローマ字テーブル
 * @property {Tree} tree
 */
export class StrokeTable {
  /**
   * @param {string} input
   */
  static fromGoogleIMEFormat(input) {
    const map = new Map();

    input.split(/[\r\n]+/).forEach(line => {
      const [input, output, next] = line.split(/\t/);
      map.set(input, new StrokeEntry(input, output, next));
    });

    return new StrokeTable(map);
  }

  /**
   * @param {Map<string, StrokeEntry>} map
   */
  constructor(map) {
    console.log(map);
    this.tree = new Tree();

    for (const [key, entry] of map.entries()) {
      const keys = key.split('');

      this.tree.insert(keys, entry);
    }
  }

  /**
   * キー入力に対応するエントリ
   *
   * @param {string} input
   * @return {Tree<StrokeEntry>}
   */
  get(input) {
    return this.tree.get(input.split(''));
  }
}
