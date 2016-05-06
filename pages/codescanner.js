exports.create = function () {


    var page = new tabris.Page({
        title: "Barcode scanner",
        topLevel: false
    }).on('backButtonPressed', function () {
        require("./devices.js").create('devices.js').open();
    });

    new tabris.Button({
        layoutData: {left: 10, centerY: 0, right: 10},
        text: "Scan Barcode"
    }).on("select", scanBarcode).appendTo(page);

    var resultView = new tabris.TextView({
        layoutData: {top: "prev() 20", left: 20, right: 20},
        markupEnabled: true
    }).appendTo(page);

    function scanBarcode() {
        cordova.plugins.barcodeScanner.scan(function (result) {
            resultView.set("text", result.cancelled ?
                "<b>Scan cancelled</b>" :
            "<b>Scan result:</b> " + result.text + " (" + result.format + ")");
        }, function (error) {
            resultView.set("text", "<b>Error:</b> " + error);
        });
    }


    return page;
};