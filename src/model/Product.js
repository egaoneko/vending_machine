/**
 * @description Product Class
 * @class Product
 */
class Product {

  /**
   * @description Product constructor.
   * @param {Number} id id
   * @param {String} name name
   * @param {Number} price price
   * @param {Number} stock stock
   * @constructs Product
   */
  constructor(id, name, price, stock) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._stock = stock;
  }

  /**
   * @description Get name
   * @type {Number}
   * @member Product#name
   */
  get id() {
    return this._id;
  }

  /**
   * @description Get name
   * @type {String}
   * @member Product#name
   */
  get name() {
    return this._name;
  }

  /**
   * @description Get price
   * @type {Number}
   * @member Product#price
   */
  get price() {
    return this._price;
  }

  /**
   * @description Set price
   * @type {Number}
   * @member Product#price
   */
  set price(price) {
    this._price = price;
  }

  /**
   * @description Get stock
   * @type {Number}
   * @member Product#stock
   */
  get stock() {
    return this._stock;
  }

  /**
   * @description Set stock
   * @type {Number}
   * @member Product#stock
   */
  set stock(stock) {
    this._stock = stock;
  }
}

export default Product;
