function render(){
    //slx_inspector();
    var htmlSnippet = htmlEditor.getValue();
    var cssSnippet = cssEditor.getValue();
    var jsSnippet = jsEditor.getValue();

    var previewFrame = document.getElementById("previewWindow");
    var previewFrame_contentManager = previewFrame.contentDocument || previewFrame.contentWindow.document;

    var preSnippet_html = "<DOCTYPE html>\n<html>\n\t<head><style>.observe{box-shadow: inset 0px 0px 0 10000px rgba(0,50,255,0.75) !important;}</style>\n\t\t<title>{ScribbleX-Project-Title}</title>\n\n\t\t<meta charset='UTF-8'>\n\t\t<meta hrrp-equiv='X-UA-Compatible' content='IE=edge'>\n\t\t<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n\n\t\t{ScribbleX-Project-StyleSheets}\n\n\t\t{ScribbleX-Project-JavaScript}\n\t</head>\n\t<body>\n\t\t{ScribbleX-Project-HTML}\n\n\t\t{ScribbleX-Project-JavaScriptFiles}\n\t</body>\n</html>";
    var snippet_html = preSnippet_html.replace("{ScribbleX-Project-StyleSheets}", "<style>\n"+cssSnippet+"\n</style>");
    var snippet_html = snippet_html.replace("{ScribbleX-Project-Title}", "ScribbleX Project");
    var snippet_html = snippet_html.replace("{ScribbleX-Project-HTML}", htmlSnippet);
    var snippet_html = snippet_html.replace("{ScribbleX-Project-JavaScriptFiles}", "<script>\n"+jsSnippet+"\n</script>");
    var snippet_html = snippet_html.replace("{ScribbleX-Project-JavaScript}", "<!--  {ScribbleX-Project-JavaScript}  -->");

    document.getElementById("frameCover").style.display = "none";
    document.getElementById("previewWindow").style.display = "block";

    previewFrame_contentManager.open();
    previewFrame_contentManager.write(snippet_html);
    previewFrame_contentManager;

    slx_inspector();
}