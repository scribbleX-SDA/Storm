document.getElementById("userAcc").addEventListener("click", ()=>{
    if($("#manager").width() <= 300){
        document.getElementById("minMgr").style.display = "block";
        document.getElementById("maxMgr").style.display = "none";
        $("#manager").width(350);
    }
    var mgrContainers = document.querySelectorAll(".toolsMgr_inner");
    mgrContainers.forEach((mgr)=>{
        mgr.style.display = "none";
    });
    if(getCookie("userid") != ''){
        document.getElementById("accUnlink").style.display = "block";
        document.getElementById("accLink").style.display = "none";
    }else{
        document.getElementById("accLink").style.display = "block";
        document.getElementById("accUnlink").style.display = "none";
    }
    document.getElementById("toolsMgr").style.display = "block";
    alignElm();
});

document.getElementById("folderIcon").addEventListener("click", ()=>{
    if($("#manager").width() <= 300){
        document.getElementById("minMgr").style.display = "block";
        document.getElementById("maxMgr").style.display = "none";
        $("#manager").width(350);
    }
    var mgrContainers = document.querySelectorAll(".toolsMgr_inner");
    mgrContainers.forEach((mgr)=>{
        mgr.style.display = "none";
        document.getElementById("pmgr_home").style.display = "block";
    });
    document.getElementById("toolsMgr").style.display = "block";
    alignElm();
});