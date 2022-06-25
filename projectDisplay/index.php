<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScribbleX Projects</title>

    <style>
        html,
        body{
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
        }

        @font-face{
            font-family: 'Montserrat';
            src: url('font/Montserrat-ExtraLight.eot');
            src: url('font/Montserrat-ExtraLight.eot?#iefix') format('embedded-opentype'),
                 url('font/Montserrat-ExtraLight.woff2') format('woff2'),
                 url('font/Montserrat-ExtraLight.woff') format('woff'),
                 url('font/Montserrat-ExtraLight.ttf') format('truetype'),
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

        #opensource{
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
        #opensource:hover{
            background-color: white;
            color: black;
            cursor: pointer;
        }
    </style>


    <script>    var jsCode, htmlCode, cssCode, author, title, privacy, description = null;   </script>
</head>
<body>
    <iframe id="previewWindow" 
        frameborder='0'
        hspace="0" vspace="0"
        marginheight="0" marginwidth="0">
    </iframe>

    <span id="opensource">Open Scr:bb/e</span>

    <script src="projectDisplay.js"></script>
</body>
</html>

<?php
    //$val = $_REQUEST["x"];
    if(!$_REQUEST["x"]){
        die("Watcha lookin for mate..???");
    }else{
        $val = $_REQUEST["x"];
        $htmlFile = fopen("projects/".$val."/html.txt", "r");
        $cssFile = fopen("projects/".$val."/css.txt", "r");
        $jsFile = fopen("projects/".$val."/js.txt", "r");
        $infoFile = fopen("projects/".$val."/info.txt", "r");

        $htmlCode = '';
        $cssCode = '';
        $jsCode = '';

        while(!feof($htmlFile)) $htmlCode .= fgets($htmlFile);
        while(!feof($cssFile)) $cssCode .= fgets($cssFile);
        while(!feof($jsFile)) $jsCode .= fgets($jsFile);

        $projectID = fgets($infoFile);
        $author = fgets($infoFile);
        $privacy = fgets($infoFile);
        $projectTitle = fgets($infoFile);
        $desc = fgets($infoFile);

        echo "<script> render('".rawurlencode($privacy)."', '".rawurlencode($author)."', '".rawurlencode($projectTitle)."', '".rawurlencode($desc)."', '".rawurlencode($htmlCode)."', '".rawurlencode($cssCode)."', '".rawurlencode($jsCode)."'); </script>";

        fclose($htmlFile);
        fclose($cssFile);
        fclose($jsFile);
        fclose($infoFile);
    }
?>