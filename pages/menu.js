exports.create = function () {

    var page = new tabris.Page({
        topLevel: true
    });
    // ... add some more widgets, apply layout, etc ...
    new tabris.ImageView({
        id: "fdev",
        image: {src: "images/forklogo.png"},
        layoutData: {left: 120, top: 0, height: 95, width: 88},
        elevation: 1,
        opacity: 1.0
    }).appendTo(page);

    new tabris.TextView({
        id: "iFork",
        layoutData: {left: "#fdev 3", top: 37},
        text: "iFork",
        font: "20px",
        textColor: "#cc3f75"
    }).appendTo(page);

    new tabris.ImageView({
        id: "devices",
        image: {src: "images/mydevices.png"},
        layoutData: {left: 40, top: "#fdev 10", width: 104, height: 116}
    }).on("tap", function () {
        require("./devices.js").create('devices.js').open();
    }).appendTo(page);


    new tabris.TextView({
        id: "add_d",
        text: "My\nDevices",
        alignment: "center",
        layoutData: {left: 48, top: "#devices -15"},
        font: "20px"
    }).appendTo(page);

    new tabris.ImageView({
        id: "diagnostics",
        image: {src: "images/qr.png"},
        layoutData: {right: 57, top: "#fdev 23", width: 74, height: 86}
    }).on("tap", function () {
        require("./diagnostics.js").create('diagnostics.js').open();
    }).appendTo(page);

    new tabris.TextView({
        id: "device_d",
        text: "Device\nDiagnostics",
        alignment: "center",
        layoutData: {right: 42, top: "#diagnostics 2"},
        font: "20px"
    }).appendTo(page);

    new tabris.ImageView({
        id: "news",
        image: {src: "images/news.jpg"},
        layoutData: {left: 50, top: "#device_d 8", width: 74, height: 86}
    }).appendTo(page);

    new tabris.TextView({
        id: "news_d",
        text: "News",
        alignment: "center",
        layoutData: {left: 60, top: "#news -5"},
        font: "20px"
    }).appendTo(page);

    new tabris.ImageView({
        id: "support",
        image: {src: "images/support.png"},
        layoutData: {left: 50, top: "#news_d 9", width: 84, height: 96}
    }).on("tap", function () {
        require("./support.js").create('support.js').open();
    }).appendTo(page);

    new tabris.TextView({
        id: "support_d",
        text: "Support",
        alignment: "center",
        layoutData: {left: 58, top: "#support -19"},
        font: "20px"
    }).appendTo(page);

    new tabris.ImageView({
        id: "addnew",
        image: {src: "images/newdevice.jpg"},
        layoutData: {right: 46, top: "#device_d 2", width: 94, height: 106}
    }).on("tap", function () {
        require("./codescanner.js").create('codescanner.js').open();
    }).appendTo(page);

    new tabris.TextView({
        id: "addnew_d",
        text: "Register Device",
        alignment: "right",
        layoutData: {right: 32, top: "#addnew -18"},
        font: "19px"
    }).appendTo(page);

    new tabris.ImageView({
        id: "settings",
        image: {src: "images/settings.jpg"},
        layoutData: {right: 40, top: "#addnew_d 2", width: 104, height: 101}
    }).appendTo(page);

    new tabris.TextView({
        id: "settings_d",
        text: "Settings",
        alignment: "center",
        layoutData: {right: 58, top: "#settings -16"},
        font: "20px"
    }).appendTo(page);

    return page;
};

