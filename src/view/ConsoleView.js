/**
 * @description ConsoleView Class
 * @class ConsoleView
 */
class ConsoleView {

  /**
   * @description ConsoleView constructor.
   * @param {Element} vmElement vending machine element
   * @param {Object} event event
   * @constructs ConsoleView
   */
  constructor(vmElement, event) {
    if (!vmElement || !(vmElement instanceof Element)) {
      throw new Error("Can not found element.");
    }

    this._element = vmElement.querySelectorAll('.console')[0];

    if (!this._element) {
      throw new Error("Can not found element.");
    }

    this._event = event;
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

    let consoleAreaElement = document.createElement('textarea');
    consoleAreaElement.className += "console_area";
    consoleAreaElement.disabled = true;
    consoleElement.appendChild(consoleAreaElement);
    this._event.writeConsole.add(this._writeConsole.bind(consoleAreaElement));

    docFragment.appendChild(consoleElement);
    this._element.appendChild(docFragment);
  }

  /**
   * @private
   * @description _writeConsole
   * @method ConsoleView#_writeConsole
   */
  _writeConsole(message) {
    this.innerHTML += `${message}\n`;
    this.scrollTop = this.scrollHeight;
  }
}

export default ConsoleView;
