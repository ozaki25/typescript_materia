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
        Stationery.prototype.receive = function () {
            this.quantity += 10;
        };
        Stationery.prototype.shipment = function () {
            this.quantity -= 10;
        };
        return Stationery;
    })();
    exports.Stationery = Stationery;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGlvbmVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvc2NyaXB0L3N0YXRpb25lcnkvU3RhdGlvbmVyeS50cyJdLCJuYW1lcyI6WyJTdGF0aW9uZXJ5IiwiU3RhdGlvbmVyeS5jb25zdHJ1Y3RvciIsIlN0YXRpb25lcnkucmVjZWl2ZSIsIlN0YXRpb25lcnkuc2hpcG1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBRUE7UUFNSUEsb0JBQVlBLFNBQWlCQSxFQUFFQSxLQUFhQSxFQUFFQSxRQUFnQkEsRUFBRUEsUUFBZ0JBO1lBQzVFQyxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQTtZQUMzQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDbkJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBO1lBQ3pCQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxRQUFRQSxDQUFDQTtRQUM3QkEsQ0FBQ0E7UUFFREQsNEJBQU9BLEdBQVBBO1lBQ0lFLElBQUlBLENBQUNBLFFBQVFBLElBQUlBLEVBQUVBLENBQUNBO1FBQ3hCQSxDQUFDQTtRQUVERiw2QkFBUUEsR0FBUkE7WUFDSUcsSUFBSUEsQ0FBQ0EsUUFBUUEsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDeEJBLENBQUNBO1FBQ0xILGlCQUFDQTtJQUFEQSxDQUFDQSxBQXBCRCxJQW9CQztJQXBCWSxrQkFBVSxhQW9CdEIsQ0FBQSJ9