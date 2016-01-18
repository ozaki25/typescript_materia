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
            $("#main").append(newStationeryButton());
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
                "<a id=\"submit_stationery\" class=\"btn btn-default\">作成</a>" +
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
        function newStationeryButton() {
            return "<a id=\"new_stationery\" class=\"btn btn-default\" href=\"#\">新規作成</a>";
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
            var price = $("input[name='price']").val();
            var quantity = $("input[name='quantity']").val();
            var location = $("input[name='location']").val();
            var stationery = new Stationery_1.Stationery(brandName, price, quantity, location);
            stationeryList.push(stationery);
            console.log(stationery);
            console.log(stationeryList);
            renderIndex();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9zY3JpcHQvYXBwLnRzIl0sIm5hbWVzIjpbInNldERlZmF1bHRTdGF0aW9uZXJ5IiwicmVuZGVySW5kZXgiLCJyZW5kZXJOZXciLCJzdGF0aW9uZXJ5VGFibGUiLCJuZXdTdGF0aW9uZXJ5QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFBLElBQVksQ0FBQyxXQUFNLFFBQVEsQ0FBQyxDQUFBO0lBQzVCLDJCQUF5Qix5QkFBeUIsQ0FBQyxDQUFBO0lBRW5ELENBQUMsQ0FBQztRQUNFLElBQUksY0FBYyxHQUFpQixFQUFFLENBQUM7UUFDdEMsb0JBQW9CLEVBQUUsQ0FBQztRQUN2QixXQUFXLEVBQUUsQ0FBQztRQUVkO1lBQ0lBLGNBQWNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLHVCQUFVQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMxREEsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsdUJBQVVBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQzFEQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSx1QkFBVUEsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDMURBLGNBQWNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLHVCQUFVQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzREEsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsdUJBQVVBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlB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