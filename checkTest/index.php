<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScribbleX - Projects</title>

    <script>
        var jsCode = null;
        var htmlCode = null;
        var privacyStat = null;
        var cssCode = null;
        var author = null;
        var title = null;
    </script>
    
    <style>
        html, body{
            height: 100%;
            width: 100%;
            overflow: hidden;
        }
        @font-face {
            font-family: 'Montserrat';
            src: url('Montserrat-ExtraLight.eot');
            src: url('Montserrat-ExtraLight.eot?#iefix') format('embedded-opentype'),
                url('c-ExtraLight.woff2') format('woff2'),
                url('Montserrat-ExtraLight.woff') format('woff'),
                url('Montserrat-ExtraLight.ttf') format('truetype'),
                url('Montserrat-ExtraLight.svg#Montserrat-ExtraLight') format('svg');
            font-weight: 200;
            font-style: normal;
            font-display: swap;
        }


        #previewWindow{
            height: 100%;
            width: 100%;
            display: block;
        }

        #openSource{
            font-size: 20px;
            font-family: 'Montserrat';
            color: white;
            background-color: black;
            position: fixed;
            bottom: 50px;
            right: 50px;
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 9px;
            padding-bottom: 9px;

            border-style: solid;
            border-color: black;
            border-radius: 20px;

            cursor: pointer;
        }

        #openSource:hover{
            background-color: white;
            color: black;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <iframe frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" id="previewWindow"></iframe>
    <span id="openSource">Open Scr:bb/e</span>

    <script>
        function render(privacyStat, author, htmlCode, cssCode, jsCode, title){
            var previewFrame = document.getElementById("previewWindow");
            var previewFrame_contentManager = previewFrame.contentDocument || previewFrame.contentWindow.document;

            privacyStat = decodeURIComponent(privacyStat);
            htmlCode = decodeURIComponent(htmlCode);
            author = decodeURIComponent(author);
            cssCode = decodeURIComponent(cssCode);
            jsCode = decodeURIComponent(jsCode);
            title = decodeURIComponent(title);

            var preSnippet_html = "<DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>{ScribbleX-Project-Title}</title>\n\n\t\t<meta charset='UTF-8'>\n\t\t<meta hrrp-equiv='X-UA-Compatible' content='IE=edge'>\n\t\t<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n\n\t\t{ScribbleX-Project-StyleSheets}\n\n\t\t{ScribbleX-Project-JavaScript}\n\t</head>\n\t<body>\n\t\t{ScribbleX-Project-HTML}\n\n\t\t{ScribbleX-Project-JavaScriptFiles}\n\t</body>\n</html>";
            var snippet_html = preSnippet_html.replace("{ScribbleX-Project-StyleSheets}", "<style>\n"+cssCode+"\n</style>");
            snippet_html = snippet_html.replace("{ScribbleX-Project-Title}", "ScribbleX Project");
            document.title = title;
            snippet_html = snippet_html.replace("{ScribbleX-Project-HTML}", htmlCode);
            snippet_html = snippet_html.replace("{ScribbleX-Project-JavaScriptFiles}", jsCode+"\n</"+"script>");
            snippet_html = snippet_html.replace("{ScribbleX-Project-JavaScript}", "<!--  {ScribbleX-Project-JavaScript}  -->");

            previewFrame_contentManager.open();
            previewFrame_contentManager.write(snippet_html);
            previewFrame_contentManager;

            document.getElementById("openSource").addEventListener("click", ()=>{
                var projectID = window.location.href;
                projectID = String(projectID);
                projectID = projectID.replace("http://localhost/scribbleX/ide/checkTest/", "");
                window.location.href = "https://app.scribblex.net/ID="+projectID;
            });
        }
    </script>
</body>
</html>

<?php

$val = $_REQUEST["x"];

//echo "<script>console.log(".$val.");</script>";

$htmlFile = fopen("projects/".$val."/index.html", "r");
$cssFile = fopen("projects/".$val."/main.css", "r");
$jsFile = fopen("projects/".$val."/main.js", "r");
$dataFile = fopen("projects/".$val."/data.txt", "r");

$htmlCode = "";
$cssCode = "";
$jsCode = "";

while(!feof($htmlFile)){$htmlCode .= fgets($htmlFile);}
while(!feof($cssFile)){$cssCode .= fgets($cssFile);}
while(!feof($jsFile)){$jsCode .= fgets($jsFile);}

$author_name = fgets($dataFile);
$privacyStat = fgets($dataFile);
$projectTitle = fgets($dataFile);

$jsCode = "<script>".$jsCode;

//echo $htmlCode;
//echo $cssCode;
//echo $jsCode;

echo "<script>render('".rawurlencode($privacyStat)."','".rawurlencode($author_name)."','".rawurlencode($htmlCode)."','".rawurlencode($cssCode)."','".rawurlencode($jsCode)."','".rawurlencode($projectTitle)."')</script>";
fclose($htmlFile);
fclose($cssFile);
fclose($jsFile);

?>