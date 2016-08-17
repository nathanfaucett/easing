var tape = require("tape"),
    easing = require("..");


tape("easing functions", function(assert) {

    assert.equals(easing.inQuad(0, 0, 0, 50, 1000), 0);
    assert.equals(easing.inQuad(0.25, 250, 0, 50, 1000), 3.125);
    assert.equals(easing.inQuad(0.5, 500, 0, 50, 1000), 12.5);
    assert.equals(easing.inQuad(0.75, 750, 0, 50, 1000), 28.125);
    assert.equals(easing.inQuad(1, 1000, 0, 50, 1000), 50);

    assert.end();
});
