var cssCode = '';
var jsCode = '';
var htmlCode = '';
var un_pid = '';

function saveCode(){
    console.log("Saving Code...");
    var htmlSnippet = htmlEditor.getValue();
    alert("HTML Gained");
    htmlCode = htmlSnippet;
    var cssSnippet = cssEditor.getValue();
    alert("CSS Gained");
    cssCode = cssSnippet;
    var jsSnippet = jsEditor.getValue();
    alert("JS Gained");
    jsCode = jsSnippet;
    var author = getCookie("userid");
    var pid = dedicatedProjectID; 
    un_pid = pid;
    var title = document.getElementById("project-title").value;
    var desc = document.getElementById("projectDescription").value;
    var vis = document.getElementById("togglePrivateBtn").value;

    if(String(author) == '' || String(author) == null){
        author = 'Anonymous';
        alert("Author: Anonymous");
        saveHTML();
    }else{
        alert("Making ajxCall - to get Username");
        var ajxCall = new XMLHttpRequest();
        ajxCall.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                author = this.responseText;
                alert(author);
                if(author == "ERROR"){
                    alert("Error Encountered. Contact ScribbleX");
                    author = "Anonymous";
                }
                saveHTML();
            }
        };
        ajxCall.open("GET", "https://backend.scribblex.net/getUsername.php?uid="+String(author), true);
        ajxCall.send();
    }


    /*cssSnippet = String(cssSnippet);
    cssSnippet = encodeURIComponent(cssSnippet);
    var cssBlob = new Blob([cssSnippet], {type:"text/plain"});
    var cssData = new FormData();
    cssData.append("code", cssBlob);
    cssData.append("pid", pid);

    fetch("https://code.scribblex.net/saveCSS.php", {
        method: "POST",
        body: cssData
    }).then((res)=>{return res.text();})
    .then((txt)=>{console.log(txt);});


    jsSnippet = String(jsSnippet);
    jsSnippet = encodeURIComponent(jsSnippet);
    var jsBlob = new Blob([jsSnippet], {type:"text/plain"});
    var jsData = new FormData();
    jsData.append("code", jsBlob);
    jsData.append("pid", pid);

    fetch("https://code.scribblex.net/saveJSS.php", {
        method: "POST",
        body: jsData
    }).then((res)=>{return res.text();})
    .then((txt)=>{console.log(txt);});*/

    function saveHTML(){
        alert("saveHTML() Called");
        htmlSnippet = String(htmlCode);
        //htmlSnippet = encodeURIComponent(htmlSnippet);
        var htmlBlob = new Blob([htmlSnippet], {type:"text/plain"});
        var htmlData = new FormData();
        htmlData.append("code", htmlBlob);
        htmlData.append("author", author);
        htmlData.append("pid", un_pid);
        htmlData.append("vis", vis);
        htmlData.append("title", title);
        htmlData.append("desc", desc);
    
        fetch("https://code.scribblex.net/saveHTML.php", {
            method: "POST",
            body: htmlData
        }).then((res)=>{return res.text();})
        .then((txt)=>{console.log(txt); saveCSS(cssSnippet);});
    }
}


function saveJS(){
    alert("saveJS() Called");
    jsSnippet = String(jsCode);
    //jsSnippet = encodeURIComponent(jsSnippet);
    var jsBlob = new Blob([jsSnippet], {type:"text/plain"});
    var jsData = new FormData();
    jsData.append("code", jsBlob);
    jsData.append("pid", un_pid);

    fetch("https://code.scribblex.net/saveJS.php", {
        method: "POST",
        body: jsData
    }).then((res)=>{return res.text();})
    .then((txt)=>{console.log(txt);});
}


function saveCSS(){
    alert("saveCSS() Called");
    cssSnippet = String(cssCode);
    //cssSnippet = encodeURIComponent(cssSnippet);
    var cssBlob = new Blob([cssSnippet], {type:"text/plain"});
    var cssData = new FormData();
    cssData.append("code", cssBlob);
    cssData.append("pid", un_pid);

    fetch("https://code.scribblex.net/saveCSS.php", {
        method: "POST",
        body: cssData
    }).then((res)=>{return res.text();})
    .then((txt)=>{console.log(txt);  saveJS();});
}