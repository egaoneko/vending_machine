/**
 * @description ProductDisplayView Class
 * @class ProductDisplayView
 */
class ProductDisplayView {

  /**
   * @description ProductDisplayView constructor.
   * @param {Element} vmElement vending machine element
   * @param {Product} products products
   * @constructs ProductDisplayView
   */
  constructor(vmElement, products) {
    if(!vmElement || !(vmElement instanceof Element)) {
      throw new Error("Can not found element.");
    }

    this._element = vmElement.querySelectorAll('.product_display')[0];

    if (!this._element) {
      throw new Error("Can not found element.");
    }

    this._products = products;
    this._initProducts(this._products);
  }

  /**
   * @private
   * @description init products
   * @param {Product} products products
   * @method ProductDisplayView#_initProducts
   */
  _initProducts(products) {
    let docFragment = document.createDocumentFragment();
    for(let product of products) {
      let productElement = document.createElement('div');
      productElement.id = `product_${product.id}`;
      productElement.className += "product";

      let productNameElement = document.createElement('div');
      productNameElement.innerText = product.name;
      productNameElement.className += "product_name";
      
      let productPriceElement = document.createElement('div');
      productPriceElement.innerText = product.price + ` (${product.stock})`;
      productPriceElement.className += "product_price";
      
      productElement.appendChild(productNameElement);
      productElement.appendChild(productPriceElement);
      docFragment.appendChild(productElement);
    }
    this._element.appendChild(docFragment);
  }
}

export default ProductDisplayView;
