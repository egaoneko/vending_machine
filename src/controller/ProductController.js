/**
 * @description ProductController Class
 * @class ProductController
 */
class ProductController {

  /**
   * @description ProductController constructor.
   * @param {Object} event event
   * @param {Object} VendingMachine vendingMachine
   * @constructs ProductController
   */
  constructor(event, vendingMachine) {
    this._event = event;
    this._vendingMachine = vendingMachine;
    
    event.selectProduct.add(this._selectProduct.bind(this));
  }

   /**
   * @private
   * @description selectProduct
   * @param {Product} product product
   * @param {Element} productElement product element
   * @method ProductController#_selectProduct
   */
  _selectProduct(product, productElement) {
    this._event.writeConsole.dispatch(`${product.name}을(를) 선택하셨습니다.`);
    if(!product.hasStock()) {
      this._event.writeConsole.dispatch(`${product.name}은(는) 품절입니다.`);
      return;
    }

    if(!this._vendingMachine.isSaleAvailable(product.price)) {
      this._event.writeConsole.dispatch('돈이 모자랍니다.');
      return;
    }

    product.stock -= 1;
    this._event.updateInsertion.dispatch(-product.price);
    this._event.updateProductElement.dispatch(product, productElement);
    this._event.writeConsole.dispatch(`${product.name}이(가) 나왔다.`);
  }
}

export default ProductController;
