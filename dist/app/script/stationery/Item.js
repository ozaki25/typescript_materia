(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    var Item;
    (function (Item) {
        Item.items = [
            { ja: "商品名", en: "brandName" },
            { ja: "値段", en: "price" },
            { ja: "在庫数", en: "quantity" },
            { ja: "保管場所", en: "location" }
        ];
    })(Item = exports.Item || (exports.Item = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvc2NyaXB0L3N0YXRpb25lcnkvSXRlbS50cyJdLCJuYW1lcyI6WyJJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFBLElBQWlCLElBQUksQ0FPcEI7SUFQRCxXQUFpQixJQUFJLEVBQUMsQ0FBQztRQUNSQSxVQUFLQSxHQUFHQTtZQUNmQSxFQUFFQSxFQUFFQSxFQUFFQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxXQUFXQSxFQUFFQTtZQUM5QkEsRUFBRUEsRUFBRUEsRUFBRUEsSUFBSUEsRUFBRUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUE7WUFDekJBLEVBQUVBLEVBQUVBLEVBQUVBLEtBQUtBLEVBQUVBLEVBQUVBLEVBQUVBLFVBQVVBLEVBQUVBO1lBQzdCQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQSxFQUFFQSxFQUFFQSxVQUFVQSxFQUFFQTtTQUNqQ0EsQ0FBQUE7SUFDTEEsQ0FBQ0EsRUFQZ0IsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBT3BCIn0=