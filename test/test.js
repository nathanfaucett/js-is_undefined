var assert = require("assert"),
    isUndefined = require("../src/index");


describe("isUndefined", function() {
    it("should return true when the value is a null", function() {
        assert.equal(isUndefined(null), false);
        assert.equal(isUndefined({}), false);
        assert.equal(isUndefined([]), false);
        assert.equal(isUndefined(""), false);
        assert.equal(isUndefined(/./), false);
        assert.equal(isUndefined(0), false);
        assert.equal(isUndefined(function noop() {}), false);

        assert.equal(isUndefined(undefined), true);
    });
});
