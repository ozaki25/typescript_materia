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
        $("#main").html(stationeryTable());
        stationeryList.forEach((stationery, index) => {
            console.log(stationery);
            $("#contents").append(stationery.toHtml(index));
        });
        $("#main").append(newStationeryButton());
    }

    function renderNew() {
        $("#main").html(
            "<form id=\"stationery_form\" class=\"form-horizontal\">" +
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
                "</form>"
        );
    }

    function stationeryTable(): string {
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
            "</table>"
    }

    function newStationeryButton(): string {
        return "<a id=\"new_stationery\" class=\"btn btn-default\" href=\"#\">新規作成</a>"
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
        var price: number = $("input[name='price']").val();
        var quantity: number = $("input[name='quantity']").val();
        var location: string = $("input[name='location']").val();
        var stationery: Stationery = new Stationery(brandName, price, quantity, location);
        stationeryList.push(stationery);
        console.log(stationery);
        console.log(stationeryList);
        renderIndex();
    });
});
