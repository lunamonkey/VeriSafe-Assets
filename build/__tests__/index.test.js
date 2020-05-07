"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
test('Assets is not null', function () {
    expect(index_1.assets).not.toBeNull();
    expect(index_1.assets.length).not.toBeNull();
    expect(index_1.assets.length).toBeGreaterThan(10);
});
//# sourceMappingURL=index.test.js.map