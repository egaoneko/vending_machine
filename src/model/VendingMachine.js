import MoneyBox from './MoneyBox';

/**
 * @description VendingMachine Class
 * @class VendingMachine
 */
class VendingMachine {

  /**
   * @description VendingMachine constructor.
   * @param {Array} [products] products
   * @constructs VendingMachine
   */
  constructor(products = []) {
    this._products = products;
    this._moneyBox = new MoneyBox();
  }

  /**
   * @description Get products
   * @type {Array}
   * @member VendingMachine#products
   */
  get products() {
    return this._products;
  }

  /**
   * @description Get moneyBox
   * @type {MoneyBox}
   * @member VendingMachine#moneyBox
   */
  get moneyBox() {
    return this._moneyBox;
  }
}

export default VendingMachine;
