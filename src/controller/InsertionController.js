/**
 * @description InsertionController Class
 * @class InsertionController
 */
class InsertionController {

  /**
   * @description InsertionController constructor.
   * @param {Object} event event
   * @param {VendingMachine} vendingMachine vendingMachine
   * @param {Wallet} wallet wallet
   * @constructs InsertionController
   */
  constructor(event, vendingMachine, wallet) {
    this._event = event;
    this._vendingMachine = vendingMachine;
    this._wallet = wallet;

    this._event.updateInsertion.add(this._updateInsertion.bind(this));
    this._event.insertMoney.add(this._insertMoney.bind(this));
    this._event.drawWallet.add(this._drawWallet.bind(this));
    this._event.returnMoney.add(this._returnMoney.bind(this));
  }

  /**
   * @private
   * @description updateInsertion
   * @param {Number} price price
   * @method InsertionController#_updateInsertion
   */
  _updateInsertion(price) {
    this._vendingMachine.moneyBox.totalAmount += price;
    this._event.updateInsertionElement.dispatch(this._vendingMachine.moneyBox);
  }

  /**
   * @private
   * @description updateInsertion
   * @param {Money} money money
   * @method InsertionController#_updateInsertion
   */
  _insertMoney(money) {
    if (!this._vendingMachine.isInsertionAvailable(money)) {
      this._returnMoney(money.amount);
      this._event.writeConsole.dispatch('더 이상 돈이 들어가지 않습니다.');
      return;
    }

    this._updateInsertion(money.amount);
    const size = this._vendingMachine.moneyBox.moneyTypeSizeMap.get(money.type);
    this._vendingMachine.moneyBox.moneyTypeSizeMap.set(money.type, size + 1);
    this._event.writeConsole.dispatch(`${money.amount}을 넣었습니다.`);
  }

  /**
   * @private
   * @description drawWallet
   * @param {Money} money money
   * @method InsertionController#_drawWallet
   */
  _drawWallet(money) {
    this._wallet.totalAmount -= money.amount;
    this._event.updateWalletElement.dispatch(this._wallet);
  }

  /**
   * @private
   * @description _returnMoney
   * @param {Number} amount amount
   * @method InsertionController#_returnMoney
   */
  _returnMoney(amount) {
    if (amount !== undefined) {
      this._wallet.totalAmount += amount;
      this._event.writeConsole.dispatch('더이상 넣을 수 없는 돈이 반환되었습니다.');
    } else {
      this._wallet.totalAmount += this._vendingMachine.moneyBox.totalAmount;
      this._vendingMachine.moneyBox.totalAmount = 0;
      this._vendingMachine.moneyBox.resetMoneyTypeSizeMap();
      this._event.updateInsertionElement.dispatch(this._vendingMachine.moneyBox);
      this._event.writeConsole.dispatch('돈이 반환되었습니다.');
    }
    this._event.updateWalletElement.dispatch(this._wallet);
  }
}

export default InsertionController;
