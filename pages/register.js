exports.create = function (apiBaseURL) {


    var page = new tabris.Page({
        title: "Add a Device",
        topLevel: false
    }).on('backButtonPressed', function () {
        require("./devices.js").create(apiBaseURL).open();
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


    new tabris.TextView({
        id: "submitto",
        layoutData: {top: 19, left: 15},
        text: "Submit to",
        font: "15px"
    }).appendTo(page);

    var lists = [
        {
            id: "first",
            name: "List 1"
        },
        {
            id: "second",
            name: "List 2"
        }
    ];

    new tabris.Picker({
        layoutData: {left: "#submitto 15", right: 12, top: 10, height: 38},
        items: lists,
        itemText: function (list) {
            return list.name;
        },
        selection: lists[0]
    }).on("change:selection", function (picker, item) {
        console.log("Selected " + item.id);
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
            require("./fork3.js").create(apiBaseURL).open();
        }
        if (/Lift/.test(b)) {
            require("./fork1.js").create(apiBaseURL).open();
        }
        if (/Down/.test(b)) {
            require("./fork2.js").create(apiBaseURL).open();
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