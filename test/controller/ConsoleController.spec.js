import chai from "chai";
import ConsoleController from "../../src/controller/ConsoleController";
import VendingMachine from "../../src/model/VendingMachine";
import event from '../../src/event';
import Product from "../../src/model/Product";
import Wallet from "../../src/model/Wallet";

let assert = chai.assert;

describe('ConsoleController', () => {
  let consoleController;

  beforeEach(() => {
    consoleController = new ConsoleController(
      event
    );
  });

  describe('Create', () => {
    it('constructor', () => {
      assert.strictEqual(consoleController._event, event);
    });
  });

  describe('Method', () => {});
});
