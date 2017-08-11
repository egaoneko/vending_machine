import chai from "chai";
import * as vm from "../src/index";
import {version} from "../package.json"; 

let assert = chai.assert;

describe('Index', () => {

  it('VendingMachineComponent', () => {
    assert.property(vm, "VendingMachineComponent");
  });

  it('version', () => {
    assert.strictEqual(vm.version, version);
  });
});
