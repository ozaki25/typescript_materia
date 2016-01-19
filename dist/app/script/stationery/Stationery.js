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
        Stationery.prototype.toHtml = function (id) {
            return "<tr>" +
                "<td>" + this.brandName + "</td>" +
                "<td>" + this.price + "</td>" +
                "<td>" + this.quantity + "</td>" +
                "<td>" + this.location + "</td>" +
                "<td><a data-stationery-id=\"" + id + "\" class=\"btn btn-default btn-xs receive\" href=\"#\">入荷</a></td>" +
                "<td><a data-stationery-id=\"" + id + "\" class=\"btn btn-default btn-xs shipment\" href=\"#\">出荷</a></td>" +
                "</tr>";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGlvbmVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvc2NyaXB0L3N0YXRpb25lcnkvU3RhdGlvbmVyeS50cyJdLCJuYW1lcyI6WyJTdGF0aW9uZXJ5IiwiU3RhdGlvbmVyeS5jb25zdHJ1Y3RvciIsIlN0YXRpb25lcnkudG9IdG1sIiwiU3RhdGlvbmVyeS5yZWNlaXZlIiwiU3RhdGlvbmVyeS5zaGlwbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBQTtRQU1JQSxvQkFBWUEsU0FBaUJBLEVBQUVBLEtBQWFBLEVBQUVBLFFBQWdCQSxFQUFFQSxRQUFnQkE7WUFDNUVDLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBO1lBQzNCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNuQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0E7WUFDekJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBO1FBQzdCQSxDQUFDQTtRQUVERCwyQkFBTUEsR0FBTkEsVUFBT0EsRUFBVUE7WUFDYkUsTUFBTUEsQ0FBQ0EsTUFBTUE7Z0JBQ1RBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLE9BQU9BO2dCQUNqQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsT0FBT0E7Z0JBQzdCQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxPQUFPQTtnQkFDaENBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BO2dCQUNoQ0EsOEJBQThCQSxHQUFHQSxFQUFFQSxHQUFHQSxvRUFBb0VBO2dCQUMxR0EsOEJBQThCQSxHQUFHQSxFQUFFQSxHQUFHQSxxRUFBcUVBO2dCQUMzR0EsT0FBT0EsQ0FBQUE7UUFDZkEsQ0FBQ0E7UUFFREYsNEJBQU9BLEdBQVBBO1lBQ0lHLElBQUlBLENBQUNBLFFBQVFBLElBQUlBLEVBQUVBLENBQUNBO1FBQ3hCQSxDQUFDQTtRQUVESCw2QkFBUUEsR0FBUkE7WUFDSUksSUFBSUEsQ0FBQ0EsUUFBUUEsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDeEJBLENBQUNBO1FBQ0xKLGlCQUFDQTtJQUFEQSxDQUFDQSxBQS9CRCxJQStCQztJQS9CWSxrQkFBVSxhQStCdEIsQ0FBQSJ9