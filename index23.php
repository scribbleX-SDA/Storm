<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script>
        var dedicatedProjectID = '';
        var useridInit = '';
    </script>

    <link rel="stylesheet" href="stylesheets/main.css">
    <link rel="stylesheet" href="stylesheets/gutterStyle.css">
    <link rel="stylesheet" href="stylesheets/togglePrivate.css">
    <link rel="stylesheet" href="stylesheets/preloader.css">
    <link rel="stylesheet" href="stylesheets/connect.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">

    <script src="javascript/libs/jQuery.js"></script>
    <script src="javascript/libs/split.js"></script>
    <script src="javascript/ace/src/ace.js"></script>
    <script src="javascript/ace/src/ext-language_tools.js"></script>


    <script src="javascript/src/elementAlign.js"></script>
    <script src="javascript/src/cookiesManager.js"></script>

    <script>
        var id = '';
        var auther_info = '';
        function idURL(){
            var x = window.location.href;
            x = String(x);
            if(x.includes("http://localhost/scribblex/ide/")){
                x = x.replace("http://localhost/scribblex/ide/", "");
                if(x == ''){
                    var auther_info = getCookie("userid");
                    //alert(auther_info);
                    if(auther_info == '' || auther_info == null){auther_info = "2";}
                    else{auther_info = String(auther_info);}
                    useridInit = auther_info;
                    var ajxCall = new XMLHttpRequest();
                    ajxCall.onreadystatechange = function(){
                        if(this.readyState == 4 && this.status == 200){
                            var response = this.responseText;
                            //alert(response);
                            response = String(response);
                            //alert("This is the MAX ID WE GOT: "+response);
                            if(response == "ERROR"){
                                //alert("Unexpected Error. Contact ScribbleX: error@scribblex.net");
                            }else{
                                setTimeout(()=>{
                                    //alert(parseInt(response));
                                    dedicatedProjectID = parseInt(response)+1;
                                    //alert(dedicatedProjectID);
                                    dedicatedProjectID = String(dedicatedProjectID);
                                    document.getElementById("url-bar").innerHTML = "https://web.scribblex.net/"+useridInit+"/"+dedicatedProjectID;
                                }, 1000);
                            }
                        }
                    };
                    ajxCall.open("GET", "https://scribblex.net/checkProject.php?userid="+auther_info, true);
                    ajxCall.send();
                }else{
                    var project_info = x;
                    var arr = project_info.split("/");
                    auther_info = arr[0];
                    id = arr[1];

                    var current_auther = getCookie("userid");
                    if(current_auther == auther_info){
                        // DO NOTHING... ALLOW EVERYTHING!
                    }else{
                        // Create a new ID and copy the code to a new branch.
                    }
                }
            }else{
                alert("Unexpected Error Encountered!");
                // Kill the process here if necessary
            }
        }
        idURL();
    </script>

    <script>
        function preloader_launch(){
            //document.getElementById("footer").style.display = "none";
            setTimeout(()=>{
                document.getElementById("footer").style.display = "block";
                document.getElementById("container").style.display = "block";
                document.getElementById("preload").style.display = "none";
            }, 8000);
        }

        function initiate(){
            elementAlign();
            preloader_launch();
            $("#connect-container").height($("#connect_container").height() - $("#connect_header").height() - 1);
        }
    </script>

    <script>
        var usid = getCookie("userid");
        if(usid == null || usid == ""){
            //alert("NO LOGIN FOUND");
        }else{
            //alert("LOGIN FOUND: "+usid);
        }
    </script>
