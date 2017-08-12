import chai from "chai";
import ConsoleView from "../../src/view/ConsoleView";
import event from '../../src/event';

let assert = chai.assert;

describe('ConsoleView', () => {
  let consoleView;
  let element;
  let vmComponent;

  beforeEach(() => {
    vmComponent = document.createElement('div');
    element = document.createElement('div');
    element.className += "console";

    vmComponent.appendChild(element);
    consoleView = new ConsoleView(vmComponent, event);
  });

  describe('Create', () => {
    it('constructor', () => {
      assert.strictEqual(consoleView._event, event);
    });

    it('element', () => {
      assert.strictEqual(consoleView._element, element);
    });

    it('element with wrong id', () => {
      assert.throws(()=>consoleView = new ConsoleView('test'), Error, "Can not found element.");
    });
  });

  describe('Method', () => {
  });
});
