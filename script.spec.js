const { translate, vowelFirst } = require("./script");

describe("testing translate function", function() {
  it("returns word", function() {
    let result = translate("word");
    expect(result).toBe("ordway");
  });
  it("returns lowercase", function() {
    let result = translate("Word");
    expect(result).toBe("ordway");
  });
  it("returns with -way if starting with vowel", function() {
    let result = translate("ord");
    expect(result).toBe("ordway");
  });

  it("startys with const.", function() {
    let result = translate("word");
    expect(result).toBe("ordway");
  });
});

describe("testing if first letter is a vowel", function() {
  it("starts with a vowel", function() {
    let result = vowelFirst("ord");
    expect(result).toBe(true);
  });
});
