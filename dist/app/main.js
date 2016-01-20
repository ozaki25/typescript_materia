(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "jquery", "./stationery/Stationery", "./stationery/Template", "./stationery/Item", "./stationery/Validation"], factory);
    }
})(function (require, exports) {
    var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./stationery/Item":2,"./stationery/Stationery":3,"./stationery/Template":4,"./stationery/Validation":5}],2:[function(require,module,exports){
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
            { "ja": "商品名", "en": "brandName" },
            { "ja": "値段", "en": "price" },
            { "ja": "在庫数", "en": "quantity" },
            { "ja": "保管場所", "en": "location" }
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
            "</tr>" +
            "</thead>" +
            "<tbody id=\"contents\">" +
            "</tbody>" +
            "</table>";
        Template.StationeryTableHeader = function (columnName) { return "<th>" + columnName + "</th>"; };
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
        Template.StationeryFormItem = function (columnNameJa, columnNameEn) {
            return "<div class=\"form-group\">" +
                "<label class=\"col-sm-2 control-label\">" + columnNameJa + "</label>" +
                "<div class=\"col-sm-10\">" +
                "<input type=\"text\" class=\"form-control\" name=\"" + columnNameEn + "\">" +
                "</div>" +
                "</div>";
        };
        Template.StationeryFormErrorMsg = function (msg) { return "<p class=\"help-block\">" + msg + "</p>"; };
    })(Template = exports.Template || (exports.Template = {}));
});

},{}],5:[function(require,module,exports){
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    var Validation;
    (function (Validation) {
        Validation.validString = function (param) { return !!param.trim(); };
        Validation.validNumber = function (param) { return !!param.trim() && isFinite(parseInt(param)); };
        Validation.valid = function (params, columnNames) {
            var valid = true;
            columnNames.forEach(function (name) { if (!!params[name]["msg"])
                valid = false; });
            return valid;
        };
    })(Validation = exports.Validation || (exports.Validation = {}));
});

},{}]},{},[1]);
