import chai from "chai";
import InsertionController from "../../src/controller/InsertionController";
import VendingMachine from "../../src/model/VendingMachine";
import event from '../../src/event';
import Product from "../../src/model/Product";
import Wallet from "../../src/model/Wallet";

let assert = chai.assert;

describe('InsertionController', () => {
  let insertionController;
  let vendingMachine;
  let products;
  let wallet;

  beforeEach(() => {
    products = [
      new Product(1, "펩시1", 100, 1),
      new Product(1, "펩시1", 100, 2)
    ];
    vendingMachine = new VendingMachine(products);
    wallet = new Wallet(10000);

    insertionController = new InsertionController(
      event,
      vendingMachine,
      wallet
    );
  });

  describe('Create', () => {
    it('constructor', () => {
      assert.strictEqual(insertionController._event, event);
      assert.strictEqual(
        insertionController._vendingMachine,
        vendingMachine);
      assert.strictEqual(
        insertionController._wallet,
        wallet
      );
    });
  });

  describe('Method', () => {});
});
