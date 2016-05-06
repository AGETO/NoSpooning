exports.create = function () {

    var page = new tabris.Page({
        topLevel: false,
        title: "Get Live Support"
    }).on('backButtonPressed', function () {
        require("./menu.js").create('menu.js').open();
    });


    var scrollView = new tabris.ScrollView({
        left: 0, right: 0, top: 0, bottom: 0
    }).appendTo(page);

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
        id: "logoline",
        image: {src: "images/joon2.png"},
        layoutData: {left: 0, right: 0, top: "#iFork 20"},
        opacity: 0.3
    }).appendTo(scrollView);

    //CALL BUTTON
    new tabris.Button({
        id: "call",
        text: "Dial a number",
        layoutData: {top: "#logoline 2", centerX: 0}
    }).on("select", function () {
        cordova.InAppBrowser.open('tel:18004444444', '_system');
    }).appendTo(scrollView);

//Pete o'Donnell
    new tabris.ImageView({
        id: "pete",
        layoutData: {left: 24, top: "#call 5"},
        height: 117,
        width: 94,
        image: {src: "images/pete.png"}
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "pinfo",
        text: "Pete o'Donnell",
        layoutData: {left: "#pete 5", top: "#call 20"},
        font: "bold 18px"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "ppos",
        text: "Chief Support Engineer\nDevice Family XYZ",
        layoutData: {left: "#pete 5", top: "#pinfo 2"},
        font: "15px"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "pstat",
        text: "Status (Available/In Chat)",
        layoutData: {left: "#pete 5", top: "#ppos 2"},
        font: "15px"
    }).appendTo(scrollView);

    new tabris.ImageView({
        id: "icons1",
        image: {src: "images/icons.png"},
        layoutData: {left: 0, right: 0, top: "#pstat 25"},
        height: 72
    }).appendTo(scrollView);

//Robert Salino

    new tabris.ImageView({
        id: "robert",
        layoutData: {left: 24, top: "#icons1 5"},
        image: {src: "images/techsupport.png"},
        height: 117,
        width: 94
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "rinfo",
        text: "Robert Salino",
        layoutData: {left: "#robert 5", top: "#icons1 15"},
        font: "bold 18px"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "rpos",
        text: "Support Technician\nDevice Family XYZ",
        layoutData: {left: "#robert 5", top: "#rinfo 2"},
        font: "15px"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "rstat",
        text: "Status (Available/In Chat)",
        layoutData: {left: "#robert 5", top: "#rpos 2"},
        font: "15px"
    }).appendTo(scrollView);

    new tabris.ImageView({
        id: "icons2",
        image: {src: "images/icons.png"},
        layoutData: {left: 0, right: 0, top: "#rstat 25"},
        height: 72
    }).appendTo(scrollView);

//Virgina Robertson

    new tabris.ImageView({
        id: "virgina",
        layoutData: {left: 24, top: "#icons2 5"},
        image: {src: "images/virgina.png"},
        height: 117,
        width: 94
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "vinfo",
        text: "Virgina Robertson",
        layoutData: {left: "#virgina 5", top: "#icons2 15"},
        font: "bold 18px"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "vpos",
        text: "Key Account\nManager",
        layoutData: {left: "#virgina 5", top: "#vinfo 2"},
        font: "15px"
    }).appendTo(scrollView);

    new tabris.TextView({
        id: "vstat",
        text: "Status (Available/In Chat)",
        layoutData: {left: "#virgina 5", top: "#vpos 2"},
        font: "15px"
    }).appendTo(scrollView);

    new tabris.ImageView({
        id: "icons3",
        image: {src: "images/icons.png"},
        layoutData: {left: 0, right: 0, top: "#vstat 25"},
        height: 72
    }).appendTo(scrollView);

    new tabris.ImageView({
        id: "placeholder",
        layoutData: {left: 0, right: 0, top: "#icons3 15"},
        bottom: 16
    }).appendTo(scrollView);


    return page;
};