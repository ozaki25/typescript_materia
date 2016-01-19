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
        };
        Stationery.prototype.setDefault = function () {
            if (!this.brandName.trim())
                this.brandName = "";
            if (!this.price)
                this.price = 0;
            if (!this.quantity)
                this.quantity = 0;
            if (!this.location.trim())
                this.location = "";
            return this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGlvbmVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvc2NyaXB0L3N0YXRpb25lcnkvU3RhdGlvbmVyeS50cyJdLCJuYW1lcyI6WyJTdGF0aW9uZXJ5IiwiU3RhdGlvbmVyeS5jb25zdHJ1Y3RvciIsIlN0YXRpb25lcnkudmFsaWQiLCJTdGF0aW9uZXJ5LnNldERlZmF1bHQiLCJTdGF0aW9uZXJ5LnJlY2VpdmUiLCJTdGF0aW9uZXJ5LnNoaXBtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUVBO1FBTUlBLG9CQUFZQSxTQUFpQkEsRUFBRUEsS0FBYUEsRUFBRUEsUUFBZ0JBLEVBQUVBLFFBQWdCQTtZQUM1RUMsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0E7WUFDM0JBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBO1lBQ25CQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxRQUFRQSxDQUFDQTtZQUN6QkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0E7UUFDN0JBLENBQUNBO1FBRURELDBCQUFLQSxHQUFMQTtZQUNJRSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUNoR0EsQ0FBQ0E7UUFFREYsK0JBQVVBLEdBQVZBO1lBQ0lHLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO2dCQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxFQUFFQSxDQUFDQTtZQUMvQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7Z0JBQUNBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBO1lBQy9CQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtnQkFBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDckNBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO2dCQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxFQUFFQSxDQUFDQTtZQUM3Q0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDaEJBLENBQUNBO1FBRURILDRCQUFPQSxHQUFQQTtZQUNJSSxJQUFJQSxDQUFDQSxRQUFRQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUN4QkEsQ0FBQ0E7UUFFREosNkJBQVFBLEdBQVJBO1lBQ0lLLElBQUlBLENBQUNBLFFBQVFBLElBQUlBLEVBQUVBLENBQUNBO1FBQ3hCQSxDQUFDQTtRQUNMTCxpQkFBQ0E7SUFBREEsQ0FBQ0EsQUFoQ0QsSUFnQ0M7SUFoQ1ksa0JBQVUsYUFnQ3RCLENBQUEifQ==