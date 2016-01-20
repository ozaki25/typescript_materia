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
        Item.columns = [
            { "ja": "商品名", "en": "brandName" },
            { "ja": "値段", "en": "price" },
            { "ja": "在庫数", "en": "quantity" },
            { "ja": "保管場所", "en": "location" }
        ];
        Item.brandNames = ["鉛筆", "ノート", "消しゴム"];
        Item.locations = ["東京", "千葉", "埼玉"];
    })(Item = exports.Item || (exports.Item = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvc2NyaXB0L3N0YXRpb25lcnkvSXRlbS50cyJdLCJuYW1lcyI6WyJJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFBLElBQWlCLElBQUksQ0FTbkI7SUFURixXQUFpQixJQUFJLEVBQUMsQ0FBQztRQUNSQSxZQUFPQSxHQUFHQTtZQUNqQkEsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsRUFBRUEsV0FBV0EsRUFBRUE7WUFDbENBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBO1lBQzdCQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxFQUFFQSxVQUFVQSxFQUFFQTtZQUNqQ0EsRUFBRUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUE7U0FDckNBLENBQUFBO1FBQ1VBLGVBQVVBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLE1BQU1BLENBQUNBLENBQUFBO1FBQ2xDQSxjQUFTQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFBQTtJQUM1Q0EsQ0FBQ0EsRUFUZSxJQUFJLEdBQUosWUFBSSxLQUFKLFlBQUksUUFTbkIifQ==