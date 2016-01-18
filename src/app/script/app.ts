import * as $ from "jquery";
import {Stationery} from "./stationery/Stationery";

$(() => {
    var stationeryList: Stationery[] = [];
    setDefaultStationery();
    render();

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

    function render() {
        $("#contents").empty();
        stationeryList.forEach((stationery, index) => {
            console.log(stationery);
            $("#contents").append(stationery.toHtml(index));
        });
    }

    $(document).on("click", ".receive", function() {
        var id: number = $(this).data("stationery-id");
        stationeryList[id].receive();
        render();
    });

    $(document).on("click", ".shipment", function() {
        var id: number = $(this).data("stationery-id");
        stationeryList[id].shipment();
        render();
    });
});
