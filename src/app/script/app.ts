import * as $ from "jquery";
import {Stationery} from "./stationery/Stationery";

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
        $("#contents").empty();
        stationeryList.forEach((stationery, index) => {
            console.log(stationery);
            $("#contents").append(stationery.toHtml(index));
        });
    }

    function renderNew() {
        $("#main").html(
            "<form class=\"form-horizontal\">" +
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
                "<input type=\"text\" class=\"form-control\" id=\"location\">" +
                "</div>" +
                "</div>" +
                "<div class=\"form-group\">" +
                "<div class=\"col-sm-offset-2 col-sm-10\">" +
                "<button id=\"submit\" class=\"btn btn-default\">作成</button>" +
                "</div>" +
                "</div>" +
                "</form>"
        );
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
});
