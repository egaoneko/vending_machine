import chai from "chai";
import MoneyInsertionView from "../../src/view/MoneyInsertionView";
import MoneyBox from "../../src/model/MoneyBox";
import Wallet from "../../src/model/Wallet";

let assert = chai.assert;

describe('MoneyInsertionView', () => {
  let moneyInsertionView;
  let element;
  let vmComponent;
  let moneyBox;
  let wallet;

  beforeEach(() => {
    vmComponent = document.createElement('div');
    element = document.createElement('div');
    element.className += "money_insertion";

    vmComponent.appendChild(element);

    moneyBox = new MoneyBox();
    wallet = new Wallet(10000);

    moneyInsertionView = new MoneyInsertionView(vmComponent, moneyBox, wallet);
  });

  describe('Create', () => {
    it('constructor', () => {
      assert.strictEqual(moneyInsertionView._moneyBox, moneyBox);
      assert.strictEqual(moneyInsertionView._wallet, wallet);
      assert.strictEqual(moneyInsertionView._bills.length, 4);
    });

    it('element', () => {
      assert.strictEqual(moneyInsertionView._element, element);
    });

    it('element with wrong id', () => {
      assert.throws(()=>moneyInsertionView = new MoneyInsertionView('test'), Error, "Can not found element.");
    });
  });

  describe('Method', () => {
  });
});
