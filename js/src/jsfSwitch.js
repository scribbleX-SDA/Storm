var jsfButtons = document.querySelectorAll(".jsFrameWork");
jsfButtons.forEach((jsfButton)=>{
    jsfButton.addEventListener("click", ()=>{
        jsfButtons.forEach((e)=>{
            e.classList.remove("activeJSF");
        });
        jsfButton.classList.add("activeJSF");
        jsf = jsfButton.getAttribute("jsf");
        if(jsf == "PureJS"){jsEditor.session.setMode("ace/mode/javascript");}
        else if(jsf == "jQuery"){jsEditor.session.setMode("ace/mode/javascript");}
        else{jsEditor.session.setMode("ace/mode/tsx");}
    });
});