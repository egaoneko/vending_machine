import signals from 'signals';

export default {
  // ProductDisplay
  selectProduct: new signals.Signal(),
  updateProduct: new signals.Signal(),
  updateProductElement: new signals.Signal(),

  // MoneyInsertion
  insertMoney: new signals.Signal(),
  returnMoney: new signals.Signal(),
  updateInsertion: new signals.Signal(),
  updateInsertionElement: new signals.Signal(),
  drawWallet: new signals.Signal(),
  updateWalletElement: new signals.Signal(),
  
  // Console
  writeConsole: new signals.Signal()
};