</head>
<body onload="initiate();">
    <div id="preload">
        <img src="assets/gif/orbScribbleX.gif" alt="Orb preloader" id="preloaderGif">
    </div>

    <div style="display: none;">
        <form action="" method="POST">
            <textarea name="html_textArea" id="htmlTextArea" cols="30" rows="10"></textarea>
            <textarea name="css_textArea" id="cssTextArea" cols="30" rows="10"></textarea>
            <textarea name="js_textArea" id="jsTextArea" cols="30" rows="10"></textarea>
            <input type="text" value="" name="projectIDField" id="projectIDField">
            <input type="text" value="" name="userIDField" id="userIDField">
            <input type="text" value="" name="privacyStatField" id="privacyStatField">
            <input type="submit" value="Submit" id="submitCodeButton_form">
        </form>
    </div>


    <script>
        TogetjerJSConfig_hubBase = "https://collabhub.scribblex.net";
    </script>
    <script src="https://togetherjs.com/togetherjs-min.js"></script>


    <script>
        //  ON DETECTING CRTL + SHIFT + R --> inspector()
        var isCtrlHold = false;

        $(document).keyup(function (e) {
            if (e.which == 17) //17 is the code of Ctrl button
                isCtrlHold = false;
        });
        $(document).keydown(function (e) {
            if (e.which == 17)
                isCtrlHold = true;
        
            ShortcutManager(e);
        });

        function ShortcutManager(e){
            if(isCtrlHold && e.which == 82){
                e.preventDefault(); //prevent browser from the default behavior
                //alert("Ctrl+R is pressed");
                render();
                isCtrlHold = false;
            }
            if(isCtrlHold && e.which == 82){
                e.preventDefault();
                render();
            }
        }
    </script>
    <div id="connect_container">
        <div id="connect_header">
            <div id="connect_header-container">
                <img src="assets/logo/logox.png" alt="ScribbleX Logo / ScribbleX" id="connect_header_logo">
                <img src="assets/icons/cancel.png" alt="Close" id="close_connect_container">
            </div>
        </div>
        <div id="connect_header_connect-container"></div>

        <div id="connect-container">
            <form id="loginForm" autocomplete="off">
                <input type="text" name="userLogin" id="userLog" required aria-autocomplete="both" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" autofocus="" role="combobox" spellcheck="false" placeholder="Username / Email">
                <br>
                <br>
                <input type="password" id="password_login" required aria-autocomplete="both" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" autofocus="" role="combobox" spellcheck="false" placeholder="Password">
                <br>
                <br>
                <!-- <input type="button" value="Login" id="login_btn" onclick="checkLogin();"> -->
                <span id="login_btn" onclick="checkLogin();">Login</span>
                <br>
                <br>
                <br>
                <br>
                <br>
                <center>
                    <span style="color: grey; font-family: Lato; font-size: 15px;">Don't have an account? <span style="color: blue; font-family: Lato; font-size: 15px; cursor: pointer;" onclick="show_signupForm();">Create Account Here.</span></span>
                </center>
            </form>

            <form id="signupForm">
                <input type="text" name="Username" id="username" requiredaria-autocomplete="both" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" autofocus="" role="combobox" spellcheck="false" placeholder="Username">
                <br>
                <span id="username_notAllowed">Unavailable</span><span id="username_Allowed">Available</span>
                <br>
                <input type="email" name="Email" id="email" required aria-autocomplete="both" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" autofocus="" role="combobox" spellcheck="false" placeholder="Email">
                <br>
                <span id="email_notAllowed">Already Registered</span><span id="email_Allowed">Available</span>
                <br>
                <input type="password" id="password_signup" required aria-autocomplete="both" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" autofocus="" role="combobox" spellcheck="false" placeholder="Password">
                <br>
                <br>
                <!-- <input type="button" value="SignUp" id="signup_btn" onclick="signup();"> -->
                <span id="signup_btn" onclick="signup();">SignUp</span>
                <br>
                <br>
                <br>
                <br>
                <br>
                <center>
                    <span style="color: grey; font-family: Lato; font-size: 15px;">Already have an account? <span style="color: blue; font-family: Lato; font-size: 15px; cursor: pointer;" onclick="show_loginForm();">Login Here.</span></span>
                </center>
            </form>
        </div>
        <script src="javascript/src/connect.js"></script>
    </div>
    <div id="container">
        <div id="header">
            <div id="header-container">
                <img src="assets/logo/logox.png" alt="ScribbleX Logo" id="logo_header-appContainer">
                <img src="assets/icons/user.png" alt="Connect" id="connect_logo">
            </div>
        </div>
        <div id="gap-header_appContainer"></div>
        <!--
