function slx_inspector(){
    const iframe = document.getElementById("previewWindow");
    const idoc = iframe.contentWindow.document;
    //console.log("inspector called");
    //if(document.getElementById("inspector_active").style.display == 'inline-block'){
        //console.log("Inspector - Active");
    idoc.addEventListener("mouseover", (e)=>{
        //console.log("Mouse-Over Working...");
        if(document.getElementById("inspector_active").style.display == 'inline-block')
        e.target.classList.add("observe");
        e.target.addEventListener("click", (x)=>{
            console.log(x.target.id);
            console.log(x.target.classList);
            console.log(x.target.style.color);
        });
    });

    idoc.addEventListener("mouseout", (e)=>{
        //console.log("Mouse-Out Working...");
        if(document.getElementById("inspector_active").style.display == 'inline-block')
        e.target.classList.remove("observe");
    });
}