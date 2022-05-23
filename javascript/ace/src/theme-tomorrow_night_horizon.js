define("ace/theme/tomorrow_night_horizon",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

    exports.isDark = true;
    exports.cssClass = "ace-tomorrow-night-horizon";
    exports.cssText = ".ace-tomorrow-night-horizon .ace_gutter {\
    background: #0F111A;\
    color: #F111A\
    }\
    .ace-tomorrow-night-horizon .ace_print-margin {\
    width: 1px;\
    background: #0F111A\
    }\
    .ace-tomorrow-night-horizon {\
    background-color: #0F111A;\
    color: #FFFFFF\
    }\
    .ace-tomorrow-night-horizon .ace_constant.ace_other,\
    .ace-tomorrow-night-horizon .ace_cursor {\
    color: yellow\
    }\
    .ace-tomorrow-night-horizon .ace_marker-layer .ace_selection {\
    background: #262B40\
    }\
    .ace-tomorrow-night-horizon.ace_multiselect .ace_selection.ace_start {\
    box-shadow: 0 0 3px 0px #002451;\
    }\
    .ace-tomorrow-night-horizon .ace_marker-layer .ace_step {\
    background: rgb(127, 111, 19)\
    }\
    .ace-tomorrow-night-horizon .ace_marker-layer .ace_bracket {\
    margin: -1px 0 0 -1px;\
    border: 1px solid #404F7D\
    }\
    .ace-tomorrow-night-horizon .ace_marker-layer .ace_active-line {\
    background: #0A0C12\
    }\
    .ace-tomorrow-night-horizon .ace_gutter-active-line {\
    background-color: #0A0C12\
    }\
    .ace-tomorrow-night-horizon .ace_marker-layer .ace_selected-word {\
    border: 1px solid #262B40\
    }\
    .ace-tomorrow-night-horizon .ace_invisible {\
    color: #404F7D\
    }\
    .ace-tomorrow-night-horizon .ace_keyword,\
    .ace-tomorrow-night-horizon .ace_meta,\
    .ace-tomorrow-night-horizon .ace_storage,\
    .ace-tomorrow-night-horizon .ace_storage.ace_type,\
    .ace-tomorrow-night-horizon .ace_support.ace_type {\
    color: #EBBBFF\
    }\
    .ace-tomorrow-night-horizon .ace_keyword.ace_operator {\
    color: #99FFFF\
    }\
    .ace-tomorrow-night-horizon .ace_constant.ace_character,\
    .ace-tomorrow-night-horizon .ace_constant.ace_language,\
    .ace-tomorrow-night-horizon .ace_constant.ace_numeric,\
    .ace-tomorrow-night-horizon .ace_keyword.ace_other.ace_unit,\
    .ace-tomorrow-night-horizon .ace_support.ace_constant,\
    .ace-tomorrow-night-horizon .ace_variable.ace_parameter {\
    color: #FFC58F\
    }\
    .ace-tomorrow-night-horizon .ace_invalid {\
    color: #FFFFFF;\
    background-color: #F99DA5\
    }\
    .ace-tomorrow-night-horizon .ace_invalid.ace_deprecated {\
    color: #FFFFFF;\
    background-color: #EBBBFF\
    }\
    .ace-tomorrow-night-horizon .ace_fold {\
    background-color: transparent;\
    border-color: transparent;\
    }\
    .ace-tomorrow-night-horizon .ace_entity.ace_name.ace_function,\
    .ace-tomorrow-night-horizon .ace_support.ace_function,\
    .ace-tomorrow-night-horizon .ace_variable {\
    color: #BBDAFF\
    }\
    .ace-tomorrow-night-horizon .ace_support.ace_class,\
    .ace-tomorrow-night-horizon .ace_support.ace_type {\
    color: #FFEEAD\
    }\
    .ace-tomorrow-night-horizon .ace_heading,\
    .ace-tomorrow-night-horizon .ace_markup.ace_heading,\
    .ace-tomorrow-night-horizon .ace_string {\
    color: #D1F1A9\
    }\
    .ace-tomorrow-night-horizon .ace_entity.ace_name.ace_tag,\
    .ace-tomorrow-night-horizon .ace_entity.ace_other.ace_attribute-name,\
    .ace-tomorrow-night-horizon .ace_meta.ace_tag,\
    .ace-tomorrow-night-horizon .ace_string.ace_regexp,\
    .ace-tomorrow-night-horizon .ace_variable {\
    color: #FF9DA4\
    }\
    .ace-tomorrow-night-horizon .ace_comment {\
    color: #7285B7\
    }\
    .ace-tomorrow-night-horizon .ace_indent-guide {\
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYJDzqfwPAANXAeNsiA+ZAAAAAElFTkSuQmCC) right repeat-y\
    }";
    
    var dom = require("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass, false);
    });                (function() {
                        window.require(["ace/theme/tomorrow_night_horizon"], function(m) {
                            if (typeof module == "object" && typeof exports == "object" && module) {
                                module.exports = m;
                            }
                        });
                    })();
                