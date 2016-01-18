import * as $ from "jquery";
import {Stationery} from "./stationery/Stationery";

$(() => {
    let stationeryList = [
        new Stationery("鉛筆", 100, 500, "東京"),
        new Stationery("鉛筆", 100, 500, "千葉"),
        new Stationery("鉛筆", 100, 500, "埼玉"),
        new Stationery("ノート", 100, 500, "東京"),
        new Stationery("ノート", 100, 500, "千葉"),
        new Stationery("ノート", 100, 500, "埼玉"),
        new Stationery("消しゴム", 100, 500, "東京"),
        new Stationery("消しゴム", 100, 500, "千葉"),
        new Stationery("消しゴム", 100, 500, "埼玉")
     ];

    stationeryList.forEach(stationery => {
        $("#contents").append("<tr><td>" + stationery.brandName + "</td><td>" + stationery.price + "</td><td>" + stationery.quantity + "</td><td>" + stationery.location + "</td></tr>");
    });
});
