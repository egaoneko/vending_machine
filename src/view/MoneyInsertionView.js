import Money from '../model/Money';
import {
  BILL,
  COIN
} from '../enum/MoneyType';

/**
 * @description MoneyInsertionView Class
 * @class MoneyInsertionView
 */
class MoneyInsertionView {

  /**
   * @description MoneyInsertionView constructor.
   * @param {Element} vmElement vending machine element
   * @param {MoneyBox} moneyBox moneyBox
   * @param {Wallet} wallet wallet
   * @constructs MoneyInsertionView
   */
  constructor(vmElement, moneyBox, wallet) {
    if (!vmElement || !(vmElement instanceof Element)) {
      throw new Error("Can not found element.");
    }

    this._element = vmElement.querySelectorAll('.money_insertion')[0];

    if (!this._element) {
      throw new Error("Can not found element.");
    }

    this._moneyBox = moneyBox;
    this._wallet = wallet;
    this._bills = [
      new Money(COIN, 50), 
      new Money(COIN, 100), 
      new Money(COIN, 500), 
      new Money(BILL, 1000)
    ];
    this._init(this._moneyBox, this._wallet, this._bills);
  }

  /**
   * @private
   * @description init products
   * @param {MoneyBox} moneyBox moneyBox
   * @param {Wallet} wallet wallet
   * @param {Array} wallet bills
   * @method MoneyInsertionView#_init
   */
  _init(moneyBox, wallet, bills) {
    let docFragment = document.createDocumentFragment();

    let insertionElement = document.createElement('div');
    insertionElement.innerText = `${moneyBox.totalAmount}원`;
    insertionElement.className += "insertion";

    let retrunBtnElement = document.createElement('div');
    retrunBtnElement.innerText = "반환버튼";
    retrunBtnElement.className += "return_btn";

    let walletBoxElement = document.createElement('div');
    walletBoxElement.className += "wallet_box";

    for(let bill of bills) {
      let billBoxElement = document.createElement('div');
      billBoxElement.className += "coin_box";

      let billElement = document.createElement('div');
      billElement.className += "bill";
      billBoxElement.appendChild(billElement);

      let billAmountElement = document.createElement('div');
      billAmountElement.className += "bill_amount";
      billAmountElement.innerText = `${bill.amount}원`;
      billBoxElement.appendChild(billAmountElement);

      walletBoxElement.appendChild(billBoxElement);
    }

    let walletElement = document.createElement('div');
    walletElement.innerText = `지금 내 돈 : ${wallet.totalAmount}`;
    walletElement.className += "wallet";
    walletBoxElement.appendChild(walletElement);

    docFragment.appendChild(insertionElement);
    docFragment.appendChild(retrunBtnElement);
    docFragment.appendChild(walletBoxElement);
    this._element.appendChild(docFragment);
  }
}

export default MoneyInsertionView;
