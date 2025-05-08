const chai = require("chai");
const expect = chai.expect;
const add = require("../src/add");

describe("add function", () => {
  it("should return 3 for add(1, 2)", () => {
    expect(add(1, 2)).to.equal(3);
  });

  it("should return 0 for add(-1, 1)", () => {
    expect(add(-1, 1)).to.equal(0);
  });
});
