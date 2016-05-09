exports.create = function () {

    getDevices(1);

    var page = new tabris.Page({
        topLevel: false,
        title: "My Devices"
    }).on('backButtonPressed', function () {
        require("./devices.js").create('devices.js').open();
    });

    var scrollView = new tabris.ScrollView({
        left: 0, right: 0, top: 0, bottom: 0
    }).appendTo(page);

    //header
    new tabris.ImageView({
        id: "fdev",
        image: {src: "images/forklogo.png"},
        layoutData: {left: 3, top: 0, height: 65, width: 58},
        elevation: 1,
        opacity: 1.0
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "iFork",
        layoutData: {left: "#fdev 3", top: 17},
        text: "iFork",
        font: "20px",
        textColor: "#cc3f75"
    }).appendTo(scrollView);

    new tabris.ImageView({
        image: {src: "images/joon2.png"},
        layoutData: {left: 0, right: 0, top: "#iFork 20"},
        opacity: 0.3
    }).appendTo(scrollView);

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
        layoutData: {left: "#iFork 50", right: 12, top: 12, height: 38},
        items: lists,
        itemText: function (list) {
            return list.name;
        },
        selection: lists[1]
    }).on("change:selection", function () {
        require("./devices.js").create('devices.js').open();
    }).appendTo(scrollView);

//end of header

    //DON'T LET ME DOWN
    new tabris.ImageView({
        id: "dev1",
        image: {src: "images/fork2.jpg"}
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "dev1info",
        alignment: "left",
        text: "Do NOT\nLet Me Down"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "status",
        alignment: "left",
        text: "Active"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "warnings",
        alignment: "left",
        text: "Device warnings"
    }).appendTo(scrollView);

    var messages = new tabris.TextView({
        id: "messages",
        alignment: "left",
        text: "Messages"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "details",
        aligment: "left",
        text: "Details...",
        highlightOnTouch: true
    }).on("tap", function () {
        require("./fork2.js").create('fork2.js').open();
    }).appendTo(scrollView);

    new tabris.ImageView({
        id: "line",
        image: {src: "images/joon.png"}
    }).appendTo(scrollView);
//END

//"Filter by" button
    new tabris.Button({
        id: "filter",
        text: "Filter by...",
        background: "white",
        border: "1,126px solid #565656",
        elevation: 2
        //}).on("select", function () {
    }).appendTo(page);

//NEVER FORKET
    new tabris.ImageView({
        id: "dev2",
        image: {src: "images/fork3.jpg"}
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "dev2info",
        alignment: "left",
        text: "Never Forket"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "status2",
        alignment: "left",
        text: "Last lift:\n 29.04.2016 15:01"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "warnings2",
        alignment: "left",
        text: "Device warnings"
    }).appendTo(scrollView);

    var messages2 = new tabris.TextView({
        id: "messages2",
        alignment: "left",
        text: "Messages"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "details2",
        aligment: "left",
        text: "Details...",
        highlightOnTouch: true
    }).on("tap", function () {
        require("./fork3.js").create('fork3.js').open();
    }).appendTo(scrollView);

    new tabris.ImageView({
        id: "line2",
        image: {src: "images/joon.png"}
    }).appendTo(scrollView);
//END


    //LIFT ME UP
    new tabris.ImageView({
        id: "dev3",
        image: {src: "images/fork1.jpg"}
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "dev3info",
        alignment: "left",
        text: "Lift Me Up"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "status3",
        alignment: "left",
        text: "Last lift:\n26.04.2016 14:20"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "warnings3",
        alignment: "left",
        text: "Device warnings"
    }).appendTo(scrollView);

    var messages3 = new tabris.TextView({
        id: "messages3",
        alignment: "left",
        text: "Messages"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "details3",
        aligment: "left",
        text: "Details...",
        highlightOnTouch: true
    }).on("tap", function () {
        require("./fork1.js").create('fork1.js').open();
    }).appendTo(scrollView);

    new tabris.ImageView({
        id: "line3",
        image: {src: "images/joon.png"}
    }).appendTo(scrollView);
