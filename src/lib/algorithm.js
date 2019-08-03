/** @module lib/algorithm  */

/**
 * ツリー。節も値を保持できる。
 *
 * @template T
 */
export class Tree {
  constructor() {
    /** @type {Map<String, Tree<T>>} tree */
    this.tree = new Map();

    /** @type {T | undefined} entry */
    this.entry = undefined;
  }

  /**
   * 木に値を挿入する
   *
   * キーの中に存在しない節があれば、値を持たない節が生成される。
   * 既存のキーが指定された場合は、新しい値で上書きされる。
   *
   * @param {Array<String>} keys 木をトラバースするのに使われるキーの配列
   * @param {T} object 挿入される値
   */
  insert(keys, object) {
    /** @type Tree<T> */
    const root = this;
    const node = keys.reduce((node, key) => {
      const entry = node.tree.get(key);
      if (entry) {
        return entry;
      } else {
        const tree = new Tree();
        node.tree.set(key, tree);
        return tree;
      }
    }, root);

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

export default { Tree };
