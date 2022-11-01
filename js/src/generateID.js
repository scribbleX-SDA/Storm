var id = '';
function pre_genID_analysis(){
    var currentPID = '';
    var addr = window.location.href;
    if(addr.includes("?id=")){
        addr = new URLSearchParams(window.location.search);
        currentPID = addr.get("id");
        id = currentPID;
        grabProject();
        if(getCookie("userid") != ''){
            var ajxCall = new XMLHttpRequest();
            ajxCall.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    if(String(getCookie("userid")) == this.responseText){
                        setTimeout(()=>{
                            document.getElementById("projectID").value = "https://slx4.tech/?id="+currentPID;
                        }, 100);
                    }else{
                        generateID();
                    }
                }
            };
            ajxCall.open("GET", "https://storm.scribblex.net/backend/checkAuthor.php?id="+currentPID, true);
            ajxCall.send();
        }else{
            generateID();
        }
    }else{
        generateID();
    }
}



function generateID(){
    var ajxCall = new XMLHttpRequest();
    ajxCall.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            setTimeout(()=>{
                document.getElementById("projectID").value = `https://slx4.tech/?id=${String(this.responseText)}`;
            }, 100);
        }
    };
    ajxCall.open("GET", "https://storm.scribblex.net/backend/genID.php", true);
    ajxCall.send();
}


function grabProject(){
    var ajxCall_html = new XMLHttpRequest();
    ajxCall_html.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            temp = String(decodeURIComponent(this.responseText));
            if(temp == "Invalid"){ alert("Project Doesn't Exist."); }
            else{ htmlEditor.setValue(temp); }
        }
    };
    ajxCall_html.open("GET", "https://code.scribblex.net/htmlrelease.php?x="+id, true);
    ajxCall_html.send();

    var ajxCall_css = new XMLHttpRequest();
    ajxCall_css.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            temp = String(decodeURIComponent(this.responseText));
            if(temp == "Invalid"){ alert("Project Doesn't Exist."); }
            else{ cssEditor.setValue(temp); }
        }
    };
    ajxCall_css.open("GET", "https://code.scribblex.net/cssrelease.php?x="+id, true);
    ajxCall_css.send();

    var ajxCall_js = new XMLHttpRequest();
    ajxCall_js.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            temp = String(decodeURIComponent(this.responseText));
            if(temp == "Invalid"){ alert("Project Doesn't Exist."); }
            else{ jsEditor.setValue(temp); }
        }
    };
    ajxCall_js.open("GET", "https://code.scribblex.net/jsrelease.php?x="+id, true);
    ajxCall_js.send();

    var ajxCall_info = new XMLHttpRequest();
    ajxCall_info.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            if(temp == "Invalid"){ alert("Project Doesn't Exist."); }
            else{
                setTimeout(()=>{
                    info_grab = this.responseText;
                    var infoArr = info_grab.split(":://ScribbleX//::");
                    //console.table(infoArr);
                    document.getElementById("p-title").value = infoArr[0].replace("\n", '');
                    document.getElementById("p-desc").value = infoArr[1].replace("\n", '');
                    console.log(infoArr[2]);
                    if(infoArr[2].includes('react')){
                        jsf = 'React';
                        jsEditor.session.setMode("ace/mode/tsx");
                        var frameLinks = document.querySelectorAll(".jsFrameWork");
                        frameLinks.forEach((e)=>{
                            //e.classList.remove("activeJSF");
                            if(e.getAttribute("jsf") == "React"){
                                e.classList.add("activeJSF");
                            }else{
                                e.classList.remove("activeJSF");
                            }
                        });
                    }else if(infoArr[2].includes("jquery")){
                        jsf = 'jQuery';
                        jsEditor.session.setMode("ace/mode/javascript");
                        var frameLinks = document.querySelectorAll(".jsFramework");
                        var activejsf = document.querySelectorAll(".activeJSF");
                        frameLinks.forEach((e)=>{
                            //e.classList.remove("activeJSF");
                            if(e.getAttribute("jsf") == "jQuery"){
                                e.classList.add("activeJSF");
                            }else{
                                e.classList.remove("activeJSF");
                            }
                        });
                    }else{
                        jsf = 'PureJS';
                        jsEditor.session.setMode("ace/mode/javascript");
                        var frameLinks = document.querySelectorAll(".jsFramework");
                        var activejsf = document.querySelectorAll(".activeJSF");
                        frameLinks.forEach((e)=>{
                            //e.classList.remove("activeJSF");
                            if(e.getAttribute("jsf") == "PureJS"){
                                e.classList.add("activeJSF");
                            }else{
                                e.classList.remove("activeJSF");
                            }
                        });
                    }
                }, 1000);
            }
        }
    };
    ajxCall_info.open("GET", "https://code.scribblex.net/inforelease.php?x="+id, true);
    ajxCall_info.send();


    var ajxCall_head = new XMLHttpRequest();
    ajxCall_head.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            temp = String(decodeURIComponent(this.responseText));
            if(temp == "Invalid"){ alert("Project Doesn't Exist."); }
            else{ headEditor.setValue(temp); }
        }
    };
    ajxCall_head.open("GET", "https://code.scribblex.net/headrelease.php?x="+id, true);

    setTimeout(render, 3000);
}