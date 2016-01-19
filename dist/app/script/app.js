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
        var stationeryList = [];
        setDefaultStationery();
        renderIndex();
        function setDefaultStationery() {
            stationeryList.push(new Stationery_1.Stationery("鉛筆", 100, 500, "東京"));
            stationeryList.push(new Stationery_1.Stationery("鉛筆", 100, 500, "千葉"));
            stationeryList.push(new Stationery_1.Stationery("鉛筆", 100, 500, "埼玉"));
            stationeryList.push(new Stationery_1.Stationery("ノート", 100, 500, "東京"));
            stationeryList.push(new Stationery_1.Stationery("ノート", 100, 500, "千葉"));
            stationeryList.push(new Stationery_1.Stationery("ノート", 100, 500, "埼玉"));
            stationeryList.push(new Stationery_1.Stationery("消しゴム", 100, 500, "東京"));
            stationeryList.push(new Stationery_1.Stationery("消しゴム", 100, 500, "千葉"));
            stationeryList.push(new Stationery_1.Stationery("消しゴム", 100, 500, "埼玉"));
        }
        function renderIndex() {
            $("#main").html(stationeryTable());
            stationeryList.forEach(function (stationery, index) {
                console.log(stationery);
                $("#contents").append(stationery.toHtml(index));
            });
        }
        function renderNew() {
            $("#main").html("<form id=\"stationery_form\" class=\"form-horizontal\">" +
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
                "</form>");
        }
        function stationeryTable() {
            return "<table id=\"stationeryTable\" class=\"table table-condensed table-striped\">" +
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
        }
        $(document).on("click", ".receive", function () {
            var id = $(this).data("stationery-id");
            stationeryList[id].receive();
            renderIndex();
        });
        $(document).on("click", ".shipment", function () {
            var id = $(this).data("stationery-id");
            stationeryList[id].shipment();
            renderIndex();
        });
        $(document).on("click", "#new_stationery", function () {
            renderNew();
        });
        $(document).on("click", "#submit_stationery", function () {
            var brandName = $("input[name='brandName']").val();
            var price = parseInt($("input[name='price']").val());
            var quantity = parseInt($("input[name='quantity']").val());
            var location = $("input[name='location']").val();
            var stationery = new Stationery_1.Stationery(brandName, price, quantity, location);
            stationeryList.push(stationery);
            renderIndex();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9zY3JpcHQvYXBwLnRzIl0sIm5hbWVzIjpbInNldERlZmF1bHRTdGF0aW9uZXJ5IiwicmVuZGVySW5kZXgiLCJyZW5kZXJOZXciLCJzdGF0aW9uZXJ5VGFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQUEsSUFBWSxDQUFDLFdBQU0sUUFBUSxDQUFDLENBQUE7SUFDNUIsMkJBQXlCLHlCQUF5QixDQUFDLENBQUE7SUFFbkQsQ0FBQyxDQUFDO1FBQ0UsSUFBSSxjQUFjLEdBQWlCLEVBQUUsQ0FBQztRQUN0QyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3ZCLFdBQVcsRUFBRSxDQUFDO1FBRWQ7WUFDSUEsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsdUJBQVVBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQzFEQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSx1QkFBVUEsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDMURBLGNBQWNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLHVCQUFVQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMxREEsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsdUJBQVVBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQzNEQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSx1QkFBVUEsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFD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