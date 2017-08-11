import chai from "chai";
import Product from "../../src/model/Product";

let assert = chai.assert;

describe('Product', () => {
  const expectedId = 1;
  const expectedName = '펩시';
  const expectedPrice = 300;
  const expectedStock = 1;

  let product;

  beforeEach(() => {
    product = new Product(
      expectedId,
      expectedName,
      expectedPrice,
      expectedStock
    );
  });

  describe('Create', () => {
    it('constructor', () => {
      assert.strictEqual(product._id, expectedId);
      assert.strictEqual(product._name, expectedName);
      assert.strictEqual(product._price, expectedPrice);
      assert.strictEqual(product._stock, expectedStock);
    });
  });

  describe('Method', () => {
    it('get id', () => {
      assert.strictEqual(product.id, expectedId);
    });

    it('get name', () => {
      assert.strictEqual(product.name, expectedName);
    });

    it('get price', () => {
      assert.strictEqual(product.price, expectedPrice);
    });

    it('get stock', () => {
      assert.strictEqual(product.stock, expectedStock);
    });

    it('set stock', () => {
      const expectedNewStock = 2;
      product.stock = expectedNewStock;
      assert.strictEqual(product.stock, expectedNewStock);
    });
  });
});
