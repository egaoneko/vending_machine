import chai from "chai";
import VendingMachine from "../../src/model/VendingMachine";
import Product from "../../src/model/Product";
import MoneyBox from "../../src/model/MoneyBox";

let assert = chai.assert;

describe('VendingMachine', () => {
  let vendingMachine;
  let products;

  beforeEach(() => {
    products = [new Product(1, "펩시1", 100, 1), new Product(1, "펩시1",
      100, 2)];

    vendingMachine = new VendingMachine(products);
  });

  describe('Create', () => {
    it('constructor', () => {
      assert.strictEqual(vendingMachine._products, products);
      assert.isTrue(vendingMachine._moneyBox instanceof MoneyBox);
    });

    it('constructor without products', () => {
      vendingMachine = new VendingMachine();
      assert.strictEqual(vendingMachine._products.length, 0);
      assert.isTrue(vendingMachine._moneyBox instanceof MoneyBox);
    });
  });

  describe('Method', () => {
    it('get products', () => {
      assert.strictEqual(vendingMachine.products, products);
    });

    it('get moneyBox', () => {
      assert.strictEqual(vendingMachine.moneyBox, vendingMachine._moneyBox);
    });
  });
});
