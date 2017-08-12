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
   * @param {Object} event event
   * @param {MoneyBox} moneyBox moneyBox
   * @param {Wallet} wallet wallet
   * @constructs MoneyInsertionView
   */
  constructor(vmElement, event, moneyBox, wallet) {
    if (!vmElement || !(vmElement instanceof Element)) {
      throw new Error("Can not found element.");
    }

    this._element = vmElement.querySelectorAll('.money_insertion')[0];

    if (!this._element) {
      throw new Error("Can not found element.");
    }

    this._event = event;
    MoneyInsertionView._event = event;
    MoneyInsertionView.target = null;

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
    insertionElement.className += "insertion";

    let insertionAmountElement = document.createElement('p');
    insertionAmountElement.id = 'insertion_amount';
    insertionAmountElement.innerText = `${moneyBox.totalAmount}원`;
    insertionAmountElement.className += "insertion_amount";
    insertionElement.appendChild(insertionAmountElement);
    this._event.updateInsertionElement.add(
      this._updateInsertion.bind(insertionElement)
    );

    let retrunBtnElement = document.createElement('div');
    retrunBtnElement.innerText = "반환버튼";
    retrunBtnElement.className += "return_btn";
    retrunBtnElement.addEventListener('click', ()=>{
      this._event.returnMoney.dispatch();
    });

    let walletBoxElement = document.createElement('div');
    walletBoxElement.className += "wallet_box";

    for (let bill of bills) {
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

      billElement.addEventListener(
        'mousedown', 
        MoneyInsertionView._mouseDown.bind(bill));
    }

    let walletElement = document.createElement('div');
    walletElement.innerText = `지금 내 돈 : ${wallet.totalAmount}`;
    walletElement.className += "wallet";
    walletBoxElement.appendChild(walletElement);
    this._event.updateWalletElement.add(
      this._updateWallet.bind(walletElement)
    );

    docFragment.appendChild(insertionElement);
    docFragment.appendChild(retrunBtnElement);
    docFragment.appendChild(walletBoxElement);
    this._element.appendChild(docFragment);
  }

  /**
   * @private
   * @description update insertion
   * @param {MoneyBox} moneyBox moneyBox
   * @method MoneyInsertionView#_updateInsertion
   */
  _updateInsertion(moneyBox) {
    this.innerText = `${moneyBox.totalAmount}원`;
    this.id = 'insertion_amount';
  }

  /**
   * @private
   * @description update wallet
   * @param {Wallet} wallet wallet
   * @method MoneyInsertionView#_updateWallet
   */
  _updateWallet(wallet) {
    this.innerText = `지금 내 돈 : ${wallet.totalAmount}`;
  }

  /**
   * @private
   * @description mouseDown
   * @param {Event} evt evt
   * @method MoneyInsertionView#_mouseDown
   */
  static _mouseDown(evt) {
    const container = evt.target.cloneNode(true);
    MoneyInsertionView.target = this;
    container.id = 'cursor_element';
    container.style.display = 'none';
    container.style.position = 'absolute';
    container.style.top = `${evt.pageY-20}px`;
    container.style.left = `${evt.pageX-20}px`;
    container.style.display = 'block';
    document.body.appendChild(container);
    document.addEventListener(
      'mousemove',
      MoneyInsertionView._mouseMove
    );
    document.addEventListener(
      'mouseup',
      MoneyInsertionView._mouseUp
    );

    MoneyInsertionView._event.drawWallet.dispatch(MoneyInsertionView.target);
  }

  /**
   * @private
   * @description mouseMove
   * @param {Event} evt evt
   * @method MoneyInsertionView#_mouseMove
   */
  static _mouseMove(evt) { 
    const container = document.querySelector('#cursor_element');
    if (!container) {
      return;
    }
    container.style.top = `${evt.pageY-20}px`;
    container.style.left = `${evt.pageX-20}px`;
  }

  /**
   * @private
   * @description mouseUp
   * @method MoneyInsertionView#_mouseUp
   */
  static _mouseUp() {
    const container = document.querySelector('#cursor_element');
    const insertionAmount = document.querySelector('#insertion_amount');
    if (!container) {
      return;
    }

    if (insertionAmount) {
      const rect1 = container.getBoundingClientRect();
      const rect2 = insertionAmount.getBoundingClientRect();

      if (MoneyInsertionView._isCollision(rect1, rect2)) {
        MoneyInsertionView._event.insertMoney.dispatch(MoneyInsertionView.target, MoneyInsertionView._isCollision(rect1, rect2));
      }
      MoneyInsertionView.target = null;
    }

    document.body.removeChild(container);
    document.removeEventListener(
      'mousemove',
      MoneyInsertionView._mouseMove
    );
    document.removeEventListener(
      'mouseup',
      MoneyInsertionView._mouseUp
    );
  }

  /**
   * @private
   * @description _isCollision
   * @param {Object} rect1 rect1
   * @param {Object} rect2 rect2
   * @return {Boolean} is collision between two rects
   * @method MoneyInsertionView#_isCollision
   */
  static _isCollision(rect1, rect2) {
    return !(rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom);
  }
}

export default MoneyInsertionView;
