function alignElm(){
    $("#main").height($("#container").height() - $("#footer").height() -1);
    $("#innerMgr").height($("#manager").height() - $("#adContainer").height() - 1);
    $("#app").width($("#main").width() - $("#manager").width());

    $("#frameContainer").height($("#frameMgr").height() - $("#frameHeader").height());
    $("#frameCover").height($("#frameMgr").height() - $("#frameHeader").height());
    $("#frameX").height($("#frameContainer").height() - $("#browserHead").height() - 1);

    $("#htmlEditorP").height($("#htmlContainer").height() - $("#htmlHeader").height());
    $("#cssEditorP").height($("#cssContainer").height() - $("#cssHeader").height());
    $("#jsEditorP").height($("#jsContainer").height() - $("#jsHeader").height());
    // ---------------------- //
    $("#htmlback").height($("#htmlContainer").height() - $("#htmlHeader").height());
    $("#cssback").height($("#cssContainer").height() - $("#cssHeader").height());
    $("#jsback").height($("#jsContainer").height() - $("#jsHeader").height());


    setTimeout(()=>{
        htmlEditor.resize();
        cssEditor.resize();
        jsEditor.resize();
        headEditor.resize();

        hideEditorMargins();
    }, 10);
}