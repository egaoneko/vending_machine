/**
 * @description Wallet Class
 * @class Wallet
 */
class Wallet {

  /**
   * @description Wallet constructor.
   * @param {Number} totalAmount totalAmount
   * @constructs Wallet
   */
  constructor(totalAmount = 0) {
    this._totalAmount = totalAmount;
  }

  /**
   * @description Get totalAmount
   * @type {Number}
   * @member Wallet#totalAmount
   */
  get totalAmount() {
    return this._totalAmount;
  }

  /**
   * @description Set totalAmount
   * @type {Number}
   * @member Wallet#totalAmount
   */
  set totalAmount(totalAmount) {
    this._totalAmount = totalAmount;
  }
}

export default Wallet;
