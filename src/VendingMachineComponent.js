import VendingMachine from './model/VendingMachine';
import productService from './service/ProductService.js';
import ProductDisplayView from './view//ProductDisplayView';
import MoneyInsertionView from './view//MoneyInsertionView';
import ConsoleView from './view//ConsoleView';
import Wallet from "./model/Wallet";

/**
 * @description VendingMachineComponent Class
 * @class VendingMachineComponent
 */
class VendingMachineComponent {

  /**
   * @description VendingMachineComponent constructor.
   * @param {String} id element id
   * @constructs VendingMachineComponent
   */
  constructor(id) {
    this._element = document.querySelector(`#${id}`);

    if (!this._element) {
      throw new Error("Can not found element.");
    }

    this._vendingMachine = new VendingMachine(productService.getProducts());    
    this._wallet = new Wallet(10000);
    this._productDisplayView = new ProductDisplayView(this._element, this._vendingMachine.products);
    this._moneyInsertionView = new MoneyInsertionView(this._element, this._vendingMachine.moneyBox, this._wallet);
    this._consoleView = new ConsoleView(this._element);
  }
}

export default VendingMachineComponent;
