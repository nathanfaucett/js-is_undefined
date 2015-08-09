var tape = require("tape"),
    isUndefined = require("..");


tape("isUndefined(value) should return true when the value is a null", function(assert) {
    assert.equal(isUndefined(null), false);
    assert.equal(isUndefined({}), false);
    assert.equal(isUndefined([]), false);
    assert.equal(isUndefined(""), false);
    assert.equal(isUndefined(/./), false);
    assert.equal(isUndefined(0), false);
    assert.equal(isUndefined(function noop() {}), false);

    assert.equal(isUndefined(undefined), true);

    assert.end();
});
