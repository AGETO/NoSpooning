exports.create = function () {


    var page = new tabris.Page({
        title: "Add a Device",
        topLevel: false
    }).on('backButtonPressed', function () {
        require("./devices.js").create('devices.js').open();
    });

    new tabris.Button({
        layoutData: {left: 10, top: 150, right: 10},
        text: "Scan Barcode"
    }).on("select", scanBarcode).appendTo(page);

    var resultView = new tabris.TextView({
        id: "result",
        layoutData: {top: "prev() 20", left: 20, right: 20},
        markupEnabled: true
    }).appendTo(page);


    new tabris.Button({
        id: "submit",
        text: "Submit",
        layoutData: {centerX: 0, top: "#result 20"}
    }).on("tap", function () {
        reDirect();
    }).appendTo(page);

    function reDirect() {

        var b = globalResult.text;
        if (/Forket/.test(b)) {
            require("./fork3.js").create("fork3.js").open();
        } else {
            new tabris.TextView({
                id: "exists",
                text: "Device already exists!",
                textColor: "red",
                layoutData: {top: "prev() 20", left: 20, right: 20},
                markupEnabled: true
            }).appendTo(page);

        }
    }

    var globalResult;

    function scanBarcode() {
        cordova.plugins.barcodeScanner.scan(function (result) {
                globalResult = result;
                resultView.set("text", result.cancelled ?
                    "<b>Scan cancelled</b>" :
                "<b>Scan result:</b> " + result.text + " (" + result.format + ")");
            },
            function (error) {
                resultView.set("text", "<b>Error:</b> " + error);
            });
    }


    return page;
};