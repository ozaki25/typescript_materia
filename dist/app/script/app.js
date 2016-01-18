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
            new Stationery_1.Stationery("鉛筆", 100, 500, "東京"),
            new Stationery_1.Stationery("鉛筆", 100, 500, "千葉"),
            new Stationery_1.Stationery("鉛筆", 100, 500, "埼玉"),
            new Stationery_1.Stationery("ノート", 100, 500, "東京"),
            new Stationery_1.Stationery("ノート", 100, 500, "千葉"),
            new Stationery_1.Stationery("ノート", 100, 500, "埼玉"),
            new Stationery_1.Stationery("消しゴム", 100, 500, "東京"),
            new Stationery_1.Stationery("消しゴム", 100, 500, "千葉"),
            new Stationery_1.Stationery("消しゴム", 100, 500, "埼玉")
        ];
        stationeryList.forEach(function (stationery) {
            $("#contents").append("<tr><td>" + stationery.brandName + "</td><td>" + stationery.price + "</td><td>" + stationery.quantity + "</td><td>" + stationery.location + "</td></tr>");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9zY3JpcHQvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQUEsSUFBWSxDQUFDLFdBQU0sUUFBUSxDQUFDLENBQUE7SUFDNUIsMkJBQXlCLHlCQUF5QixDQUFDLENBQUE7SUFFbkQsQ0FBQyxDQUFDO1FBQ0UsSUFBSSxjQUFjLEdBQUc7WUFDakIsSUFBSSx1QkFBVSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztZQUNwQyxJQUFJLHVCQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQ3BDLElBQUksdUJBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7WUFDcEMsSUFBSSx1QkFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztZQUNyQyxJQUFJLHVCQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQ3JDLElBQUksdUJBQVUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7WUFDckMsSUFBSSx1QkFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztZQUN0QyxJQUFJLHVCQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQ3RDLElBQUksdUJBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7U0FDeEMsQ0FBQztRQUVILGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQSxVQUFVO1lBQzdCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLFVBQVUsQ0FBQyxRQUFRLEdBQUcsV0FBVyxHQUFHLFVBQVUsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDckwsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQyJ9