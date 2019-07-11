/** @module model/stroke */

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
    this.tree = new Tree();

    for (const key in map) {
      const keys = key.split('');
      const entry = map.get(key);

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

/**
 * ローマ字入力時のキーボードのストロークの状態を管理するサービス
 *
 * @property {StrokeTable} strokeTable
 */
export class StrokeState {
  /*
   * @param {StrokeTable} strokeTable
   */
  constructor(strokeTable) {
    this.strokeTable = strokeTable;
    this.reset();
  }

  clearInput() {
    this.input = '';
  }

  clearOutput() {
    this.output = '';
  }

  reset() {
    this.clearInput();
    this.clearOutput();
  }

  addCharacter(character) {
    const currentInput = this.input + character;
    const node = this.strokeTable.get(currentInput);

    if (!node || (!node.hasChilds() && !node.hasEntry())) {
      this.clearInput();

      if (this.temporaryEntry) {
        this.addOutput(this.temporaryEntry.output);
        this.clearInput();
        this.addInput(this.temporaryEntry.next);
        this.temporaryEntry = undefined;
      }

      if (this.strokeTable.get(character)) {
        return this.addCharacter(character);
      } else {
        return false;
      }
    }

    if (!node.hasChilds() && node.hasEntry()) {
      const entry = node.entry;

      this.addOutput(entry.output);
      this.clearInput();
      this.addInput(entry.next);
      this.temporaryEntry = undefined;

      return true;
    }

    if (node.hasChilds() && !node.hasEntry()) {
      this.addInput(character);
      this.temporaryEntry = undefined;

      return true;
    }

    if (node.hasChilds() && node.hasEntry()) {
      this.addInput(character);
      this.temporaryEntry = node.entry;

      return true;
    }
  }

  addInput(input) {
    // dismiss when null-like object is passed
    if (input == null) {
      return;
    }

    this.input += input;
  }

  addOutput(output) {
    if (output == null) {
      throw new Error('null-likeな値は追加できません');
    }

    this.output += output;
  }

  takeOutput() {
    const output = this.output;
    this.clearOutput();

    return output;
  }
}