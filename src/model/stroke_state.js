/**
 * @typedef { import('./stroke_table.js').StrokeTable } StrokeTable
 */

/**
 * ローマ字入力時のキーボードのストロークの状態を管理するサービス
 */
export class StrokeState {
  /**
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

  /**
   * @param {string} character
   * @return {boolean}
   */
  addCharacter(character) {
    const currentInput = this.input + character;
    const node = this.strokeTable.get(currentInput);

    const entry = node && node.entry;

    if (node && !(node.hasChilds() || entry)) {
      this.clearInput();

      if (this.temporaryEntry) {
        this.addOutput(this.temporaryEntry.output);
        this.clearInput();
        this.addInput(this.temporaryEntry.next);
        this.temporaryEntry = undefined;
      }

      const ch = this.strokeTable.get(character);
      if (ch) {
        return this.addCharacter(character);
      } else {
        return false;
      }
    }

    if (!node.hasChilds() && entry) {
      this.addOutput(entry.output);
      this.clearInput();
      this.addInput(entry.next);
      this.temporaryEntry = undefined;

      return true;
    }

    if (node.hasChilds() && entry) {
      this.addInput(character);
      this.temporaryEntry = undefined;

      return true;
    }

    if (node.hasChilds() && entry) {
      this.addInput(character);
      this.temporaryEntry = node.entry;

      return true;
    }

    return false;
  }

  /**
   * @param {string} input
   */
  addInput(input) {
    // dismiss when null-like object is passed
    if (input == null) {
      return;
    }

    this.input += input;
  }

  /**
   * @param {string} output
   */
  addOutput(output) {
    this.output += output;
  }

  takeOutput() {
    const output = this.output;
    this.clearOutput();

    return output;
  }
}
