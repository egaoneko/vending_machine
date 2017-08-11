import chai from "chai";
import Money from "../../src/model/Money";
import {BILL} from "../../src/enum//MoneyType";

let assert = chai.assert;

describe('Money', () => {
  let money;
  let expectedType = BILL;
  let expectedAmount = 10000;

  beforeEach(() => {
    money = new Money(expectedType, expectedAmount);
  });

  describe('Create', () => {
    it('constructor', () => {
      assert.strictEqual(money._type, expectedType);
      assert.strictEqual(money._amount, expectedAmount);
    });
  });

  describe('Method', () => {
    it('get type', () => {
      assert.strictEqual(money.type, expectedType);
    });

    it('get amount', () => {
      assert.strictEqual(money.amount, expectedAmount);
    });
  });
});
