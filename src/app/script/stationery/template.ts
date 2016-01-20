export namespace Template {
    export let StationeryTable: string =
        "<table id=\"stationeryTable\" class=\"table table-condensed table-striped\">" +
          "<thead>" +
            "<tr>" +
            "</tr>" +
          "</thead>" +
          "<tbody id=\"contents\">" +
          "</tbody>" +
        "</table>";

    export let StationeryTableHeader = (column): string => "<th>" + column.ja + "</th>"

    export let StationeryTableRow = (id, stationery): string => {
        return "<tr>" +
                 "<td>" + stationery.brandName + "</td>" +
                 "<td>" + stationery.price + "</td>" +
                 "<td>" + stationery.quantity + "</td>" +
                 "<td>" + stationery.location + "</td>" +
                 "<td><a data-stationery-id=\"" + id + "\" class=\"btn btn-default btn-xs receive\" href=\"#\">入荷</a></td>" +
                 "<td><a data-stationery-id=\"" + id + "\" class=\"btn btn-default btn-xs shipment\" href=\"#\">出荷</a></td>" +
               "</tr>"
    }

    export let StationeryForm: string = "<form id=\"stationery_form\" class=\"form-horizontal\"></form>";

    export let StationeryFormSubmit: string =
          "<div class=\"form-group\">" +
            "<div class=\"col-sm-offset-2 col-sm-10\">" +
              "<button id=\"submit_stationery\" class=\"btn btn-default\">作成</button>" +
            "</div>" +
          "</div>";

    export let StationeryFormItem = (column): string => {
        return "<div class=\"form-group\">" +
                  "<label class=\"col-sm-2 control-label\">" + column.ja + "</label>" +
                  "<div class=\"col-sm-10\">" +
                    "<input type=\"text\" class=\"form-control\" name=\"" + column.en + "\">" +
                  "</div>" +
                "</div>";
    }

    export let StationeryFormErrorMsg = (msg): string => "<p class=\"help-block\">" + msg + "</p>"
}
