/** @module model/input_method */

import { StrokeState } from './stroke_state.js';

/**
 * @typedef { import('./keyboard_map.js').KeyboardMap } KeyboardMap
 * @typedef { import('./stroke_table.js').StrokeTable } StrokeTable
 * @typedef { import('./key_event.js').KeyEvent } KeyEvent
 */

/**
 * 入力方式
 * キーボードなどからの入力情報を受け取り、
 *
 * 子クラスは、consumeメソッドを実装しなければならない。
 *
 * @abstract
 * @type {InputMethod}
 * @property {string} name
 * @property {string} characterTypes
 */
class InputMethod {
  /**
   * @param {string} name 入力方式名
   */
  constructor(name) {
    this.name = name;

    this.reset();
  }

  /**
   * 全ての状態を初期化する
   */
  reset() {
    this.resetOutput();
  }

  /**
   * 出力を初期化する
   */
  resetOutput() {
    this.output = '';
  }

  /**
   * 出力文字列に文字列を追加する
   *
   * @param {string} output 追加したい文字列
   * @return {void}
   */
  addOutput(output) {
    this.output += output;
  }

  /**
   * 出力を取得し、内部状態をクリアする
   */
  takeOutput() {
    const output = this.output;
    this.resetOutput();

    return output;
  }

  /**
   * @abstract
   * @param {KeyboardEvent} keyEvent
   * @name consume
   *
   * イベントを消費する
   */
}

/**
 * キーボード配列とローマ字テーブル
 */
export class DirectInputMethod extends InputMethod {
  /**
   * @param {KeyboardMap} keyboardMap
   * @param {StrokeTable} strokeTable
   */
  constructor(keyboardMap, strokeTable) {
    super(keyboardMap.name);
    this.keyboardMap = keyboardMap;
    this.strokeTable = strokeTable;
  }

  /**
   * @override
   * @param {KeyEvent} keyEvent
   */
  consume(keyEvent) {
    const character = this.keyboardMap.getCharacter(keyEvent);

    if (character != null) {
      this.addOutput(character);
    }
  }
}

/**
 * キーボード配列とローマ字テーブル
 */
export class StrokeTableInputMethod extends InputMethod {
  /**
   * @param {KeyboardMap} keyboardMap
   * @param {StrokeTable} strokeTable
   */
  constructor(keyboardMap, strokeTable) {
    super(keyboardMap.name);
    this.keyboardMap = keyboardMap;
    this.strokeState = new StrokeState(strokeTable);
  }

  /**
   * @override
   * @param {KeyEvent} keyEvent
   */
  consume(keyEvent) {
    const character = this.keyboardMap.getCharacter(keyEvent);

    if (character != null) {
      this.strokeState.addCharacter(character);

      const output = this.strokeState.takeOutput();

      if (output != null) {
        this.addOutput(output);
      }
    }
  }
}
