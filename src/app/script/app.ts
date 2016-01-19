import * as $ from "jquery";
import {Stationery} from "./stationery/Stationery";
import {Template} from "./stationery/Template";
import {Item} from "./stationery/Item";

$(() => {
    var stationeryList: Stationery[] = [];
    setDefaultStationery();
    renderIndex();

    function setDefaultStationery() {
        Item.brandNames.forEach(brandName => {
            Item.locations.forEach(location => {
                stationeryList.push(new Stationery(brandName, 100, 500, location));
            });
        });
    }

    function renderIndex() {
        $("#main").html(Template.StationeryTable);
        Item.columns.forEach(column => {
            $("#stationeryTable > thead > tr").append(Template.StationeryTableHeader(column));
        });
        stationeryList.forEach((stationery, index) => {
            $("#contents").append(Template.StationeryTableRow(index, stationery));
        });
    }

    function renderNew(stationery?: Stationery) {
        $("#main").html(Template.StationeryForm);
        Item.columns.forEach(item => {
            $("#stationery_form").append(Template.StationeryFormItem(item));
        });
        $("#stationery_form").append(Template.StationeryFormSubmit);
        if(stationery) {
            $("input[name='brandName']").val(stationery.brandName);
            $("input[name='price']").val(stationery.price);
            $("input[name='quantity']").val(stationery.quantity);
            $("input[name='location']").val(stationery.location);
        }
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
        var brandName: string = $("input[name='brandName']").val();
        var price: number = parseInt($("input[name='price']").val());
        var quantity: number = parseInt($("input[name='quantity']").val());
        var location: string = $("input[name='location']").val();
        var stationery = new Stationery(brandName, price, quantity, location);
        if(stationery.valid()) {
            stationeryList.push(stationery);
            renderIndex();
        } else {
            renderNew(stationery.setDefault());
        }
    });
});
