import * as $ from "jquery";
import {Stationery} from "./stationery/Stationery";

$(() => {
    let stationeryList = [
        new Stationery("鉛筆", 100, 500, "東京")
     ];

    stationeryList.forEach(stationery => {
        $("#contents").append("<tr><td>" + stationery.brandName + "</td><td>" + stationery.price + "</td><td>" + stationery.quantity + "</td><td>" + stationery.location + "</td></tr>");
    });
});
