import chai from "chai";
import VendingMachineComponent from "../src/VendingMachineComponent";
import ProductDisplayView from "../src/view/ProductDisplayView";
import MoneyInsertionView from "../src/view/MoneyInsertionView";
import ConsoleView from "../src/view/ConsoleView";
import ProductController from "../src/controller/ProductController";
import InsertionController from "../src/controller/InsertionController";

let assert = chai.assert;

describe('VendingMachineComponent', () => {
  let vendingMachineComponent;
  let element;
  let id = 'sample';

  beforeEach(() => {
    element = document.createElement('div');
    element.id = id;

    let pdvElement = document.createElement('div');
    pdvElement.className += "product_display";
    element.appendChild(pdvElement);

    let mivElement = document.createElement('div');
    mivElement.className += "money_insertion";
    element.appendChild(mivElement);

    let cvElement = document.createElement('div');
    cvElement.className += "console";
    element.appendChild(cvElement);

    document.body.appendChild(element);
    vendingMachineComponent = new VendingMachineComponent(id);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  describe('Create', () => {
    it('constructor', () => {
      assert.strictEqual(vendingMachineComponent._vendingMachine.products.length, 8);
      assert.strictEqual(vendingMachineComponent._wallet.totalAmount, 10000);
      assert.isTrue(vendingMachineComponent._productDisplayView instanceof ProductDisplayView);
      assert.isTrue(vendingMachineComponent._moneyInsertionView instanceof MoneyInsertionView);
      assert.isTrue(vendingMachineComponent._consoleView instanceof ConsoleView);
      assert.isTrue(vendingMachineComponent._productController instanceof ProductController);
      assert.isTrue(vendingMachineComponent._insertionController instanceof InsertionController);
    });

    it('element', () => {
      assert.strictEqual(vendingMachineComponent._element, element);
    });

    it('element with wrong id', () => {
      assert.throws(()=>vendingMachineComponent = new VendingMachineComponent('test'), Error, "Can not found element.");
    });
  });

  describe('Method', () => {
  });
});
