var tools = document.querySelectorAll(".toolIcon");
tools.forEach((tool)=>{
    tool.addEventListener("mouseover", ()=>{
        if(tool.id == "folderIcon"){
            document.getElementById("folderIcon_top").style.fill = "#8D8D8D";
            document.getElementById("folderIcon_bottom").style.fill = "#fff";
        }else if(tool.id == "pointerIcon"){
            document.getElementById("pointerIconClr").style.fill = "#fff";
        }
    });

    tool.addEventListener("mouseout", ()=>{
        if(tool.id == "folderIcon"){
            document.getElementById("folderIcon_top").style.fill = "#666666";
            document.getElementById("folderIcon_bottom").style.fill = "#8D8D8D";
        }else if(tool.id == "pointerIcon"){
            document.getElementById('pointerIconClr').style.fill = "#8d8d8d";
        }
    });
});


document.getElementById("minMgr").addEventListener("click", ()=>{
    document.getElementById("minMgr").style.display = "none";
    document.getElementById("maxMgr").style.display = "block";
    $("#manager").width(50);
    document.getElementById("toolsMgr").style.display = "none";
    alignElm();
});

document.getElementById("maxMgr").addEventListener("click", ()=>{
    document.getElementById("maxMgr").style.display = "none";
    document.getElementById("minMgr").style.display = "block";
    $("#manager").width(350);
    document.getElementById("toolsMgr").style.display = "block";
    alignElm();
});