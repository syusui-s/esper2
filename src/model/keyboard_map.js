/** @module model/keyboard_map */

// eslint-disable-next-line
import { KeyEvent } from './key_event.js';

/**
 * 特定のコードに対応するアルファベットや記号を表す
 */
export class KeyEntry {
  /**
   * @param {String} code キーコード
   * @param {Object} map
   */
  constructor(code, map) {
    this.code = code;
    this.map = map;
  }
}

/**
 * @property {string} name
 * @property {Map<string, KeyEntry>} map
 */
export class KeyboardMap {
  /**
   * @param {string} name
   * @param {object} map
   */
  static fromMap(name, map) {
    const mapConverted = new Map();

    Object.keys(map).forEach(code => {
      const entry = map[code];
      const keyEntry = new KeyEntry(code, entry);
      mapConverted.set(code, keyEntry);
    });

    return new this(name, mapConverted);
  }

  /**
   * @param {string} name
   * @param {Map<string, KeyEntry>} map
   */
  constructor(name, map) {
    this.name = name;
    this.map = map;
  }

  /**
   * このキーボードマップにおける
   * キーイベントに対応する文字を取得する
   *
   * @param {KeyEvent} keyEvent
   * @return {string?}
   */
  getCharacter(keyEvent) {
    const keyEntry = this.map.get(keyEvent.code);

    if (keyEntry == undefined) {
      return null;
    }

    if (keyEvent.modifiers.shiftKey) {
      return keyEntry.map.shift;
    } else {
      return keyEntry.map.direct;
    }
  }
}
