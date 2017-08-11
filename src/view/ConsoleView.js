/**
 * @description ConsoleView Class
 * @class ConsoleView
 */
class ConsoleView {

  /**
   * @description ConsoleView constructor.
   * @param {Element} vmElement vending machine element
   * @constructs ConsoleView
   */
  constructor(vmElement) {
    if (!vmElement || !(vmElement instanceof Element)) {
      throw new Error("Can not found element.");
    }

    this._element = vmElement.querySelectorAll('.console')[0];

    if (!this._element) {
      throw new Error("Can not found element.");
    }

    this._init();
  }

  /**
   * @private
   * @description init
   * @method ConsoleView#_init
   */
  _init() {
    let docFragment = document.createDocumentFragment();

    let consoleElement = document.createElement('div');
    consoleElement.className += "console";
    docFragment.appendChild(consoleElement);
    this._element.appendChild(docFragment);
  }
}

export default ConsoleView;
