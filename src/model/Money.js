/**
 * @description Money Class
 * @class Money
 */
class Money {

  /**
   * @description Money constructor.
   * @param {String} type type
   * @param {Number} amount amount
   * @constructs Money
   */
  constructor(type, amount) {
    this._type = type;
    this._amount = amount;
  }

  /**
   * @description Get type
   * @type {String}
   * @member Money#type
   */
  get type() {
    return this._type;
  }

  /**
   * @description Get amount
   * @type {Number}
   * @member Money#amount
   */
  get amount() {
    return this._amount;
  }
}

export default Money;
