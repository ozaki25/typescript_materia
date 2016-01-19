export namespace Template {
    export var StationeryTable: string =
        "<table id=\"stationeryTable\" class=\"table table-condensed table-striped\">" +
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
    export var StationeryForm: string =
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
              "<button id=\"submit_stationery\" class=\"btn btn-default\">作成</button>" +
            "</div>" +
          "</div>" +
        "</form>";
}
