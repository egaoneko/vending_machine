import chai from "chai";
import ProductController from "../../src/controller/ProductController";
import VendingMachine from "../../src/model/VendingMachine";
import event from '../../src/event';
import Product from "../../src/model/Product";

let assert = chai.assert;

describe('ProductController', () => {
  let productController;
  let vendingMachine;
  let products;

  beforeEach(() => {
    products = [
      new Product(1, "펩시1", 100, 1),
      new Product(1, "펩시1", 100, 2)
    ];
    vendingMachine = new VendingMachine(products);

    productController = new ProductController(event, vendingMachine);
  });

  describe('Create', () => {
    it('constructor', () => {
      assert.strictEqual(productController._event, event);
      assert.strictEqual(
        productController._vendingMachine,
        vendingMachine);
    });
  });

  describe('Method', () => {});
});
