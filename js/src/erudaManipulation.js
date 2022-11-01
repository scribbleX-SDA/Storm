function devTools(){
    var frame = document.getElementById("frame").contentWindow.document;
    var slx_eruda = frame.getElementsByClassName("slx-eruda");
    slx_eruda = slx_eruda.shadowRoot;

    slx_eruda.getElementsByClassName("eruda-icon-tool")[0].style.display = "none";

    var toolsIcon = document.createElement("img");
    toolsIcon.style.height = "40px";
    slx_eruda.getElementsByClassName("eruda-entry-btn")[0].appendChild(toolsIcon);
}