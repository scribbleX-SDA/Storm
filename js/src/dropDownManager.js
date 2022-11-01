var dds = document.querySelectorAll(".dropDown");
dds.forEach((dd)=>{
    dd.addEventListener("click", ()=>{
        // dd.classList.remove("dropDown");
        if(!dd.classList.contains("dropDown_active")){
            dd.classList.add("dropDown_active");
            var ddId = dd.id;
            if(ddId == "htmldrop"){
                document.getElementById("htmlEditorP").style.display = "none";
                document.getElementById("htmlback").style.display = "block";
            }else if(ddId == "cssdrop"){
                document.getElementById("cssEditorP").style.display = "none";
                document.getElementById("cssback").style.display = "block";
            }else{
                document.getElementById("jsEditorP").style.display = "none";
                document.getElementById("jsback").style.display = "block";
            }
        }else{
            var ddaId = dd.id;
            dd.classList.remove("dropDown_active");
            // dda.classList.add("dropDown");
            if(ddaId == "htmldrop"){
                document.getElementById("htmlEditorP").style.display = "block";
                document.getElementById("htmlback").style.display = "none";
            }else if(ddaId == "cssdrop"){
                document.getElementById("cssEditorP").style.display = "block";
                document.getElementById("cssback").style.display = "none";
            }else{
                document.getElementById("jsEditorP").style.display = "block";
                document.getElementById("jsback").style.display = "none";
            }
        }
    });
    hideEditorMargins();
});