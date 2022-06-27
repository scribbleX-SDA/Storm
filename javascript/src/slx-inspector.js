function slx_inspector(){
    const iframe = document.getElementById("previewWindow");
    const idoc = iframe.contentWindow.document;

    idoc.addEventListener("mouseover", (e)=>{
        e.target.classList.add("observe");
    });

    idoc.addEventListener("click", (e)=>{
        alert(window.getComputedStyle(e.target).getPropertyValue("color"));
        alert(window.getComputedStyle(e.target).getPropertyValue("background-color"));
        alert(window.getComputedStyle(e.target).getPropertyValue("opacity"));
        alert(window.getComputedStyle(e.target).getPropertyValue("font-size"));
    });

    idoc.addEventListener("mouseout", (e)=>{
        e.target.classList.remove("observe");
    });
}