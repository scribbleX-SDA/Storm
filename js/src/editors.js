var htmlEditor = ace.edit("htmlEditor");
htmlEditor.setTheme("ace/theme/scribblex");
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.setFontSize(18);
htmlEditor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
});


var cssEditor = ace.edit("cssEditor");
cssEditor.setTheme("ace/theme/scribblex");
cssEditor.session.setMode("ace/mode/css");
cssEditor.setFontSize(18);
cssEditor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
});


var jsEditor = ace.edit("jsEditor");
jsEditor.setTheme("ace/theme/scribblex");
jsEditor.session.setMode("ace/mode/javascript");
jsEditor.setFontSize(18);
jsEditor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
});


var headEditor = ace.edit("headScriptEditor");
headEditor.setTheme("ace/theme/scribblex");
headEditor.session.setMode("ace/mode/html");
headEditor.setFontSize(18);
headEditor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
});
headEditor.setValue(`<!-- \n\tHere outside the <script> tags\nyou can paste the to CDNs, CSS Files,\nand define other JS Scripts.\n-->\n\n<script>\n\t//Enter the JS for <head> Tag\n</script>`);



/*
    Defining slx Snippets
*/



var snippetManager = require("ace/snippets").snippetManager
.register([
    {
        "tabTrigger": "getElementById",
        "name": "getElementById",
        "content": "getElementById('')"
    },
    {
        "tabTrigger": "getElementsByClassName",
        "name": "getElementsByClassName",
        "content": "getElementsByClassName('')"
    },
    {
        "tabTrigger": "addEventListener",
        "name": "addEventListener",
        "content": `addEventListener('', ()=>{
    // ...
});`
    },
    {
        "tabTrigger": "addEventListener:click",
        "name": "addEventListener:click",
        "content": `addEventListener('click', ()=>{
    // ...
});`
    },
    {
        "tabTrigger": "addEventListener:mousedown",
        "name": "addEventListener:mousedown",
        "content": `addEventListener('mousedown', ()=>{
    // ...
});`
    },
    {
        "tabTrigger": "addEventListener:mouseenter",
        "name": "addEventListener:mouseenter",
        "content": `addEventListener('mouseenter', ()=>{
    // ...
});`
    },
    {
        "tabTrigger": "addEventListener:mouseleave",
        "name": "addEventListener:mouseleave",
        "content": `addEventListener('mouseleave', ()=>{
    // ...
});`
    },
    {
        "tabTrigger": "addEventListener:mousemove",
        "name": "addEventListener:mousemove",
        "content": `addEventListener('mousemove', ()=>{
    // ...
});`
    },
    {
        "tabTrigger": "addEventListener:mouseover",
        "name": "addEventListener:mouseover",
        "content": `addEventListener('mouseover', ()=>{
    // ...
});`
    },
    {
        "tabTrigger": "addEventListener:mouseout",
        "name": "addEventListener:mouseout",
        "content": `addEventListener('mouseout', ()=>{
    // ...
});`
    },
    {
        "tabTrigger": "addEventListener:mouseup",
        "name": "addEventListener:mouseup",
        "content": `addEventListener('mouseup', ()=>{
    // ...
});`
    }
], "javascript");