===================================================================================================
        -->
        <div id="appContainer">
            <div id="side-bar">
                <div id="dashContainer">
                    <div id="dash-header">
                        <div id="dash-header-container">
                            <img src="assets/icons/dashboard.png" alt="Dashboard" id="dashboard_icon">
                            <span id="dashboard-title">Dashboard</span>
                        </div>
                    </div>
                    <div id="dash-container">
                        <div id="dash-tools">
                            <img src="assets/icons/selection.png" alt="Element Inspector" id="inspector_inactive" title="Element Inspector" class="dashTools">
                            <img src="assets/icons/selection-active.png" alt="Element Inspector" id="inspector_active" title="Element Inspector - Active" class="dashTools">
                            <img src="assets/icons/palette.png" alt="Color Palette" id="palette_inactive" title="Color Palette" class="dashTools">
                            <img src="assets/icons/palette-active.png" alt="Color Palette" id="palette_active" title="Color Palette - Active" class="dashTools">
                            <img src="assets/icons/gradient.png" alt="Gradient Generator" id="gradient_inactive" title="Gradient Generator" class="dashTools">
                            <img src="assets/icons/gradient-active.png" alt="Gradient Generator" id="gradient_active" title="Gradient Generator - Active" class="dashTools">
                            &nbsp;&nbsp;&nbsp;&nbsp;<button onclick="TogetherJS(this); return false;">Collaborate</button>
                        </div>
                        <div id="dash-manager"></div>
                    </div>
                </div>
            </div>
            <div id="holder">
                <div id="top-holder">
                    <div id="top-appContainer">
                        <div id="top-appContainer_flex">
                            <div id="manager">
                                <div id="manager-header" class="Containerheader">
                                    <div class="headerWrap">
                                        <span id="managerText">Manager</span>
                                    </div>
                                </div>
                                <div id="managerContainer">
                                    <div id="manager-container">
                                        <br>
                                        <input type="text" id="project-title"
                                        placeholder="Project Title" required autocomplete="off" spellcheck="false">
                                        &nbsp;&nbsp;&nbsp;<img src="assets/icons/upload.png" alt="Save Code" id="saveCode" onclick="saveCodeVal();">
                                        <br>
                                        <br>
                                        <br>
                                        <textarea name="projectDescription" id="projectDescription" cols="45" rows="5" placeholder="Project Description... (Optional)"></textarea> 
                                        <br>
                                        <br>
                                        <span id="privateScribble">Private Scribble</span>&nbsp;&nbsp;&nbsp;<input type="checkbox" class="togglePrivate" id="togglePrivateBtn" onclick="privacyStat();" value="PUBLIC">
                                    </div>
                                </div>
                            </div>
                            <div id="frame">
                                <div id="frame-header" class="Containerheader">
                                    <div class="headerWrap">
                                        <img src="assets/icons/home.png" alt="home" id="homeBtn" class="frameIcons">
                                        <img src="assets/icons/reload.png" alt="reload / refresh" id="reloadBtn" class="frameIcons">
                                        <img src="assets/icons/search.png" alt="search" id="searchBtn" class="frameIcons">
                                        <div id="url-bar">
                                            https://scribblex.net/username/projectID
                                        </div>
                                    </div>
                                </div>
                                <div id="frameCover">
                                    <img src="assets/logo/logox.png" alt="ScribbleX Logo" id="logo_frameCover">
                                    <br>
                                    <span style="color: grey; font-family: Lato;" id="frameCover_text">Online Web Development Environment</span>
                                </div>
                                <iframe frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" id="previewWindow"></iframe>
                                <div id="devConsole">
                                    <div id="console-header">
                                        <span id="console-title">&gt;_ Dev Console</span>
                                        <img src="assets/icons/maximize.png" alt="Maximize Console" id="max_console" class="console-resize">
                                        <img src="assets/icons/minimize.png" alt="Minimize Console" id="min_console" class="console-resize">
                                    </div>
                                    <div id="console-container">
                                        <span style="font-family: Lato; font-size: 25px; color: grey; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">Coming Soon...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="bottom-holder">
                    <div id="bottom-appContainer">
                        <div id="bottom-appContainer_flex">
                            <div id="htmlHolder">
                                <div id="html-header" class="Containerheader">
                                    <div class="headerWrap">
                                        <span id="htmlText">html</span>
                                    </div>
                                    <div id="htmlContainer" class="codeContainers">
                                        <div id="htmlEditor" class="editors"></div>
                                    </div>
                                </div>
                            </div>
                            <div id="cssHolder">
                                <div id="css-header" class="Containerheader">
                                    <div class="headerWrap">
                                        <span id="cssText">css</span>
                                    </div>
                                </div>
                                <div id="cssContainer" class="codeContainers">
                                    <div id="cssEditor" class="editors"></div>
                                </div>
                            </div>
                            <div id="jsHolder">
                                <div id="js-header" class="Containerheader">
                                    <div class="headerWrap">
                                        <span id="jsText">js</span>
                                    </div>
                                </div>
                                <div id="jsContainer" class="codeContainers">
                                    <div id="jsEditor" class="editors"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--
