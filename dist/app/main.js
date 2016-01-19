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
        function renderNew() {
            $("#main").html(Template_1.Template.StationeryForm);
            Item_1.Item.columns.forEach(function (item) {
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
            if (stationery.valid()) {
                stationeryList.push(stationery);
                renderIndex();
            }
            else {
                renderNew();
            }
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
        Item.columns = [
            { ja: "商品名", en: "brandName" },
            { ja: "値段", en: "price" },
            { ja: "在庫数", en: "quantity" },
            { ja: "保管場所", en: "location" }
        ];
        Item.brandNames = ["鉛筆", "ノート", "消しゴム"];
        Item.locations = ["東京", "千葉", "埼玉"];
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
        Stationery.prototype.valid = function () {
            return !!this.brandName.trim() && !!this.price && !!this.quantity && !!this.location.trim();
            return true;
        };
        Stationery.prototype.blank = function (column) {
            return column.trim();
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
            "<th></th>" +
            "<th></th>" +
            "</tr>" +
            "</thead>" +
            "<tbody id=\"contents\">" +
            "</tbody>" +
            "</table>";
        Template.StationeryTableHeader = function (column) { return "<th>" + column.ja + "</th>"; };
        Template.StationeryTableRow = function (id, stationery) {
            return "<tr>" +
                "<td>" + stationery.brandName + "</td>" +
                "<td>" + stationery.price + "</td>" +
                "<td>" + stationery.quantity + "</td>" +
                "<td>" + stationery.location + "</td>" +
                "<td><a data-stationery-id=\"" + id + "\" class=\"btn btn-default btn-xs receive\" href=\"#\">入荷</a></td>" +
                "<td><a data-stationery-id=\"" + id + "\" class=\"btn btn-default btn-xs shipment\" href=\"#\">出荷</a></td>" +
                "</tr>";
        };
        Template.StationeryForm = "<form id=\"stationery_form\" class=\"form-horizontal\"></form>";
        Template.StationeryFormSubmit = "<div class=\"form-group\">" +
            "<div class=\"col-sm-offset-2 col-sm-10\">" +
            "<button id=\"submit_stationery\" class=\"btn btn-default\">作成</button>" +
            "</div>" +
            "</div>";
        Template.StationeryFormItem = function (column) {
            return "<div class=\"form-group\">" +
                "<label class=\"col-sm-2 control-label\">" + column.ja + "</label>" +
                "<div class=\"col-sm-10\">" +
                "<input type=\"text\" class=\"form-control\" name=\"" + column.en + "\">" +
                "</div>" +
                "</div>";
        };
    })(Template = exports.Template || (exports.Template = {}));
});

},{}]},{},[1]);
