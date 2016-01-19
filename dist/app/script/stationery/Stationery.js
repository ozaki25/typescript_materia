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
        Stationery.prototype.valid = function () {
            return !!this.brandName.trim() && !!this.price && !!this.quantity && !!this.location.trim();
            return true;
        };
        Stationery.prototype.blank = function (column) {
            return column.trim();
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGlvbmVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvc2NyaXB0L3N0YXRpb25lcnkvU3RhdGlvbmVyeS50cyJdLCJuYW1lcyI6WyJTdGF0aW9uZXJ5IiwiU3RhdGlvbmVyeS5jb25zdHJ1Y3RvciIsIlN0YXRpb25lcnkudmFsaWQiLCJTdGF0aW9uZXJ5LmJsYW5rIiwiU3RhdGlvbmVyeS5yZWNlaXZlIiwiU3RhdGlvbmVyeS5zaGlwbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFFQTtRQU1JQSxvQkFBWUEsU0FBaUJBLEVBQUVBLEtBQWFBLEVBQUVBLFFBQWdCQSxFQUFFQSxRQUFnQkE7WUFDNUVDLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBO1lBQzNCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNuQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0E7WUFDekJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBO1FBQzdCQSxDQUFDQTtRQUVERCwwQkFBS0EsR0FBTEE7WUFDSUUsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFFNUZBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBQ2hCQSxDQUFDQTtRQUVERiwwQkFBS0EsR0FBTEEsVUFBTUEsTUFBTUE7WUFDUkcsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDekJBLENBQUNBO1FBRURILDRCQUFPQSxHQUFQQTtZQUNJSSxJQUFJQSxDQUFDQSxRQUFRQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUN4QkEsQ0FBQ0E7UUFFREosNkJBQVFBLEdBQVJBO1lBQ0lLLElBQUlBLENBQUNBLFFBQVFBLElBQUlBLEVBQUVBLENBQUNBO1FBQ3hCQSxDQUFDQTtRQUNMTCxpQkFBQ0E7SUFBREEsQ0FBQ0EsQUE5QkQsSUE4QkM7SUE5Qlksa0JBQVUsYUE4QnRCLENBQUEifQ==