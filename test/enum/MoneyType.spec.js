import chai from "chai";
import * as moneyTypes from "../../src/enum/MoneyType";

let assert = chai.assert;

describe('MoneyType', () => {
  it('COIN', () => {
    assert.strictEqual(moneyTypes.COIN, "COIN");
  });

  it('BILL', () => {
    assert.strictEqual(moneyTypes.BILL, "BILL");
  });
});
