function render(mode, project_author, project_title, project_description, html, css, js){
    var previewFrame = document.getElementById("previewWindow");
    var previewFrame_contentManager = previewFrame.contentDocument || previewFrame.contentWindow.document;

    privacy = decodeURIComponent(mode);
    privacyManipulation(decodeURIComponent(mode));

    author = decodeURIComponent(project_author);
    document.title = decodeURIComponent(project_title);
    description = decodeURIComponent(project_description);
    htmlCode = decodeURIComponent(html);
    cssCode = decodeURIComponent(css);
    jsCode = decodeURIComponent(js);

    var snippet = "<!DOCTYPE html>\
    <html>\
        <head>\
            <title>\
                {ScribbleX_Project_Title}\
            </title>\
            <meta charset=\'UTF-8\'>\
            <meta http-equiv=\'X-UA-Compatible\' content=\'IE=Edge\'>\
            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\
            {ScribbleX_Project_CSS}\
            {ScribbleX_Project_Ext}\
        </head>\
        <body>\
            {ScribbleX_Project_HTML}\
    \
            {ScribbleX_Project_JS}\
        </body>\
    </html>";

    snippet = snippet.replace("{ScribbleX_Project_Title}", decodeURIComponent(project_title));
    snippet = snippet.replace("{ScribbleX_Project_CSS}", "<style>\t"+cssCode+"\t</style>");
    snippet = snippet.replace("{ScribbleX_Project_Ext}", "<!--  {ScribbleX_Project_Ext}  -->");
    snippet = snippet.replace("{ScribbleX_Project_HTML}", htmlCode);
    snippet = snippet.replace("{ScribbleX_Project_JS}", "<script>\t"+jsCode+"\t</script>");

    previewFrame_contentManager.open();
    previewFrame_contentManager.write(snippet);
    previewFrame_contentManager;
}

function privacyManipulation(val){
    if(val == 'PRIVATE'){ document.getElementById("opensource").disabled = true; }
    else{ document.getElementById("opensource").disabled = false; }
}

document.getElementById("opensource").addEventListener("click", ()=>{
    var projectID = String(window.location.href).replace("https://code.scribblex.net/?x=", "");
    window.location.href = "https://app.scribblex.net/?id="+projectID;
});