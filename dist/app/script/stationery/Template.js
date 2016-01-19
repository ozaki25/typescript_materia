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
            "<th>商品名</th>" +
            "<th>値段</th>" +
            "<th>在庫数</th>" +
            "<th>保管場所</th>" +
            "<th></th>" +
            "<th></th>" +
            "</tr>" +
            "</thead>" +
            "<tbody id=\"contents\">" +
            "</tbody>" +
            "</table>";
        Template.StationeryForm = "<form id=\"stationery_form\" class=\"form-horizontal\">" +
            "</form>";
        Template.StationeryFormSubmit = "<div class=\"form-group\">" +
            "<div class=\"col-sm-offset-2 col-sm-10\">" +
            "<button id=\"submit_stationery\" class=\"btn btn-default\">作成</button>" +
            "</div>" +
            "</div>";
        Template.StationeryFormItem = function (item) {
            return "<div class=\"form-group\">" +
                "<label class=\"col-sm-2 control-label\">" + item.ja + "</label>" +
                "<div class=\"col-sm-10\">" +
                "<input type=\"text\" class=\"form-control\" name=\"" + item.en + "\">" +
                "</div>" +
                "</div>";
        };
    })(Template = exports.Template || (exports.Template = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL3NjcmlwdC9zdGF0aW9uZXJ5L1RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbIlRlbXBsYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFBLElBQWlCLFFBQVEsQ0FvQ3hCO0lBcENELFdBQWlCLFFBQVEsRUFBQyxDQUFDO1FBQ1pBLHdCQUFlQSxHQUN0QkEsOEVBQThFQTtZQUM1RUEsU0FBU0E7WUFDUEEsTUFBTUE7WUFDSkEsY0FBY0E7WUFDZEEsYUFBYUE7WUFDYkEsY0FBY0E7WUFDZEEsZUFBZUE7WUFDZkEsV0FBV0E7WUFDWEEsV0FBV0E7WUFDWEEsT0FBT0E7WUFDVEEsVUFBVUE7WUFDVkEseUJBQXlCQTtZQUN6QkEsVUFBVUE7WUFDWkEsVUFBVUEsQ0FBQ0E7UUFFTkEsdUJBQWNBLEdBQ3JCQSx5REFBeURBO1lBQ3pEQSxTQUFTQSxDQUFDQTtRQUVIQSw2QkFBb0JBLEdBQ3pCQSw0QkFBNEJBO1lBQzFCQSwyQ0FBMkNBO1lBQ3pDQSx3RUFBd0VBO1lBQzFFQSxRQUFRQTtZQUNWQSxRQUFRQSxDQUFDQTtRQUVKQSwyQkFBa0JBLEdBQUdBLFVBQUNBLElBQUlBO1lBQ2pDQSxNQUFNQSxDQUFDQSw0QkFBNEJBO2dCQUN6QkEsMENBQTBDQSxHQUFHQSxJQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxVQUFVQTtnQkFDakVBLDJCQUEyQkE7Z0JBQ3pCQSxxREFBcURBLEdBQUdBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLEtBQUtBO2dCQUN6RUEsUUFBUUE7Z0JBQ1ZBLFFBQVFBLENBQUNBO1FBQ3JCQSxDQUFDQSxDQUFBQTtJQUNMQSxDQUFDQSxFQXBDZ0IsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFvQ3hCIn0=