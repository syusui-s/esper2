/** @module model/input_method */

import { KeyboardMap } from './keyboard_map.js';

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
   * @param {array} characterTypes 対応する文字種の配列
   */
  constructor(name, characterTypes) {
    this.name = name;
    this.characterTypes = characterTypes;

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
   */
  consume(keyEvent) {}
}

/**
 * キーボード配列に基づいて、キーボードの配列
 */
class KeyboardMapInputMethod extends InputMethod {
  /**
   * @param {keyboardMap} KeyboardMap
   */
  constructor(keyboardMap) {
    super(keyboardMap.name, keyboardMap.characterTypes);
    this.keyboardMap = keyboardMap;
  }

  /**
   * @override
   */
  consume(keyEvent) {
    const keyEntry = this.keyboardMap.getKeyEntry(keyEvent.code);
    const character = keyEntry.getCharacter();
    this.addOutput(character);
  }
}
