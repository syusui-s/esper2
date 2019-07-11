/** @module lib/algorithm  */

/**
 * 識別子と成るシンボルを保持するクラス
 */
export class Enum {
  /**
   * @param {Iterable<string>} set
   */
  constructor(set) {
    for (const entry of set) {
      const entryStr = entry.toString();
      this[entryStr] = Symbol(entryStr);
    }

    return Object.freeze(this);
  }
}

/**
 * ツリー。節も値を保持できる。
 *
 * @template T
 * @property {Map} tree
 * @property {Tree<T> | T} entry
 */
export class Tree {
  /**
   */
  constructor() {
    this.tree = new Map();
  }

  /**
   * 木に値を挿入する
   *
   * キーの中に存在しない節があれば、値を持たない節が生成される。
   * 既存のキーが指定された場合は、新しい値で上書きされる。
   *
   * @param {array} keys 木をトラバースするのに使われるキーの配列
   * @param {Tree<T> | T} object 挿入される値
   */
  insert(keys, object) {
    const node = keys.reduce((node, key) => {
      const entry = node.tree.get(key);
      if (entry) {
        return entry;
      } else {
        const tree = new Tree();
        node.tree.set(key, tree);
        return tree;
      }
    }, this);

    node.entry = object;
  }

  /**
   * 対応するノード（部分木）を取得する
   *
   * @param {array} keys 木をトラバースするのに使われるキーの配列
   * @return {Tree<T>} キーに対応する部分木。もし見つからなかった場合は、undefiendを返す。
   */
  get(keys) {
    return keys.reduce((node, key) => {
      if (!node) {
        return undefined;
      } else {
        return node.tree.get(key);
      }
    }, this);
  }

  /**
   * 木が値を持っている場合に真を返す
   *
   * @return {boolean} 木がエントリを持っている場合に真を返す
   */
  hasEntry() {
    return 'entry' in this;
  }

  /**
   * 木が子の木を持っている場合に真を返す
   *
   * @return {boolean} 木が子の木を持っている場合に真を返す
   */
  hasChilds() {
    return this.tree.size > 0;
  }
}

export default { Enum, Tree };
