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

  /**
   * @description is sale available
   * @param {Number} price price
   * @return {Boolean} is sale available
   * @method VendingMachine#isSaleAvailable
   */
  isSaleAvailable(price) {
    return this._moneyBox.isSaleAvailable(price);
  }

  /**
   * @description is insertion available
   * @param {MoneyBox} money money
   * @method VendingMachine#isInsertionAvailable
   */
  isInsertionAvailable(money) {
    return this._moneyBox.isInsertionAvailable(money);
  }
}

export default VendingMachine;
