import * as $ from "jquery";
import {Stationery} from "./stationery/Stationery";
import {Template} from "./stationery/Template";
import {Item} from "./stationery/Item";
import {Validation} from "./stationery/Validation";

$(() => {
    var stationeryList: Stationery[] = [];
    setDefaultStationery();
    renderIndex();

    function renderIndex() {
        $("#main").html(Template.StationeryTable);
        Item.columns.forEach(column => {
            $("#stationeryTable > thead > tr").append(Template.StationeryTableHeader(column.ja));
        });
        stationeryList.forEach((stationery, index) => {
            $("#contents").append(Template.StationeryTableRow(index, stationery));
        });
    }

    function renderNew(params?: {}) {
        $("#main").html(Template.StationeryForm);
        Item.columns.forEach(item => {
            $("#stationery_form").append(Template.StationeryFormItem(item.ja, item.en));
        });
        $("#stationery_form").append(Template.StationeryFormSubmit);
        if(params) {
            Item.columns.forEach(column => {
                if(params[column.en]) addErrorMsg(column.en, params[column.en]["msg"]);
                setInputValue(column.en, params[column.en]["value"]);
            });
        }
    }

    function setDefaultStationery() {
        Item.brandNames.forEach(brandName => {
            Item.locations.forEach(location => {
                stationeryList.push(new Stationery(brandName, 100, 500, location));
            });
        });
    }

    function addErrorMsg(columnName: string, msg: string) {
        var $input = $("input[name='" + columnName + "']");
        var $formGroup = $input.parent().parent();
        if(msg) {
            $input.after(Template.StationeryFormErrorMsg(msg));
            $formGroup.addClass("has-error");
        }
    }

    function setInputValue(columnName: string, value: string) {
        var $input = $("input[name='" + columnName + "']");
        $input.val(value);
    }

    function getMsgParams(brandName: string, price: string, quantity: string, location: string) {
        var params = {};
        params["brandName"] = (Validation.validString(brandName)) ? {"value": brandName}          : {"msg": "文字列を入力して下さい。"};
        params["price"]     = (Validation.validNumber(price))     ? {"value": parseInt(price)}    : {"msg": "数値を入力して下さい。"};
        params["quantity"]  = (Validation.validNumber(quantity))  ? {"value": parseInt(quantity)} : {"msg": "数値を入力して下さい。"};
        params["location"]  = (Validation.validString(location))  ? {"value": location}           : {"msg": "文字列を入力して下さい。"};
        return params;
    }

    $(document).on("click", ".receive", function() {
        var id: number = $(this).data("stationery-id");
        stationeryList[id].receive();
        renderIndex();
    });

    $(document).on("click", ".shipment", function() {
        var id: number = $(this).data("stationery-id");
        stationeryList[id].shipment();
        renderIndex();
    });

    $(document).on("click", "#index_stationery", function() {
        renderIndex();
    });

    $(document).on("click", "#new_stationery", function() {
        renderNew();
    });

    $(document).on("click", "#submit_stationery", function() {
        var brandName = $("input[name='brandName']").val();
        var price = $("input[name='price']").val();
        var quantity = $("input[name='quantity']").val();
        var location = $("input[name='location']").val();
        var params = getMsgParams(brandName, price, quantity, location);
        var columnNames: string[] = [];
        Item.columns.forEach(column => columnNames.push(column.en));
        if(Validation.valid(params, columnNames)) {
            stationeryList.push(new Stationery(brandName, parseInt(price), parseInt(quantity), location));
            renderIndex();
        } else {
            renderNew(params);
        }
    });
});
