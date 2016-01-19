(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "jquery", "./stationery/Stationery", "./stationery/Template", "./stationery/Item"], factory);
    }
})(function (require, exports) {
    var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./stationery/Item":2,"./stationery/Stationery":3,"./stationery/Template":4}],2:[function(require,module,exports){
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    var Item;
    (function (Item) {
        Item.items = [
            { ja: "商品名", en: "brandName" },
            { ja: "値段", en: "price" },
            { ja: "在庫数", en: "quantity" },
            { ja: "保管場所", en: "location" }
        ];
    })(Item = exports.Item || (exports.Item = {}));
});

},{}],3:[function(require,module,exports){
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
            this.quantity += 10;
        };
        Stationery.prototype.shipment = function () {
            this.quantity -= 10;
        };
        return Stationery;
    })();
    exports.Stationery = Stationery;
});

},{}],4:[function(require,module,exports){
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    var Template;
    (function (Template) {
        Template.StationeryTable = "<table id=\"stationeryTable\" class=\"table table-condensed table-striped\">" +
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
        Template.StationeryForm = "<form id=\"stationery_form\" class=\"form-horizontal\">" +
            "</form>";
        Template.StationeryFormSubmit = "<div class=\"form-group\">" +
            "<div class=\"col-sm-offset-2 col-sm-10\">" +
            "<button id=\"submit_stationery\" class=\"btn btn-default\">作成</button>" +
            "</div>" +
            "</div>";
        Template.StationeryFormItem = function (item) {
            return "<div class=\"form-group\">" +
                "<label class=\"col-sm-2 control-label\">" + item.ja + "</label>" +
                "<div class=\"col-sm-10\">" +
                "<input type=\"text\" class=\"form-control\" name=\"" + item.en + "\">" +
                "</div>" +
                "</div>";
        };
    })(Template = exports.Template || (exports.Template = {}));
});

},{}]},{},[1]);
