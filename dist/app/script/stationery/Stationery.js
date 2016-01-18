(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    var Stationery = (function () {
        function Stationery(brandName, price, quantity, location) {
            this.brandName = brandName;
            this.price = price;
            this.quantity = quantity;
            this.location = location;
        }
        return Stationery;
    })();
    exports.Stationery = Stationery;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGlvbmVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvc2NyaXB0L3N0YXRpb25lcnkvU3RhdGlvbmVyeS50cyJdLCJuYW1lcyI6WyJTdGF0aW9uZXJ5IiwiU3RhdGlvbmVyeS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBQTtRQU1JQSxvQkFBWUEsU0FBaUJBLEVBQUVBLEtBQWFBLEVBQUVBLFFBQWdCQSxFQUFFQSxRQUFnQkE7WUFDNUVDLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBO1lBQzNCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNuQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0E7WUFDekJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBO1FBQzdCQSxDQUFDQTtRQUNMRCxpQkFBQ0E7SUFBREEsQ0FBQ0EsQUFaRCxJQVlDO0lBWlksa0JBQVUsYUFZdEIsQ0FBQSJ9