(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "jquery", "./stationery/Stationery"], factory);
    }
})(function (require, exports) {
    var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./stationery/Stationery":2}],2:[function(require,module,exports){
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    var Stationery = (function () {
        function Stationery(brandName, price, quantity, location) {
            this.brandName = brandName;
            this.price = price;
            this.quantity = quantity;
            this.location = location;
        }
        Stationery.prototype.toHtml = function (id) {
            return "<tr>" +
                "<td>" + this.brandName + "</td>" +
                "<td>" + this.price + "</td>" +
                "<td>" + this.quantity + "</td>" +
                "<td>" + this.location + "</td>" +
                "<td><a data-stationery-id=\"" + id + "\" class=\"btn btn-default btn-xs receive\" href=\"#\">入荷</a></td>" +
                "<td><a data-stationery-id=\"" + id + "\" class=\"btn btn-default btn-xs shipment\" href=\"#\">出荷</a></td>" +
                "</tr>";
        };
        Stationery.prototype.receive = function () {
            this.quantity += 100;
        };
        Stationery.prototype.shipment = function () {
            this.quantity -= 100;
        };
        return Stationery;
    })();
    exports.Stationery = Stationery;
});

},{}]},{},[1]);
