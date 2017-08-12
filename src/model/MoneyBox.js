import * as moneyTypes from '../enum/MoneyType';

/**
 * @description MoneyBox Class
 * @class MoneyBox
 */
class MoneyBox {

  /**
   * @description MoneyBox constructor.
   * @constructs MoneyBox
   */
  constructor() {
    this._totalAmount = 0;
    this._moneyTypeSizeMap = new Map();
    this._MAX_MONEY = 3000;
    this._MAX_BILL_SIZE = 2;
    this.resetMoneyTypeSizeMap();
  }

  /**
   * @description reset moneyTypeSizeMap
   * @method MoneyBox#_resetMoneyTypeSizeMap
   */
  resetMoneyTypeSizeMap() {
    for(let moneyType in moneyTypes) {
      this._moneyTypeSizeMap.set(moneyType, 0);
    }
  }

  /**
   * @description Get moneyTypeSizeMap
   * @type {Map}
   * @member MoneyBox#moneyTypeSizeMap
   */
  get moneyTypeSizeMap() {
    return this._moneyTypeSizeMap;
  }

  /**
   * @description Get totalAmount
   * @type {Number}
   * @member MoneyBox#totalAmount
   */
  get totalAmount() {
    return this._totalAmount;
  }

  /**
   * @description Get totalAmount
   * @type {Number}
   * @member MoneyBox#totalAmount
   */
  set totalAmount(totalAmount) {
    this._totalAmount = totalAmount;
  }

  /**
   * @description is sale available
   * @param {Number} price price
   * @method MoneyBox#isSaleAvailable
   */
  isSaleAvailable(price) {
    return this._totalAmount >= price;
  }

  /**
   * @description is insertion available
   * @param {MoneyBox} money money
   * @method MoneyBox#isInsertionAvailable
   */
  isInsertionAvailable(money) {
    if(this._totalAmount + money.amount > this._MAX_MONEY) {
      return false;
    }

    if(money.type === moneyTypes.BILL 
      && this._moneyTypeSizeMap.get(money.type) + 1 > this._MAX_BILL_SIZE) {
      return false;
    }

    return true;
  }
}

export default MoneyBox;
