import Product from '../model/Product';

const service = {
  getProducts: getProducts
};

const productNames = ["펩시", "V10", "거름", "맹물", "환타", "식혜", "국물", "박카스"];

/**
 * @description Get products
 * @return {Array} products
 * @method getProducts
 */
function getProducts() {
  const shuffledProductNames = _shuffle(productNames);
  let products = [];

  let productSize = shuffledProductNames.length;
  for (let idx = 0; idx < productSize; idx++) {
    products.push(new Product(
      idx,
      shuffledProductNames[idx],
      _randomIntMinMax(1, 8) * 100,
      _randomIntMinMax(1, 3)
    ));
  }
  return products;
}

/**
 * @private
 * @description Shuffles array in place
 * @param {Array} a items The array containing the items.
 * @return {Array} suffled array
 * @method _shuffle
 */
function _shuffle(a) {
  let s = a.slice();
  for (let i = s.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [s[i - 1], s[j]] = [s[j], s[i - 1]];
  }
  return s;
}

/**
 * @private
 * @description get random int between min and max
 * @param {Number} min min
 * @param {Number} max max
 * @method _randomIntMinMax
 */
function _randomIntMinMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default service;