===================================================================================================
        -->
        <div id="footer">
            <div id="footer-container">
                <span id="footer-title">Made&nbsp;&nbsp;with&nbsp;&nbsp;<img src="assets/icons/heart.png" alt="Love" class="footer-icon">&nbsp;&nbsp;&&nbsp;&nbsp;<img src="assets/icons/coffee-cup.png" alt="Coffee" class="footer-icon"></span>
            </div>
        </div>
    </div>

    <script src="javascript/src/splitContainer.js"></script>
    <script src="javascript/src/editors.js"></script>
    <script src="javascript/src/render.js"></script>
    <script src="javascript/src/privacyCheck.js"></script>
    <script src="javascript/src/save.js"></script>

    <script>
        var elem = $("#top-appContainer")[0];
        let resizeObserveEditors = new ResizeObserver(()=>{
            elementAlign();
            htmlEditor.resize();
            cssEditor.resize();
            jsEditor.resize();
        });
        resizeObserveEditors.observe(elem);
        resizeObserveEditors.observe(document.getElementById("container"));
    </script>


    <script>
        var inspector = document.getElementById("inspector_inactive");
        var inspector_active = document.getElementById("inspector_active");
        var palette = document.getElementById("palette_inactive");
        var palette_active = document.getElementById("palette_active");
        var gradient = document.getElementById("gradient_inactive");
        var gradient_active = document.getElementById("gradient_active");

        inspector.addEventListener("click", ()=>{
            inspector.style.display = "none";
            inspector_active.style.display = "inline-block";
        });
        inspector_active.addEventListener("click", ()=>{
            inspector.style.display = "inline-block";
            inspector_active.style.display = "none";
        });

        palette.addEventListener("click", ()=>{
            palette.style.display = "none";
            gradient_active.style.display = "none";
            palette_active.style.display = "inline-block";
            gradient.style.display = "inline-block";
        });
        palette_active.addEventListener("click", ()=>{
            palette.style.display = "inline-block";
            gradient_active.style.display = "none";
            palette_active.style.display = "none";
            gradient.style.display = "inline-block";
        });
        gradient.addEventListener("click", ()=>{
            palette.style.display = "inline-block";
            gradient_active.style.display = "inline-block";
            palette_active.style.display = "none";
            gradient.style.display = "none";
        });
        gradient_active.addEventListener("click", ()=>{
            palette.style.display = "inline-block";
            gradient_active.style.display = "none";
            palette_active.style.display = "none";
            gradient.style.display = "inline-block";
        });
    </script>

    <script>
        document.getElementById("reloadBtn").addEventListener("click", ()=>{
            render();
        });

        var devConsole_resize_count = 0;

        document.getElementById("devConsole").addEventListener("dblclick", ()=>{
            // $("#frameCover").height($("#frameCover").height() - 200);
            // $("#previewWindow").height($("#previewWindow").height() - 200);
            if(devConsole_resize_count == 0){
                document.getElementById("devConsole").style.height = "225px";
                document.getElementById("console-container").style.display = "block";
                document.getElementById("max_console").style.display = "none";
                document.getElementById("min_console").style.display = "block";
                elementAlign();
                devConsole_resize_count = 1;
            }else{
                document.getElementById("devConsole").style.height = "25px";
                document.getElementById("console-container").style.display = "none";
                document.getElementById("max_console").style.display = "block";
                document.getElementById("min_console").style.display = "none";
                elementAlign();
                devConsole_resize_count = 0;
            }
        });

        document.getElementById("max_console").addEventListener("click", ()=>{
            // $("#frameCover").height($("#frameCover").height() - 200);
            // $("#previewWindow").height($("#previewWindow").height() - 200);
            if(devConsole_resize_count == 0){
                document.getElementById("devConsole").style.height = "225px";
                document.getElementById("console-container").style.display = "block";
                document.getElementById("max_console").style.display = "none";
                document.getElementById("min_console").style.display = "block";
                elementAlign();
                devConsole_resize_count = 1;
            }
        });

        document.getElementById("min_console").addEventListener("click", ()=>{
            // $("#frameCover").height($("#frameCover").height() + $("#devConsole").height());
            // $("#previewWindow").height($("#previewWindow").height() + 200);
            
            document.getElementById("devConsole").style.height = "25px";
            document.getElementById("console-container").style.display = "none";
            document.getElementById("max_console").style.display = "block";
            document.getElementById("min_console").style.display = "none";
            elementAlign();
            devConsole_resize_count = 0;
        });
    </script>

    <script>
        document.getElementById("connect_logo").addEventListener("click", ()=>{
            document.getElementById("container").style.display = "none";
            document.getElementById("connect_container").style.display = "block";
        });

        document.getElementById("close_connect_container").addEventListener("click", ()=>{
            document.getElementById("container").style.display = "block";
            document.getElementById("connect_container").style.display = "none";
        });
    </script>


    <script>
        function saveCodeVal(){
            var html_x = htmlEditor.getValue();
            var css_x = cssEditor.getValue();
            var js_x = jsEditor.getValue();

            document.getElementById("htmlTextArea").value = html_x;
        }
    </script>
</body>
</html>


<?php
    function save(){
        $htmlCode = htmlspecialchars($_POST["html_textArea"]);
        $cssCode = htmlspecialchars($_POST["css_textArea"]);
        $jsCode = htmlspecialchars($_POST["js_textArea"]);
        $userid = $_POST["userIDField"];
        $projectid = $_POST["projectIDField"];
        $privacyStat = $_POST["privacyStatFiled"];

        $file = fopen("/projects/tempTest.txt", "w");
        fwrite($file, $htmlCode."\n\n\n\n".$cssCode."\n\n\n\n".$jsCode."\n\n\n\n");
        fclose($file);

        echo "<script>alert('PHP process complete');</script>";
    }
?>