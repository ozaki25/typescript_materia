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
            "<div class=\"form-group\">" +
            "<label class=\"col-sm-2 control-label\">商品名</label>" +
            "<div class=\"col-sm-10\">" +
            "<input type=\"text\" class=\"form-control\" name=\"brandName\">" +
            "</div>" +
            "</div>" +
            "<div class=\"form-group\">" +
            "<label class=\"col-sm-2 control-label\">値段</label>" +
            "<div class=\"col-sm-10\">" +
            "<input type=\"text\" class=\"form-control\" name=\"price\">" +
            "</div>" +
            "</div>" +
            "<div class=\"form-group\">" +
            "<label class=\"col-sm-2 control-label\">在庫数</label>" +
            "<div class=\"col-sm-10\">" +
            "<input type=\"text\" class=\"form-control\" name=\"quantity\">" +
            "</div>" +
            "</div>" +
            "<div class=\"form-group\">" +
            "<label class=\"col-sm-2 control-label\">保管場所</label>" +
            "<div class=\"col-sm-10\">" +
            "<input type=\"text\" class=\"form-control\" name=\"location\">" +
            "</div>" +
            "</div>" +
            "<div class=\"form-group\">" +
            "<div class=\"col-sm-offset-2 col-sm-10\">" +
            "<button id=\"submit_stationery\" class=\"btn btn-default\">作成</button>" +
            "</div>" +
            "</div>" +
            "</form>";
    })(Template = exports.Template || (exports.Template = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL3NjcmlwdC9zdGF0aW9uZXJ5L1RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbIlRlbXBsYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFBLElBQWlCLFFBQVEsQ0FpRHhCO0lBakRELFdBQWlCLFFBQVEsRUFBQyxDQUFDO1FBQ1pBLHdCQUFlQSxHQUM5QkEsOEVBQThFQTtZQUM1RUEsU0FBU0E7WUFDVEEsTUFBTUE7WUFDSkEsY0FBY0E7WUFDZEEsYUFBYUE7WUFDYkEsY0FBY0E7WUFDZEEsZUFBZUE7WUFDZkEsV0FBV0E7WUFDWEEsV0FBV0E7WUFDWEEsT0FBT0E7WUFDVEEsVUFBVUE7WUFDVkEseUJBQXlCQTtZQUN6QkEsVUFBVUE7WUFDWkEsVUFBVUEsQ0FBQ0E7UUFFSUEsdUJBQWNBLEdBQzdCQSx5REFBeURBO1lBQ3ZEQSw0QkFBNEJBO1lBQzFCQSxxREFBcURBO1lBQ3JEQSwyQkFBMkJBO1lBQ3pCQSxpRUFBaUVBO1lBQ25FQSxRQUFRQTtZQUNWQSxRQUFRQTtZQUNSQSw0QkFBNEJBO1lBQzFCQSxvREFBb0RBO1lBQ3BEQSwyQkFBMkJBO1lBQ3pCQSw2REFBNkRBO1lBQy9EQSxRQUFRQTtZQUNWQSxRQUFRQTtZQUNSQSw0QkFBNEJBO1lBQzFCQSxxREFBcURBO1lBQ3JEQSwyQkFBMkJBO1lBQ3pCQSxnRUFBZ0VBO1lBQ2xFQSxRQUFRQTtZQUNWQSxRQUFRQTtZQUNSQSw0QkFBNEJBO1lBQzFCQSxzREFBc0RBO1lBQ3REQSwyQkFBMkJBO1lBQ3pCQSxnRUFBZ0VBO1lBQ2xFQSxRQUFRQTtZQUNWQSxRQUFRQTtZQUNSQSw0QkFBNEJBO1lBQzFCQSwyQ0FBMkNBO1lBQ3pDQSx3RUFBd0VBO1lBQzFFQSxRQUFRQTtZQUNWQSxRQUFRQTtZQUNWQSxTQUFTQSxDQUFDQTtJQUNWQSxDQUFDQSxFQWpEZ0IsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFpRHhCIn0=