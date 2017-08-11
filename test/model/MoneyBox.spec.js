import chai from "chai";
import MoneyBox from "../../src/model/MoneyBox";

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
    it('_resetMoneyTypeSizeMap', () => {
      for(let key of moneyBox._moneyTypeSizeMap.keys()) {
        moneyBox._moneyTypeSizeMap.set(key, 2);
      }

      moneyBox._resetMoneyTypeSizeMap();

      for(let values of moneyBox._moneyTypeSizeMap.values()) {
        assert.strictEqual(values, 0);
      }
    });

    it('get totalAmount', () => {
      assert.strictEqual(moneyBox.totalAmount, 0);
    });
  });
});
