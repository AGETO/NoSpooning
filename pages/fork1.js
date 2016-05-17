/**
 * Created by ruibo on 29.04.2016.
 */
exports.create = function (apiBaseURL) {

    getDevices(1);

    var page = new tabris.Page({
        topLevel: false,
        title: "Device Details"
    }).on('backButtonPressed', function () {
        require("./devices.js").create(apiBaseURL).open();
    });

    //header
    new tabris.ImageView({
        id: "fdev",
        image: {src: "images/forklogo.png"},
        layoutData: {left: 3, top: 0, height: 65, width: 58},
        elevation: 1,
        opacity: 1.0
    }).appendTo(page);

    new tabris.TextView({
        id: "iFork",
        layoutData: {left: "#fdev 3", top: 17},
        text: "iFork",
        font: "20px",
        textColor: "#cc3f75"
    }).appendTo(page);

    new tabris.ImageView({
        image: {src: "images/joon2.png"},
        layoutData: {left: 0, right: 0, top: "#iFork 25"},
        opacity: 0.3
    }).appendTo(page);
//header end

    new tabris.ImageView({
        id: "devpic",
        image: {src: "images/fork1.jpg"}
    }).appendTo(page);

    new tabris.TextView({
        id: "dinf",
        alignment: "left",
        text: "Lift Me Up"
    }).appendTo(page);

    new tabris.TextView({
        id: "serial",
        alignment: "left",
        text: "Serial number:\n34UN CI11"
    }).appendTo(page);

    new tabris.TextView({
        id: "warnings",
        alignment: "right",
        text: "Device warnings"
    }).appendTo(page);

    new tabris.Button({
        id: "trouble",
        text: "Troubleshoot",
        background: "white"
    }).appendTo(page);

//tabs with "Messages", etc
    var tabFolder = new tabris.TabFolder({
        layoutData: {left: 15, top: "#trouble 10", right: 15, bottom: 10},
        paging: true // enables swiping. To still be able to open the developer console in iOS, swipe from the bottom right.
    }).appendTo(page);

    var msg = new tabris.Tab({
        title: "Messages" // converted to upper-case on Android
    }).appendTo(tabFolder);

    var scrollView2 = new tabris.ScrollView({
        left: 15, right: 15, top: 10, bottom: 0
    }).appendTo(msg);

    new tabris.TextView({
        id: "date",
        text: "Tuesday 19th Apr",
        layoutData: {top: 10, centerX: 0},
        font: "bold 16px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "divide",
        image: {src: "images/joon2.png"},
        layoutData: {top: "#date 10", left: 0, right: 0}
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "time",
        text: "12:54",
        layoutData: {top: "#divide 10", left: 25},
        font: "16px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "heading",
        text: "Device - Diagnostics",
        layoutData: {top: "#divide 5", centerX: 0},
        font: "bold 15px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "subject",
        text: "Warning message summary",
        layoutData: {top: "#heading 2", centerX: 0},
        font: "12px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "divide2",
        image: {src: "images/joon2.png"},
        opacity: 0.6,
        layoutData: {top: "#subject 2", left: 0, right: 0}
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "time2",
        text: "13:13",
        layoutData: {top: "#divide2 10", left: 25},
        font: "16px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "heading2",
        alignment: "center",
        text: "Peter Bush,\niFork Support",
        layoutData: {top: "#divide2 5", centerX: 0},
        font: "bold 15px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "subject2",
        text: "Message Subject",
        layoutData: {top: "#heading2 2", centerX: 0},
        font: "12px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "divide3",
        image: {src: "images/joon2.png"},
        layoutData: {top: "#subject2 2", left: 0, right: 0},
        opacity: 0.6
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "date2",
        text: "Friday 15th Apr",
        layoutData: {top: "#divide3 5", centerX: 0},
        font: "16px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "divide4",
        image: {src: "images/joon2.png"},
        layoutData: {top: "#date2 5", left: 0, right: 0}
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "time3",
        text: "15:17",
        layoutData: {top: "#divide4 10", left: 25},
        font: "16px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "heading3",
        alignment: "center",
        text: "Peter Bush,\niFork Support",
        layoutData: {top: "#divide4 5", centerX: 0},
        font: "15px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "subject3",
        text: "Message Subject",
        layoutData: {top: "#heading3 2", centerX: 0},
        font: "12px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "divide5",
        image: {src: "images/joon2.png"},
        layoutData: {top: "#subject3 2", left: 0, right: 0},
        opacity: 0.6
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "time4",
        text: "21:27",
        layoutData: {top: "#divide5 10", left: 25},
        font: "16px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "heading4",
        alignment: "center",
        text: "Peter Bush,\niFork Support",
        layoutData: {top: "#divide5 5", centerX: 0},
        font: "15px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "subject4",
        text: "Message Subject",
        layoutData: {top: "#heading4 2", centerX: 0},
        font: "12px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "divide6",
        image: {src: "images/joon2.png"},
        layoutData: {top: "#subject4 2", left: 0, right: 0},
        opacity: 0.6
    }).appendTo(scrollView2);

    var maint = new tabris.Tab({
        title: "Maintenance"
    }).appendTo(tabFolder);

    var maintenanceText = new tabris.TextView({
        id: "mainthead",
        text: "Content of Tab Maintenance",
        layoutData: {top: 25, left: 5},
        font: "bold 17px"
    }).appendTo(maint);

    new tabris.ImageView({
        id: "maintline",
        image: {src: "images/joon2.png"},
        layoutData: {top: "#mainthead 12", left: 0, right: 0}
    }).appendTo(maint);

    var buttonDone = new tabris.Button({
        text: "Done",
        top: 15,
        left: "#mainthead 15",
        width: 80,
        height: 40
    }).on('tap', function () {
        updateMaintenance(1, 1, "");
    }).appendTo(maint);

    var stat = new tabris.Tab({
        title: "Statistics"
    }).appendTo(tabFolder);

    new tabris.TextView({
        text: "Content of Tab Statistics",
        centerX: 0, top: 50
    }).appendTo(stat);

    page.apply({
        "#devpic": {layoutData: {top: "#fdev 10", left: 5}, width: 161, height: 144},
        "#dinf": {layoutData: {top: "#fdev 10", left: "#devpic 5"}, font: "bold 20px"},
        "#serial": {layoutData: {top: "#dinf 2", left: "#devpic 5"}, font: "16px"},
        "#warnings": {layoutData: {left: "#devpic 5", top: "#serial 2"}, font: "16px"},
        "#trouble": {layoutData: {top: "#warnings 15", left: "#devpic 25"}, font: "15px", opacity: 0.8}
    });

    function getDevices(id) {
        var xhttp = new XMLHttpRequest();
        var url = apiBaseURL + "/user/devices";
        var params = "id=" + id;
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(params);

        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var rows = xhttp.responseText;
                var result = JSON.parse(rows);
                var text = result[0]['Maintenance'];
                maintenanceText.set("text", text || "No maintenance needed");
                if (maintenanceText.get("text") == "No maintenance needed") {
                    buttonDone.dispose();
                }
            }
        }
    }

    function updateMaintenance(id, device_id, message) {
        var xhttp = new XMLHttpRequest();
        var url = apiBaseURL + "/user/deviceUpdate";
        var params = "id=" + id + "&deviceid=" + device_id + "&message=" + message;
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(params);

        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                getDevices(1);
            }
        }
    }

    return page;
};