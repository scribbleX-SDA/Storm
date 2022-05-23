var htmlEditor = ace.edit("htmlEditor");
htmlEditor.setTheme("ace/theme/scribblex");
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.setFontSize(15);
htmlEditor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
});

var cssEditor = ace.edit("cssEditor");
cssEditor.setTheme("ace/theme/scribblex");
cssEditor.session.setMode("ace/mode/css");
cssEditor.setFontSize(15);
cssEditor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
});

var jsEditor = ace.edit("jsEditor");
jsEditor.setTheme("ace/theme/scribblex");
jsEditor.session.setMode("ace/mode/javascript");
jsEditor.setFontSize(15);
jsEditor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
});