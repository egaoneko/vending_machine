import chai from "chai";
import Wallet from "../../src/model/Wallet";

let assert = chai.assert;

describe('Wallet', () => {
  let wallet;

  beforeEach(() => {
    wallet = new Wallet(10000);
  });

  describe('Create', () => {
    it('constructor', () => {
      assert.strictEqual(wallet._totalAmount, 10000);
    });

    it('constructor without totalAmount', () => {
      wallet = new Wallet();
      assert.strictEqual(wallet._totalAmount, 0);
    });
  });

  describe('Method', () => {
    it('get totalAmount', () => {
      assert.strictEqual(wallet.totalAmount, 10000);
    });

    it('set totalAmount', () => {
      wallet.totalAmount = 0;
      assert.strictEqual(wallet.totalAmount, 0);
    });
  });
});
