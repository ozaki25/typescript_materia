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
            Item_1.Item.brandNames.forEach(function (brandName) {
                Item_1.Item.locations.forEach(function (location) {
                    stationeryList.push(new Stationery_1.Stationery(brandName, 100, 500, location));
                });
            });
        }
        function renderIndex() {
            $("#main").html(Template_1.Template.StationeryTable);
            Item_1.Item.columns.forEach(function (column) {
                $("#stationeryTable > thead > tr").append(Template_1.Template.StationeryTableHeader(column));
            });
            stationeryList.forEach(function (stationery, index) {
                $("#contents").append(Template_1.Template.StationeryTableRow(index, stationery));
            });
        }
        function renderNew(stationery) {
            $("#main").html(Template_1.Template.StationeryForm);
            Item_1.Item.columns.forEach(function (item) {
                $("#stationery_form").append(Template_1.Template.StationeryFormItem(item));
            });
            $("#stationery_form").append(Template_1.Template.StationeryFormSubmit);
            if (stationery) {
                $("input[name='brandName']").val(stationery.brandName);
                $("input[name='price']").val(stationery.price);
                $("input[name='quantity']").val(stationery.quantity);
                $("input[name='location']").val(stationery.location);
            }
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
            if (stationery.valid()) {
                stationeryList.push(stationery);
                renderIndex();
            }
            else {
                renderNew(stationery.setDefault());
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9zY3JpcHQvYXBwLnRzIl0sIm5hbWVzIjpbInNldERlZmF1bHRTdGF0aW9uZXJ5IiwicmVuZGVySW5kZXgiLCJyZW5kZXJOZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQUEsSUFBWSxDQUFDLFdBQU0sUUFBUSxDQUFDLENBQUE7SUFDNUIsMkJBQXlCLHlCQUF5QixDQUFDLENBQUE7SUFDbkQseUJBQXVCLHVCQUF1QixDQUFDLENBQUE7SUFDL0MscUJBQW1CLG1CQUFtQixDQUFDLENBQUE7SUFFdkMsQ0FBQyxDQUFDO1FBQ0UsSUFBSSxjQUFjLEdBQWlCLEVBQUUsQ0FBQztRQUN0QyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3ZCLFdBQVcsRUFBRSxDQUFDO1FBRWQ7WUFDSUEsV0FBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsU0FBU0E7Z0JBQzdCQSxXQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxRQUFRQTtvQkFDM0JBLGNBQWNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLHVCQUFVQSxDQUFDQSxTQUFTQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdkVBLENBQUNBLENBQUNBLENBQUNBO1lBQ1BBLENBQUNBLENBQUNBLENBQUNBO1FBQ1BBLENBQUNBO1FBRUQ7WUFDSUMsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsbUJBQVFBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1lBQzFDQSxXQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxNQUFNQTtnQkFDdkJBLENBQUNBLENBQUNBLCtCQUErQkEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsbUJBQVFBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsTUFBTUEsQ0FB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