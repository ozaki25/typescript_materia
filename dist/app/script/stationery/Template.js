(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    var Template;
    (function (Template) {
        Template.StationeryTable = "<table id=\"stationeryTable\" class=\"table table-condensed table-striped\">" +
            "<thead>" +
            "<tr>" +
            "<th></th>" +
            "<th></th>" +
            "</tr>" +
            "</thead>" +
            "<tbody id=\"contents\">" +
            "</tbody>" +
            "</table>";
        Template.StationeryTableHeader = function (column) { return "<th>" + column.ja + "</th>"; };
        Template.StationeryTableRow = function (id, stationery) {
            return "<tr>" +
                "<td>" + stationery.brandName + "</td>" +
                "<td>" + stationery.price + "</td>" +
                "<td>" + stationery.quantity + "</td>" +
                "<td>" + stationery.location + "</td>" +
                "<td><a data-stationery-id=\"" + id + "\" class=\"btn btn-default btn-xs receive\" href=\"#\">入荷</a></td>" +
                "<td><a data-stationery-id=\"" + id + "\" class=\"btn btn-default btn-xs shipment\" href=\"#\">出荷</a></td>" +
                "</tr>";
        };
        Template.StationeryForm = "<form id=\"stationery_form\" class=\"form-horizontal\"></form>";
        Template.StationeryFormSubmit = "<div class=\"form-group\">" +
            "<div class=\"col-sm-offset-2 col-sm-10\">" +
            "<button id=\"submit_stationery\" class=\"btn btn-default\">作成</button>" +
            "</div>" +
            "</div>";
        Template.StationeryFormItem = function (column) {
            return "<div class=\"form-group\">" +
                "<label class=\"col-sm-2 control-label\">" + column.ja + "</label>" +
                "<div class=\"col-sm-10\">" +
                "<input type=\"text\" class=\"form-control\" name=\"" + column.en + "\">" +
                "</div>" +
                "</div>";
        };
    })(Template = exports.Template || (exports.Template = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL3NjcmlwdC9zdGF0aW9uZXJ5L1RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbIlRlbXBsYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFBLElBQWlCLFFBQVEsQ0EyQ3hCO0lBM0NELFdBQWlCLFFBQVEsRUFBQyxDQUFDO1FBQ1pBLHdCQUFlQSxHQUN0QkEsOEVBQThFQTtZQUM1RUEsU0FBU0E7WUFDUEEsTUFBTUE7WUFDSkEsV0FBV0E7WUFDWEEsV0FBV0E7WUFDYkEsT0FBT0E7WUFDVEEsVUFBVUE7WUFDVkEseUJBQXlCQTtZQUN6QkEsVUFBVUE7WUFDWkEsVUFBVUEsQ0FBQ0E7UUFFSkEsOEJBQXFCQSxHQUFHQSxVQUFDQSxNQUFNQSxJQUFhQSxPQUFBQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQSxFQUFFQSxHQUFHQSxPQUFPQSxFQUE1QkEsQ0FBNEJBLENBQUFBO1FBRXhFQSwyQkFBa0JBLEdBQUdBLFVBQUNBLEVBQUVBLEVBQUVBLFVBQVVBO1lBQzNDQSxNQUFNQSxDQUFDQSxNQUFNQTtnQkFDSkEsTUFBTUEsR0FBR0EsVUFBVUEsQ0FBQ0EsU0FBU0EsR0FBR0EsT0FBT0E7Z0JBQ3ZDQSxNQUFNQSxHQUFHQSxVQUFVQSxDQUFDQSxLQUFLQSxHQUFHQSxPQUFPQTtnQkFDbkNBLE1BQU1BLEdBQUdBLFVBQVVBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BO2dCQUN0Q0EsTUFBTUEsR0FBR0EsVUFBVUEsQ0FBQ0EsUUFBUUEsR0FBR0EsT0FBT0E7Z0JBQ3RDQSw4QkFBOEJBLEdBQUdBLEVBQUVBLEdBQUdBLG9FQUFvRUE7Z0JBQzFHQSw4QkFBOEJBLEdBQUdBLEVBQUVBLEdBQUdBLHFFQUFxRUE7Z0JBQzdHQSxPQUFPQSxDQUFBQTtRQUNsQkEsQ0FBQ0EsQ0FBQUE7UUFFVUEsdUJBQWNBLEdBQVdBLGdFQUFnRUEsQ0FBQ0E7UUFFMUZBLDZCQUFvQkEsR0FDekJBLDRCQUE0QkE7WUFDMUJBLDJDQUEyQ0E7WUFDekNBLHdFQUF3RUE7WUFDMUVBLFFBQVFBO1lBQ1ZBLFFBQVFBLENBQUNBO1FBRUpBLDJCQUFrQkEsR0FBR0EsVUFBQ0EsTUFBTUE7WUFDbkNBLE1BQU1BLENBQUNBLDRCQUE0QkE7Z0JBQ3pCQSwwQ0FBMENBLEdBQUdBLE1BQU1BLENBQUNBLEVBQUVBLEdBQUdBLFVBQVVBO2dCQUNuRUEsMkJBQTJCQTtnQkFDekJBLHFEQUFxREEsR0FBR0EsTUFBTUEsQ0FBQ0EsRUFBRUEsR0FBR0EsS0FBS0E7Z0JBQzNFQSxRQUFRQTtnQkFDVkEsUUFBUUEsQ0FBQ0E7UUFDckJBLENBQUNBLENBQUFBO0lBQ0xBLENBQUNBLEVBM0NnQixRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQTJDeEIifQ==