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
            "</tr>" +
            "</thead>" +
            "<tbody id=\"contents\">" +
            "</tbody>" +
            "</table>";
        Template.StationeryTableHeader = function (columnName) { return "<th>" + columnName + "</th>"; };
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
        Template.StationeryFormItem = function (columnNameJa, columnNameEn) {
            return "<div class=\"form-group\">" +
                "<label class=\"col-sm-2 control-label\">" + columnNameJa + "</label>" +
                "<div class=\"col-sm-10\">" +
                "<input type=\"text\" class=\"form-control\" name=\"" + columnNameEn + "\">" +
                "</div>" +
                "</div>";
        };
        Template.StationeryFormErrorMsg = function (msg) { return "<p class=\"help-block\">" + msg + "</p>"; };
    })(Template = exports.Template || (exports.Template = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL3NjcmlwdC9zdGF0aW9uZXJ5L1RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbIlRlbXBsYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUVBLElBQWlCLFFBQVEsQ0EyQ3hCO0lBM0NELFdBQWlCLFFBQVEsRUFBQyxDQUFDO1FBQ1pBLHdCQUFlQSxHQUN0QkEsOEVBQThFQTtZQUM1RUEsU0FBU0E7WUFDUEEsTUFBTUE7WUFDTkEsT0FBT0E7WUFDVEEsVUFBVUE7WUFDVkEseUJBQXlCQTtZQUN6QkEsVUFBVUE7WUFDWkEsVUFBVUEsQ0FBQ0E7UUFFSkEsOEJBQXFCQSxHQUFHQSxVQUFDQSxVQUFrQkEsSUFBYUEsT0FBQUEsTUFBTUEsR0FBR0EsVUFBVUEsR0FBR0EsT0FBT0EsRUFBN0JBLENBQTZCQSxDQUFBQTtRQUVyRkEsMkJBQWtCQSxHQUFHQSxVQUFDQSxFQUFVQSxFQUFFQSxVQUFzQkE7WUFDL0RBLE1BQU1BLENBQUNBLE1BQU1BO2dCQUNKQSxNQUFNQSxHQUFHQSxVQUFVQSxDQUFDQSxTQUFTQSxHQUFHQSxPQUFPQTtnQkFDdkNBLE1BQU1BLEdBQUdBLFVBQVVBLENBQUNBLEtBQUtBLEdBQUdBLE9BQU9BO2dCQUNuQ0EsTUFBTUEsR0FBR0EsVUFBVUEsQ0FBQ0EsUUFBUUEsR0FBR0EsT0FBT0E7Z0JBQ3RDQSxNQUFNQSxHQUFHQSxVQUFVQSxDQUFDQSxRQUFRQSxHQUFHQSxPQUFPQTtnQkFDdENBLDhCQUE4QkEsR0FBR0EsRUFBRUEsR0FBR0Esb0VBQW9FQTtnQkFDMUdBLDhCQUE4QkEsR0FBR0EsRUFBRUEsR0FBR0EscUVBQXFFQTtnQkFDN0dBLE9BQU9BLENBQUFBO1FBQ2xCQSxDQUFDQSxDQUFBQTtRQUVVQSx1QkFBY0EsR0FBV0EsZ0VBQWdFQSxDQUFDQTtRQUUxRkEsNkJBQW9CQSxHQUN6QkEsNEJBQTRCQTtZQUMxQkEsMkNBQTJDQTtZQUN6Q0Esd0VBQXdFQTtZQUMxRUEsUUFBUUE7WUFDVkEsUUFBUUEsQ0FBQ0E7UUFFSkEsMkJBQWtCQSxHQUFHQSxVQUFDQSxZQUFvQkEsRUFBRUEsWUFBb0JBO1lBQ3ZFQSxNQUFNQSxDQUFDQSw0QkFBNEJBO2dCQUN6QkEsMENBQTBDQSxHQUFHQSxZQUFZQSxHQUFHQSxVQUFVQTtnQkFDdEVBLDJCQUEyQkE7Z0JBQ3pCQSxxREFBcURBLEdBQUdBLFlBQVlBLEdBQUdBLEtBQUtBO2dCQUM5RUEsUUFBUUE7Z0JBQ1ZBLFFBQVFBLENBQUNBO1FBQ3JCQSxDQUFDQSxDQUFBQTtRQUVVQSwrQkFBc0JBLEdBQUdBLFVBQUNBLEdBQVdBLElBQWFBLE9BQUFBLDBCQUEwQkEsR0FBR0EsR0FBR0EsR0FBR0EsTUFBTUEsRUFBekNBLENBQXlDQSxDQUFBQTtJQUMxR0EsQ0FBQ0EsRUEzQ2dCLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBMkN4QiJ9