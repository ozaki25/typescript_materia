(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "jquery", "./stationery/Stationery"], factory);
    }
})(function (require, exports) {
    var $ = require("jquery");
    var Stationery_1 = require("./stationery/Stationery");
    $(function () {
        var stationeryList = [
            new Stationery_1.Stationery("鉛筆", 100, 500, "東京")
        ];
        stationeryList.forEach(function (stationery) {
            $("#contents").append("<tr><td>" + stationery.brandName + "</td><td>" + stationery.price + "</td><td>" + stationery.quantity + "</td><td>" + stationery.location + "</td></tr>");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9zY3JpcHQvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQUEsSUFBWSxDQUFDLFdBQU0sUUFBUSxDQUFDLENBQUE7SUFDNUIsMkJBQXlCLHlCQUF5QixDQUFDLENBQUE7SUFFbkQsQ0FBQyxDQUFDO1FBQ0UsSUFBSSxjQUFjLEdBQUc7WUFDakIsSUFBSSx1QkFBVSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztTQUN0QyxDQUFDO1FBRUgsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7WUFDN0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDLFFBQVEsR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUNyTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDIn0=