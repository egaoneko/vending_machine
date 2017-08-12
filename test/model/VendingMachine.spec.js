import chai from "chai";
import VendingMachine from "../../src/model/VendingMachine";
import Product from "../../src/model/Product";
import MoneyBox from "../../src/model/MoneyBox";
import Money from "../../src/model/Money";
import * as moneyTypes from "../../src/enum/MoneyType";

let assert = chai.assert;

describe('VendingMachine', () => {
  let vendingMachine;
  let products;

  beforeEach(() => {
    products = [
      new Product(1, "펩시1", 100, 1),
      new Product(1, "펩시1", 100, 2)
    ];

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

    it('isSaleAvailable', () => {
      vendingMachine.moneyBox.totalAmount = 200;
      assert.isTrue(vendingMachine.isSaleAvailable(100));
    });

    it('isSaleAvailable same', () => {
      vendingMachine.moneyBox.totalAmount = 100;
      assert.isTrue(vendingMachine.isSaleAvailable(100));
    });

    it('isNotSaleAvailable', () => {
      vendingMachine.moneyBox.totalAmount = 0;
      assert.isFalse(vendingMachine.isSaleAvailable(100));
    });

    it('isInsertionAvailable', () => {
      let money = new Money(moneyTypes.BILL, 1000);
      vendingMachine.moneyBox.totalAmount = 0;
      assert.isTrue(vendingMachine.isInsertionAvailable(money));
    });

    it('isInsertionAvailable over max money', () => {
      let money = new Money(moneyTypes.BILL, 1000);
      vendingMachine.moneyBox.totalAmount = 3000;
      assert.isFalse(vendingMachine.isInsertionAvailable(money));
    });

    it('isInsertionAvailable over max bill', () => {
      let money = new Money(moneyTypes.BILL, 1000);
      vendingMachine.moneyBox.totalAmount = 0;
      vendingMachine.moneyBox.moneyTypeSizeMap.set(moneyTypes.BILL, 2);
      assert.isFalse(vendingMachine.isInsertionAvailable(money));
    });
  });
});
