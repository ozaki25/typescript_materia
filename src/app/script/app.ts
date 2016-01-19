import * as $ from "jquery";
import {Stationery} from "./stationery/Stationery";
import {Template} from "./stationery/Template";

$(() => {
    var stationeryList: Stationery[] = [];
    setDefaultStationery();
    renderIndex();

    function setDefaultStationery() {
        stationeryList.push(new Stationery("鉛筆", 100, 500, "東京"));
        stationeryList.push(new Stationery("鉛筆", 100, 500, "千葉"));
        stationeryList.push(new Stationery("鉛筆", 100, 500, "埼玉"));
        stationeryList.push(new Stationery("ノート", 100, 500, "東京"));
        stationeryList.push(new Stationery("ノート", 100, 500, "千葉"));
        stationeryList.push(new Stationery("ノート", 100, 500, "埼玉"));
        stationeryList.push(new Stationery("消しゴム", 100, 500, "東京"));
        stationeryList.push(new Stationery("消しゴム", 100, 500, "千葉"));
        stationeryList.push(new Stationery("消しゴム", 100, 500, "埼玉"));
    }

    function renderIndex() {
        $("#main").html(Template.StationeryTable);
        stationeryList.forEach((stationery, index) => {
            console.log(stationery);
            $("#contents").append(stationery.toHtml(index));
        });
    }

    function renderNew() {
        $("#main").html(Template.StationeryForm);
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

    $(document).on("click", "#new_stationery", function() {
        renderNew();
    });

    $(document).on("click", "#submit_stationery", function() {
        var brandName: string = $("input[name='brandName']").val();
        var price: number = parseInt($("input[name='price']").val());
        var quantity: number = parseInt($("input[name='quantity']").val());
        var location: string = $("input[name='location']").val();
        var stationery: Stationery = new Stationery(brandName, price, quantity, location);
        stationeryList.push(stationery);
        renderIndex();
    });
});
