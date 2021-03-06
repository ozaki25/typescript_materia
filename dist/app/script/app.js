(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "jquery", "./stationery/Stationery", "./stationery/Template", "./stationery/Item", "./stationery/Validation"], factory);
    }
})(function (require, exports) {
    var $ = require("jquery");
    var Stationery_1 = require("./stationery/Stationery");
    var Template_1 = require("./stationery/Template");
    var Item_1 = require("./stationery/Item");
    var Validation_1 = require("./stationery/Validation");
    $(function () {
        var stationeryList = [];
        setDefaultStationery();
        renderIndex();
        function renderIndex() {
            $("#main").html(Template_1.Template.StationeryTable);
            Item_1.Item.columns.forEach(function (column) {
                $("#stationeryTable > thead > tr").append(Template_1.Template.StationeryTableHeader(column.ja));
            });
            stationeryList.forEach(function (stationery, index) {
                $("#contents").append(Template_1.Template.StationeryTableRow(index, stationery));
            });
        }
        function renderNew(params) {
            $("#main").html(Template_1.Template.StationeryForm);
            Item_1.Item.columns.forEach(function (item) {
                $("#stationery_form").append(Template_1.Template.StationeryFormItem(item.ja, item.en));
            });
            $("#stationery_form").append(Template_1.Template.StationeryFormSubmit);
            if (params) {
                Item_1.Item.columns.forEach(function (column) {
                    if (params[column.en])
                        addErrorMsg(column.en, params[column.en]["msg"]);
                    setInputValue(column.en, params[column.en]["value"]);
                });
            }
        }
        function setDefaultStationery() {
            Item_1.Item.brandNames.forEach(function (brandName) {
                Item_1.Item.locations.forEach(function (location) {
                    stationeryList.push(new Stationery_1.Stationery(brandName, 100, 500, location));
                });
            });
        }
        function addErrorMsg(columnName, msg) {
            var $input = $("input[name='" + columnName + "']");
            var $formGroup = $input.parent().parent();
            if (msg) {
                $input.after(Template_1.Template.StationeryFormErrorMsg(msg));
                $formGroup.addClass("has-error");
            }
        }
        function setInputValue(columnName, value) {
            var $input = $("input[name='" + columnName + "']");
            $input.val(value);
        }
        function getMsgParams(brandName, price, quantity, location) {
            var params = {};
            params["brandName"] = (Validation_1.Validation.validString(brandName)) ? { "value": brandName } : { "msg": "文字列を入力して下さい。" };
            params["price"] = (Validation_1.Validation.validNumber(price)) ? { "value": parseInt(price) } : { "msg": "数値を入力して下さい。" };
            params["quantity"] = (Validation_1.Validation.validNumber(quantity)) ? { "value": parseInt(quantity) } : { "msg": "数値を入力して下さい。" };
            params["location"] = (Validation_1.Validation.validString(location)) ? { "value": location } : { "msg": "文字列を入力して下さい。" };
            return params;
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
            var price = $("input[name='price']").val();
            var quantity = $("input[name='quantity']").val();
            var location = $("input[name='location']").val();
            var params = getMsgParams(brandName, price, quantity, location);
            var columnNames = [];
            Item_1.Item.columns.forEach(function (column) { return columnNames.push(column.en); });
            if (Validation_1.Validation.valid(params, columnNames)) {
                stationeryList.push(new Stationery_1.Stationery(brandName, parseInt(price), parseInt(quantity), location));
                renderIndex();
            }
            else {
                renderNew(params);
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9zY3JpcHQvYXBwLnRzIl0sIm5hbWVzIjpbInJlbmRlckluZGV4IiwicmVuZGVyTmV3Iiwic2V0RGVmYXVsdFN0YXRpb25lcnkiLCJhZGRFcnJvck1zZyIsInNldElucHV0VmFsdWUiLCJnZXRNc2dQYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQUEsSUFBWSxDQUFDLFdBQU0sUUFBUSxDQUFDLENBQUE7SUFDNUIsMkJBQXlCLHlCQUF5QixDQUFDLENBQUE7SUFDbkQseUJBQXVCLHVCQUF1QixDQUFDLENBQUE7SUFDL0MscUJBQW1CLG1CQUFtQixDQUFDLENBQUE7SUFDdkMsMkJBQXlCLHlCQUF5QixDQUFDLENBQUE7SUFFbkQsQ0FBQyxDQUFDO1FBQ0UsSUFBSSxjQUFjLEdBQWlCLEVBQUUsQ0FBQztRQUN0QyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3ZCLFdBQVcsRUFBRSxDQUFDO1FBRWQ7WUFDSUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsbUJBQVFBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1lBQzFDQSxXQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxNQUFNQTtnQkFDdkJBLENBQUNBLENBQUNBLCtCQUErQkEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsbUJBQVFBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDekZBLENBQUNBLENBQUNBLENBQUNBO1lBQ0hBLGNBQWNBLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLFVBQVVBLEVBQUVBLEtBQUtBO2dCQUNyQ0EsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsbUJBQVFBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsS0FBS0EsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0Es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