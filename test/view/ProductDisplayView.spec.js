import chai from "chai";
import ProductDisplayView from "../../src/view/ProductDisplayView";
import productService from '../../src/service/ProductService.js';

let assert = chai.assert;

describe('ProductDisplayView', () => {
  let productDisplayView;
  let element;
  let vmComponent;
  let products;

  beforeEach(() => {
    vmComponent = document.createElement('div');
    element = document.createElement('div');
    element.className += "product_display";
    products = productService.getProducts();

    vmComponent.appendChild(element);
    productDisplayView = new ProductDisplayView(vmComponent, products);
  });

  describe('Create', () => {
    it('constructor', () => {
      assert.strictEqual(productDisplayView._products, products);
    });

    it('element', () => {
      assert.strictEqual(productDisplayView._element, element);
    });

    it('element with wrong id', () => {
      assert.throws(()=>productDisplayView = new ProductDisplayView('test'), Error, "Can not found element.");
    });
  });

  describe('Method', () => {
  });
});