//END



    //support tray
    var trayHeight;
    var trayState = "down";
    var dragOffset;

    var tray = new tabris.Composite({
        layoutData: {left: 5, right: 5, top: 0, bottom: 0},
        cornerRadius: 12,
        elevation: 100000,
        opacity: 0.95
    }).appendTo(page);

    var strap = new tabris.Composite({
        layoutData: {right: 16, bottom: 5, height: 66, width: 66},
        background: "#e7e7e7",
        cornerRadius: 2,
        elevation: 100000
    }).appendTo(page);

    var strapIcon = new tabris.ImageView({
        layoutData: {centerX: 0, top: 17, height: 34, width: 34},
        image: {src: "images/support_icon.png"},
        elevation: 100000
    }).appendTo(strap);

    var trayContent = new tabris.Composite({
        layoutData: {left: 0, right: 0, top: 0, bottom: 0},
        background: "#cccccc",
        cornerRadius: 2
    }).appendTo(tray);

    var scrollView2 = new tabris.ScrollView({
        left: 5, right: 5, top: 0, bottom: 0
    }).appendTo(trayContent);

    new tabris.TextView({
        id: "suptr",
        layoutData: {centerX: 0, top: 5},
        text: "Get Support",
        font: "bold 20px"
    }).appendTo(scrollView2);

//Pete o'Donnell
    new tabris.ImageView({
        id: "pete",
        layoutData: {left: 24, top: "#suptr 10"},
        height: 117,
        width: 94,
        image: {src: "images/pete.png"}
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "pinfo",
        text: "Pete o'Donnell",
        layoutData: {left: "#pete 5", top: "#suptr 20"},
        font: "bold 18px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "ppos",
        text: "Chief Support Engineer\nDevice Family XYZ",
        layoutData: {left: "#pete 5", top: "#pinfo 2"},
        font: "15px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "pstat",
        text: "Status (Available/In Chat)",
        layoutData: {left: "#pete 5", top: "#ppos 2"},
        font: "15px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "icons1",
        image: {src: "images/icons.png"},
        layoutData: {left: 0, right: 0, top: "#pstat 25"},
        height: 72
    }).on("tap", function () {
        cordova.InAppBrowser.open('tel:18004444444', '_system');
    }).appendTo(scrollView2);

//Robert Salino

    new tabris.ImageView({
        id: "robert",
        layoutData: {left: 24, top: "#icons1 5"},
        image: {src: "images/techsupport.png"},
        height: 117,
        width: 94
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "rinfo",
        text: "Robert Salino",
        layoutData: {left: "#robert 5", top: "#icons1 15"},
        font: "bold 18px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "rpos",
        text: "Support Technician\nDevice Family XYZ",
        layoutData: {left: "#robert 5", top: "#rinfo 2"},
        font: "15px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "rstat",
        text: "Status (Available/In Chat)",
        layoutData: {left: "#robert 5", top: "#rpos 2"},
        font: "15px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "icons2",
        image: {src: "images/icons.png"},
        layoutData: {left: 0, right: 0, top: "#rstat 25"},
        height: 72
    }).on("tap", function () {
        cordova.InAppBrowser.open('tel:18004444444', '_system');
    }).appendTo(scrollView2);

