function render(){
    const frame = document.getElementById("frame");

    const jsfStart = "<"+'script src="';
    const jsfEnd = '">'+"<"+'/scrip'+'t>';

    let htmlCode = htmlEditor.getValue();
    let cssCode = cssEditor.getValue();
    let jsCode = jsEditor.getValue();
    let projectTitle = document.getElementById("p-title").value;
    let metaData = `<meta charset="UTF-8"></script>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta name="description" content="${document.getElementById("p-desc").value}">`;
    let jsFramework = '';
    let babel = '';
    let jsMode = "text/javascript";
    if(jsf === 'PureJS'){
        jsFramework = '';
    }else if(jsf === 'jQuery'){
        jsEditor.session.setMode("ace/mode/javascript");
        jsFramework = jsfStart+`https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js`+jsfEnd;
    }else{
        jsFramework = jsfStart+`https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js`+jsfEnd+"\n"+jsfStart+`https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js`+jsfEnd;
        babel = `https://unpkg.com/@babel/standalone/babel.min.js`;
        jsMode = `text/babel`;
        jsEditor.session.setMode("ace/mode/tsx");
    }
    let headScript = headEditor.getValue();

    let snip = `<!DOCTYPE html>
                <html>
                    <head>
                        <title>${projectTitle}</title>
                        ${metaData}
                        
                        <style>${cssCode}</style>

                        ${jsFramework}

                        ${headScript}
                    </head>
                    <body>
                        <script src="js/lib/console.min.js"></script>
                        <script>
                            const el = document.createElement('div');
                            el.classList.add("slx-eruda");
                            document.body.appendChild(el);
                            eruda.init({
                                container: el,
                                tool: ['console', 'elements', 'memory', 'network'],
                                useShadowDom: true,
                                autoScale: true,
                                defaults: {
                                    displaySize: 50,
                                    transparency: 1,
                                    theme: 'Night Owl'
                                }
                            });

                            setTimeout(()=>{
                                document.querySelector(".luna-dom-highlighter").remove();
                                var slx_eruda = document.querySelector("slx-eruda");
                                // slxEruda = slxEruda.shadowRoot;
                                // slxEruda.querySelector(".eruda-entry-btn").remove();
                                // slx_eruda = slx_eruda.shadowRoot;
                                //slx_eruda.querySelector(".eruda-entry-btn").remove();
                                // var styleSys = frame.createElement("style");
                                // styleSys.innerHTML = ".eruda-entry-btn{display: none !important;}";
                                // slx_eruda.appendChild(styleSys);
                            }, 1000);
                        </script>
                        <script src="${babel}"></script>

                        ${htmlCode}

                        <script type="${jsMode}">
                            ${jsCode}
                        </script>
                    </body>
                </html>`;

    setTimeout(()=>{frame.srcdoc = snip;}, 100);
    setTimeout(()=>{devTools();}, 250);
}

if(renderMode == true){

    var typingTimer;                //timer identifier
    var doneTypingInterval = 1000;  //time in ms, 2 seconds for example
    var inputs = document.querySelectorAll(".code");
    inputs.forEach((input)=>{
        input.onkeyup = function () {
            clearTimeout(typingTimer);
            document.getElementById("renderWait").style.display = "block";
            typingTimer = setTimeout(doneTyping, doneTypingInterval);
        };

        input.onkeydown = function () {
            clearTimeout(typingTimer);
        };
    });

    function doneTyping () {
        document.getElementById("renderWait").style.display = "none";
        render();
    }
}

function devTools(){
    var frame = document.getElementById("frame").contentWindow.document;
    var slx_eruda = frame.getElementsByClassName("slx-eruda")[0];
    slx_eruda = slx_eruda.shadowRoot;
    slx_eruda.querySelector(".eruda-entry-btn").remove();
    var styleSys = frame.createElement("style");
    styleSys.innerHTML = ".eruda-entry-btn{display: none !important;}";
    slx_eruda.appendChild(styleSys);
}

setTimeout(render, 8000);


