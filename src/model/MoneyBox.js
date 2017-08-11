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
    this._resetMoneyTypeSizeMap();
  }

  /**
   * @private
   * @description reset moneyTypeSizeMap
   * @method MoneyBox#_resetMoneyTypeSizeMap
   */
  _resetMoneyTypeSizeMap() {
    for(let moneyType in moneyTypes) {
      this._moneyTypeSizeMap.set(moneyType, 0);
    }
  }

  /**
   * @description Get totalAmount
   * @type {Number}
   * @member MoneyBox#totalAmount
   */
  get totalAmount() {
    return this._totalAmount;
  }
}

export default MoneyBox;
