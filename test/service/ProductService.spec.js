import chai from "chai";
import productService from "../../src/service/ProductService";

let assert = chai.assert;

describe('ProductService', () => {
  describe('getProducts', () => {
    it('getProducts', () => {
      let products = productService.getProducts();
      assert.strictEqual(products.length, 8);
    });
  });
});
