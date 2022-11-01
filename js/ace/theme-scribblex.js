ace.define("ace/theme/scribblex",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

    exports.isDark = true;
    exports.cssClass = "ace-scribblex";
    exports.cssText = ".ace-scribblex .ace_gutter {\
    background: #0c0f16;\
    color: #595959;\
    }\
    .ace-scribblex .ace_gutter-cell.ace_warning {\
    background-image: none;\
    background: #FC0;\
    border-left: none;\
    padding-left: 0;\
    color: #000;\
    }\
    .ace-scribblex .ace_gutter-cell.ace_error {\
    background-position: -6px center;\
    background-image: none;\
    background: #F10;\
    border-left: none;\
    padding-left: 0;\
    color: #000;\
    }\
    .ace-scribblex .ace_print-margin {\
    border-left: 1px solid #555;\
    right: 0;\
    background: #151418;\
    }\
    .ace-scribblex {\
    background-color: #0F111A;\
    color: #E6E1DC;\
    }\
    .ace-scribblex .ace_cursor {\
    border-left: 2px solid #FFFFFF;\
    }\
    .ace-scribblex .ace_cursor.ace_overwrite {\
    border-left: 0px;\
    border-bottom: 1px solid #FFFFFF;\
    }\
    .ace-scribblex .ace_marker-layer .ace_selection {\
    background: #3b3649;\
    }\
    .ace-scribblex .ace_marker-layer .ace_step {\
    background: rgb(198, 219, 174);\
    }\
    .ace-scribblex .ace_marker-layer .ace_bracket {\
    margin: -1px 0 0 -1px;\
    border: 1px solid #FCE94F;\
    }\
    .ace-scribblex .ace_marker-layer .ace_active-line {\
    background: #0c0f16;\
    }\
    .ace-scribblex .ace_gutter-active-line {\
    background-color: #0c0f16;\
    }\
    .ace-scribblex .ace_invisible {\
    color: #404040;\
    }\
    .ace-scribblex .ace_keyword {\
    color:#00698F;\
    }\
    .ace-scribblex .ace_keyword.ace_operator {\
    color:#FF308F;\
    }\
    .ace-scribblex .ace_constant {\
    color:#1EDAFB;\
    }\
    .ace-scribblex .ace_constant.ace_language {\
    color:#FDC251;\
    }\
    .ace-scribblex .ace_constant.ace_library {\
    color:#8DFF0A;\
    }\
    .ace-scribblex .ace_constant.ace_numeric {\
    color:#58C554;\
    }\
    .ace-scribblex .ace_invalid {\
    color:#FFFFFF;\
    background-color:#990000;\
    }\
    .ace-scribblex .ace_invalid.ace_deprecated {\
    color:#FFFFFF;\
    background-color:#990000;\
    }\
    .ace-scribblex .ace_support {\
    color: #999;\
    }\
    .ace-scribblex .ace_support.ace_function {\
    color:#00AEEF;\
    }\
    .ace-scribblex .ace_function {\
    color:#00AEEF;\
    }\
    .ace-scribblex .ace_string {\
    color:#58C554;\
    }\
    .ace-scribblex .ace_comment {\
    color:#555;\
    font-style:italic;\
    padding-bottom: 0px;\
    }\
    .ace-scribblex .ace_variable {\
    color:#997744;\
    }\
    .ace-scribblex .ace_meta.ace_tag {\
    color:#BE53E6;\
    }\
    .ace-scribblex .ace_entity.ace_other.ace_attribute-name {\
    color:#FFFF89;\
    }\
    .ace-scribblex .ace_markup.ace_underline {\
    text-decoration: underline;\
    }\
    .ace-scribblex .ace_fold-widget {\
    text-align: center;\
    }\
    .ace-scribblex .ace_fold-widget:hover {\
    color: #777;\
    }\
    .ace-scribblex .ace_fold-widget.ace_start,\
    .ace-scribblex .ace_fold-widget.ace_end,\
    .ace-scribblex .ace_fold-widget.ace_closed{\
    background: none !important;\
    border: none;\
    box-shadow: none;\
    }\
    .ace-scribblex .ace_fold-widget.ace_start:after {\
    content: '▾'\
    }\
    .ace-scribblex .ace_fold-widget.ace_end:after {\
    content: '▴'\
    }\
    .ace-scribblex .ace_fold-widget.ace_closed:after {\
    content: '‣'\
    }\
    .ace-scribblex .ace_indent-guide {\
    border-right:1px dotted #1a181d;\
    margin-right:-1px;\
    }\
    .ace-scribblex .ace_fold { \
    background: #1a181d; \
    border-radius: 3px; \
    color: #7AF; \
    border: none; \
    }\
    .ace-scribblex .ace_fold:hover {\
    background: #CCC; \
    color: #000;\
    }\
    ";
    
    var dom = require("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass, false);
    
    });                (function() {
                        window.require(["ace/theme/scribblex"], function(m) {
                            if (typeof module == "object" && typeof exports == "object" && module) {
                                module.exports = m;
                            }
                        });
                    })();
                
