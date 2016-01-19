(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "jquery", "./stationery/Stationery", "./stationery/Template", "./stationery/Item"], factory);
    }
})(function (require, exports) {
    var $ = require("jquery");
    var Stationery_1 = require("./stationery/Stationery");
    var Template_1 = require("./stationery/Template");
    var Item_1 = require("./stationery/Item");
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
            $("#main").html(Template_1.Template.StationeryTable);
            stationeryList.forEach(function (stationery, index) {
                console.log(stationery);
                $("#contents").append(stationery.toHtml(index));
            });
        }
        function renderNew() {
            $("#main").html(Template_1.Template.StationeryForm);
            Item_1.Item.items.forEach(function (item) {
                $("#stationery_form").append(Template_1.Template.StationeryFormItem(item));
            });
            $("#stationery_form").append(Template_1.Template.StationeryFormSubmit);
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
        $(document).on("click", "#index_stationery", function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9zY3JpcHQvYXBwLnRzIl0sIm5hbWVzIjpbInNldERlZmF1bHRTdGF0aW9uZXJ5IiwicmVuZGVySW5kZXgiLCJyZW5kZXJOZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQUEsSUFBWSxDQUFDLFdBQU0sUUFBUSxDQUFDLENBQUE7SUFDNUIsMkJBQXlCLHlCQUF5QixDQUFDLENBQUE7SUFDbkQseUJBQXVCLHVCQUF1QixDQUFDLENBQUE7SUFDL0MscUJBQW1CLG1CQUFtQixDQUFDLENBQUE7SUFFdkMsQ0FBQyxDQUFDO1FBQ0UsSUFBSSxjQUFjLEdBQWlCLEVBQUUsQ0FBQztRQUN0QyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3ZCLFdBQVcsRUFBRSxDQUFDO1FBRWQ7WUFDSUEsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsdUJBQVVBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQzFEQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSx1QkFBVUEsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDMURBLGNBQWNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLHVCQUFVQSxDQUFDQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMxREEsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsdUJBQVVBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQzNEQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSx1QkFBVUEsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsRUFB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