function saveCode(){
    const jsfStart = "<"+'script src="';
    const jsfEnd = '">'+"<"+'/scrip'+'t>';
    var jsFramework = '';
    var babel = '';
    var jsm = "text/javascript";
    if(getCookie("userid") != ''){
        if(jsf === 'PureJS'){
            jsFramework = '';
        }else if(jsf === 'jQuery'){
            jsFramework = `<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>`;
        }else{
            jsFramework = `<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>`;
            babel = `https://unpkg.com/@babel/standalone/babel.min.js`;
            jsm = `text/babel`;
        }
        var htmlCode = htmlEditor.getValue();
        var cssCode = cssEditor.getValue();
        var jsCode = jsEditor.getValue();
        var headScript = headEditor.getValue();
        var projectTitle = document.getElementById("p-title").value;
        var projectDescription = document.getElementById("p-desc").value;
        var userid = getCookie("userid");
        var projectID = document.getElementById("projectID").value;
        projectID = projectID.split("?id=");
        projectID = projectID[1];

        if(projectTitle == '' || projectTitle == null){
            Swal.fire({
                title: 'Invalid Title',
                icon: 'error',
                text: 'Please provide title to your scribble.'
            });
        }else{
            saveHTML();
            // createPage();
        }
    }else{
        Swal.fire({
            title: "Error!",
            text: 'You need to Login/Sign-up to save your scribble.',
            icon: 'error'
        });
    }


    function saveHTML(){
        ////alert("saveHTML() Called");
        htmlSnippet = String(htmlCode);
        //htmlSnippet = encodeURIComponent(htmlSnippet);
        var htmlBlob = new Blob([htmlCode], {type:"text/plain"});
        var htmlData = new FormData();
        htmlData.append("code", htmlBlob);
        htmlData.append("author", userid);
        htmlData.append("pid", projectID);
        //htmlData.append("vis", vis);
        htmlData.append("title", projectTitle);
        htmlData.append("desc", projectDescription);
        htmlData.append("head", headScript);
        htmlData.append("jsf", encodeURIComponent(jsFramework));
        htmlData.append("jsm", jsm);
        htmlData.append("babel", babel);
    
        fetch("https://code.scribblex.net/saveHTML.php", {
            method: "POST",
            body: htmlData
        }).then((res)=>{return res.text();})
        .then((txt)=>{console.log(txt); saveCSS(cssCode);});
        
        console.log(htmlData);
    }


    function saveJS(){
        ////alert("saveJS() Called");
        jsSnippet = String(jsCode);
        //jsSnippet = encodeURIComponent(jsSnippet);
        var jsBlob = new Blob([jsCode], {type:"text/plain"});
        var jsData = new FormData();
        jsData.append("code", jsBlob);
        jsData.append("pid", projectID);
    
        fetch("https://code.scribblex.net/saveJS.php", {
            method: "POST",
            body: jsData
        }).then((res)=>{return res.text();})
        .then((txt)=>{
            Swal.fire({
                title: 'Saved Successfully!',
                icon: 'success'
            });
            
            createPage();
        });
    }
    
    
    function saveCSS(){
        ////alert("saveCSS() Called");
        cssSnippet = String(cssCode);
        //cssSnippet = encodeURIComponent(cssSnippet);
        var cssBlob = new Blob([cssCode], {type:"text/plain"});
        var cssData = new FormData();
        cssData.append("code", cssBlob);
        cssData.append("pid", projectID);
    
        fetch("https://code.scribblex.net/saveCSS.php", {
            method: "POST",
            body: cssData
        }).then((res)=>{return res.text();})
        .then((txt)=>{console.log(txt);  saveJS();});
    }
}

function createPage(){
    var htmlCode = htmlEditor.getValue();
    var cssCode = cssEditor.getValue();
    var jsCode = jsEditor.getValue();
    var headCode = headEditor.getValue();
    var title = document.getElementById("p-title").value;
    var desc = document.getElementById("p-desc").value;
    var projectID = document.getElementById("projectID").value;
    projectID = projectID.split("?id=");
    projectID = projectID[1];

    var htmlBlob = new Blob([htmlCode], {type: "text/plain"});
    var cssBlob = new Blob([cssCode], {type: "text/plain"});
    var jsBlob = new Blob([jsCode], {type: "text/plain"});
    var headBlob = new Blob([headCode], {type: "text/plain"});

    var dataStruct = new FormData();
    dataStruct.append("html", htmlBlob);
    dataStruct.append("css", cssBlob);
    dataStruct.append("js", jsBlob);
    dataStruct.append("head", headBlob);
    dataStruct.append("title", title);
    dataStruct.append("desc", desc);
    dataStruct.append("pid", projectID);
    dataStruct.append("jsf", jsf);

    fetch("https://scribblex.net/gen.php", {
        method: "POST",
        body: dataStruct
    }).then((res)=>{return res.text();});
}