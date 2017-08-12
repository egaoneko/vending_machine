/**
 * @description ProductDisplayView Class
 * @class ProductDisplayView
 */
class ProductDisplayView {

  /**
   * @description ProductDisplayView constructor.
   * @param {Element} vmElement vending machine element
   * @param {Object} event event
   * @param {Product} products products
   * @constructs ProductDisplayView
   */
  constructor(vmElement, event, products) {
    if (!vmElement || !(vmElement instanceof Element)) {
      throw new Error("Can not found element.");
    }

    this._element = vmElement.querySelectorAll('.product_display')[0];

    if (!this._element) {
      throw new Error("Can not found element.");
    }

    this._event = event;

    this._products = products;
    this._initProducts(this._products);
  }

  /**
   * @private
   * @description init products
   * @param {Array} products products
   * @method ProductDisplayView#_initProducts
   */
  _initProducts(products) {
    let docFragment = document.createDocumentFragment();

    for (let product of products) {
      this._appendProduct(docFragment, product);
    }
    this._element.appendChild(docFragment);
    this._event.updateProductElement.add(this._updateProduct);
  }

  /**
   * @private
   * @description init products
   * @param {Product} product product
   * @param {Element} productElement productElement
   * @method ProductDisplayView#_initProducts
   */
  _updateProduct(product, productElement) {
    if(!product.hasStock()) {
      productElement.className += ' product_soldout';
    }
  }

  /**
   * @private
   * @description append Product
   * @param {Element} docFragment docFragment
   * @param {Product} product product
   * @method ProductDisplayView#_appendProduct
   */
  _appendProduct(docFragment, product) {
    let event = this._event;

    let productElement = document.createElement('div');
    productElement.id = `product_${product.id}`;
    productElement.className += "product";

    let productNameElement = document.createElement('div');
    productNameElement.innerText = product.name;
    productNameElement.className += "product_name";

    let productPriceElement = document.createElement('div');
    productPriceElement.innerText = product.price;
    productPriceElement.className += "product_price";

    productElement.appendChild(productNameElement);
    productElement.appendChild(productPriceElement);
    docFragment.appendChild(productElement);
    
    productElement.addEventListener('click', function (evt) {
      if (evt.target.className !== 'product_name' && evt.target.className !==
        'product_price') {
        return;
      }
      event.selectProduct.dispatch(this, productElement);
    }.bind(product));
  }
}

export default ProductDisplayView;
