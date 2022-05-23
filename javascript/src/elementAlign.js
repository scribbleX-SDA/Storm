function elementAlign(){
    $("#appContainer").height($("#container").height() - $("#header").height() - $("#footer").height() - 1);
    $("#holder").width($("#container").width() - $("#side-bar").width() - 1);
    $("#frameCover").height($("#frame").height() - $("#frame-header").height() - $("#devConsole").height());
    $("#previewWindow").height($("#frame").height() - $("#frame-header").height() - $("#devConsole").height());
    $("#managerContainer").height($("#manager").height() - $("#manager-header").height() - 1);
    //$("#managerCenterContainer").height($("#managerContainer").height() - 60);
    $("#manager-container").height($("#managerContainer").height() - 60);
    $("#manager-container").width($("#managerContainer").width() - 60);

    $("#htmlContainer").height($("#htmlHolder").height() - $("#html-header").height());
    $("#cssContainer").height($("#cssHolder").height() - $("#css-header").height());
    $("#jsContainer").height($("#jsHolder").height() - $("#js-header").height());
    $("#dashContainer").width($("#side-bar").width() - 40);
    $("#dash-container").height($("#dashContainer").height() - $("#dash-header").height() - 1);
}