//Virgina Robertson

    new tabris.ImageView({
        id: "virgina",
        layoutData: {left: 24, top: "#icons2 5"},
        image: {src: "images/virgina.png"},
        height: 117,
        width: 94
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "vinfo",
        text: "Virgina Robertson",
        layoutData: {left: "#virgina 5", top: "#icons2 15"},
        font: "bold 18px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "vpos",
        text: "Key Account\nManager",
        layoutData: {left: "#virgina 5", top: "#vinfo 2"},
        font: "15px"
    }).appendTo(scrollView2);

    new tabris.TextView({
        id: "vstat",
        text: "Status (Available/In Chat)",
        layoutData: {left: "#virgina 5", top: "#vpos 2"},
        font: "15px"
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "icons3",
        image: {src: "images/icons.png"},
        layoutData: {left: 0, right: 0, top: "#vstat 25"},
        height: 72
    }).on("tap", function () {
        cordova.InAppBrowser.open('tel:18004444444', '_system');
    }).appendTo(scrollView2);

    new tabris.ImageView({
        id: "placeholder",
        layoutData: {left: 0, right: 0, top: "#icons3 15"},
        bottom: 16
    }).appendTo(scrollView2);

    trayContent.on("resize", function () {
        var bounds = trayContent.get("bounds");
        trayHeight = bounds.height;
        if (trayState === "dragging") {
            positionTrayInRestingState(2000);
        } else {
            tray.set("transform", {translationY: trayHeight});
        }
    });

    strap.on("pan:vertical", function (widget, event) {
        if (event.state === "start" && (trayState === "up" || trayState === "down")) {
            trayState = "dragging";
            dragOffset = tray.get("transform").translationY - event.translation.y;
        }
        if (trayState === "dragging") {
            var offsetY = Math.min(Math.max(event.translation.y + dragOffset, 0), trayHeight);
            tray.set("transform", {translationY: offsetY});
            strapIcon.set("transform", getStrapIconTransform(offsetY));
        }
        if (event.state === "end" && trayState === "dragging") {
            positionTrayInRestingState(event.velocity.y);
        }
    });

    strap.on("tap", function () {
        if (trayState === "up" || trayState === "down") {
            positionTrayInRestingState(trayState === "down" ? -1000 : 1000);
        }
    });


    function positionTrayInRestingState(velocity) {
        trayState = "animating";
        var translationY = velocity > 0 ? trayHeight : 0;
        var options = {
            duration: Math.min(Math.abs(trayHeight / velocity * 1000), 800),
            easing: Math.abs(velocity) >= 1000 ? "ease-out" : "ease-in-out"
        };
        strapIcon.animate({transform: getStrapIconTransform(translationY)}, options);
        tray.once("animationend", function () {
            trayState = velocity > 0 ? "down" : "up";
        }).animate({
            transform: {translationY: translationY}
        }, options);
    }

    function getDevices(id) {
        var xhttp = new XMLHttpRequest();
        var url = "https://something-phoenix913.c9users.io:8081/api/user/devices";
        var params = "id=" + id;
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(params);

        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var rows = xhttp.responseText;
                var result = JSON.parse(rows);
                var text1 = result[0]['Maintenance'];
                var text2 = result[1]['Maintenance'];
                var text3 = result[2]['Maintenance'];
                var text4 = result[3]['Maintenance'];
                messages.set("text", text1 || "No updates available");
                messages2.set("text", text2 || "No updates available");
                messages3.set("text", text3 || "No updates available");
            }
        }
    }

    function getStrapIconTransform(translationY) {
        var traveled = translationY / trayHeight;
        return {rotation: traveled * Math.PI - Math.PI};
    }

    page.apply({

        "#search": {layoutData: {top: 14, left: 160, right: 80}, font: "13px", opacity: 0.3, border: "0px"},
        "#scan": {layoutData: {left: "#search 10", right: 12, top: 12, height: 38}, font: "12px"},

        //device 1
        "#dev1": {layoutData: {left: 10, top: "#fdev 32"}, width: 141, height: 124},
        "#dev1info": {layoutData: {left: "#dev1 5", top: "#fdev 28"}, font: "bold 18px"},
        "#status": {layoutData: {left: "#dev1 5", top: "#dev1info 2"}, font: "14px"},
        "#warnings": {layoutData: {left: "#dev1 5", top: "#status 2"}, font: "14px"},
        "#messages": {layoutData: {left: "#dev1 5", top: "#warnings 2"}, font: "14px"},
        "#details": {layoutData: {left: "#dev1 5", top: "#messages 2"}, font: "14px", textColor: "blue"},
        "#line": {layoutData: {left: 0, right: 0, top: "#details 6"}, opacity: 0.3},

        //"Filter by..."
        "#filter": {
            layoutData: {left: 280, top: "fdev 80", height: 40, right: 5},
            font: "12px",
            opacity: 0.9
        },

        //device 2
        "#dev2": {layoutData: {left: 10, top: "#line 5"}, width: 141, height: 124},
        "#dev2info": {layoutData: {left: "#dev2 5", top: "#line 5"}, font: "bold 18px"},
        "#status2": {layoutData: {left: "#dev2 5", top: "#dev2info 2"}, font: "14px"},
        "#warnings2": {layoutData: {left: "#dev2 5", top: "#status2 2"}, font: "14px"},
        "#messages2": {layoutData: {left: "#dev2 5", top: "#warnings2 2"}, font: "14px"},
        "#details2": {layoutData: {left: "#dev2 5", top: "#messages2 2"}, font: "14px", textColor: "blue"},
        "#line2": {layoutData: {left: 0, right: 0, top: "#details2 6"}, opacity: 0.3},

        //device 3
        "#dev3": {layoutData: {left: 10, top: "#line2 5"}, width: 141, height: 124},
        "#dev3info": {layoutData: {left: "#dev3 5", top: "#line2 5"}, font: "bold 18px"},
        "#status3": {layoutData: {left: "#dev3 5", top: "#dev3info 2"}, font: "14px"},
        "#warnings3": {layoutData: {left: "#dev3 5", top: "#status3 2"}, font: "14px"},
        "#messages3": {layoutData: {left: "#dev3 5", top: "#warnings3 2"}, font: "14px"},
        "#details3": {layoutData: {left: "#dev3 5", top: "#messages3 2"}, font: "14px", textColor: "blue"},
        "#line3": {layoutData: {left: 0, right: 0, top: "#details3 6"}, opacity: 0.3},

    });

    return page;
};