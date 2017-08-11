import chai from "chai";
import * as index from "../src/index";
import {version} from "../package.json"; 

let assert = chai.assert;

describe('Index', () => {
  it('Index', () => {
    assert.strictEqual(index.version, version);
  });
});
