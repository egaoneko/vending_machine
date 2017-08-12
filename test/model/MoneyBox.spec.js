import chai from "chai";
import MoneyBox from "../../src/model/MoneyBox";
import Money from "../../src/model/Money";
import * as moneyTypes from "../../src/enum/MoneyType";

let assert = chai.assert;

describe('MoneyBox', () => {
  let moneyBox;

  beforeEach(() => {
    moneyBox = new MoneyBox();
  });

  describe('Create', () => {
    it('constructor', () => {
      assert.strictEqual(moneyBox._totalAmount, 0);
      for(let value of moneyBox._moneyTypeSizeMap.values()) {
        assert.strictEqual(value, 0);
      }
    });
  });

  describe('Method', () => {
    it('resetMoneyTypeSizeMap', () => {
      for(let key of moneyBox._moneyTypeSizeMap.keys()) {
        moneyBox._moneyTypeSizeMap.set(key, 2);
      }

      moneyBox.resetMoneyTypeSizeMap();

      for(let values of moneyBox._moneyTypeSizeMap.values()) {
        assert.strictEqual(values, 0);
      }
    });
    
    it('get moneyTypeSizeMap', () => {
      for(let values of moneyBox.moneyTypeSizeMap.values()) {
        assert.strictEqual(values, 0);
      }
    });

    it('get totalAmount', () => {
      assert.strictEqual(moneyBox.totalAmount, 0);
    });

    it('set totalAmount', () => {
      moneyBox.totalAmount = 10;
      assert.strictEqual(moneyBox.totalAmount, 10);
    });

    it('isSaleAvailable', () => {
      moneyBox.totalAmount = 200;
      assert.isTrue(moneyBox.isSaleAvailable(100));
    });

    it('isSaleAvailable same', () => {
      moneyBox.totalAmount = 100;
      assert.isTrue(moneyBox.isSaleAvailable(100));
    });

    it('isNotSaleAvailable', () => {
      moneyBox.totalAmount = 0;
      assert.isFalse(moneyBox.isSaleAvailable(100));
    });

    it('isInsertionAvailable', () => {
      let money = new Money(moneyTypes.BILL, 1000);
      moneyBox.totalAmount = 0;
      assert.isTrue(moneyBox.isInsertionAvailable(money));
    });

    it('isInsertionAvailable over max money', () => {
      let money = new Money(moneyTypes.BILL, 1000);
      moneyBox.totalAmount = 3000;
      assert.isFalse(moneyBox.isInsertionAvailable(money));
    });

    it('isInsertionAvailable over max bill', () => {
      let money = new Money(moneyTypes.BILL, 1000);
      moneyBox.totalAmount = 0;
      moneyBox.moneyTypeSizeMap.set(moneyTypes.BILL, 2);
      assert.isFalse(moneyBox.isInsertionAvailable(money));
    });
  });
});
