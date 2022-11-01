var editorPaneContainer = $("#editorPane")[0];
let editorResize = new ResizeObserver(()=>{
    alignElm();
    // alignElm();
    // alignElm();
    // console.log("Editor Resizing");
});
editorResize.observe(editorPaneContainer);
editorResize.observe(document.getElementById("container"));

var editor = new ResizeObserver(()=>{
    alignElm();
    htmlEditor.resize();
    cssEditor.resize();
    jsEditor.resize();
});
editor.observe(document.getElementById("htmlContainer"));
editor.observe(document.getElementById("cssContainer"));
editor.observe(document.getElementById("jsContainer"));