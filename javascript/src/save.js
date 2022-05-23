function saveCode(){
    alert("saveCode called");
    var html = htmlEditor.getValue();
    alert(html);
    html = encodeURIComponent(html);
    var css = cssEditor.getValue();
    alert(css);
    css = encodeURIComponent(css);
    var js = jsEditor.getValue();
    alert(js);
    js = encodeURIComponent(js);
    var title = document.getElementById("project-title").value;
    alert(title);
    title = encodeURIComponent(title);
    var privacy = document.getElementById("togglePrivateBtn").value;
    alert(privacy);
    privacy = encodeURIComponent(privacy);
    var uid = String(getCookie("userid"));
    alert(uid);
    

    var ajxCall_html = new XMLHttpRequest();
    var response = '';
    ajxCall_html.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            response = String(this.responseText);
            alert(response);
            alert("Here in HTML SENDING...");
        }
    };
    ajxCall_html.open("GET", "https://scribblex.net/grab_html.php?code="+html+"&uid="+uid+"&pid="+dedicatedProjectID+"&title="+title+"&ext=NOPE", true);
    ajxCall_html.send();

    setTimeout(()=>{
        if(response == "HTML_COMPLETE"){
            alert("HTML Saved");
            proceedWithRest(css, js, privacy, uid, dedicatedProjectID);
        }
    }, 2000);

    function proceedWithRest(css, js, privacy, userid, projectid){
        var css_RESP = '';
        var js_RESP = '';
        var pr_RESP = '';
        var ajxCall_css = new XMLHttpRequest();
        ajxCall_css.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                css_RESP = this.responseText;
                alert(css_RESP);
            }
        };
        ajxCall_css.open("GET", "https://scribblex.net/grab_css.php?code="+css+"&uid="+userid+"&pid="+projectid, true);
        ajxCall_css.send();

        var ajxCall_js = new XMLHttpRequest();
        ajxCall_js.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                js_RESP = this.responseText;
                alert(js_RESP);
            }
        };
        ajxCall_js.open("GET", "https://scribblex.net/grab_js.php?code="+js+"&uid="+userid+"&pid="+projectid, true);
        ajxCall_js.send();

        var ajxCall_privacy = new XMLHttpRequest();
        ajxCall_privacy.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                pr_RESP = this.responseText;
                alert(pr_RESP);
            }
        };
        ajxCall_privacy.open("GET", "https://scribblex.net/grab_projectInfo.php?uid="+userid+"&pid="+projectid+"&privacyStat="+privacy, true);
        ajxCall_privacy.send();
        //console.log("https://scribblex.net/grab_projectInfo.php?uid="+userid+"&pid="+projectid+"privacyStat="+privacy);

        setTimeout(()=>{
            alert("Project Saved!");
        }, 3000);
    }
}