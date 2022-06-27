let picker;
var qwe = 0;
let color = '#FFFFFF';
const defaults = {
  color: color,
  container: document.getElementById('color_picker'),
  onChange: function(color) {
    updateColor(color);
    document.getElementById("x").style.outlineColor = String(invertColor(color, true));
  },
};

function initPicker(options) {
  options = Object.assign(defaults, options);
  picker = new EasyLogicColorPicker(options);
}

function updateColor(value) {
  color = value;
  const $color = document.querySelector('.sample__color');
  const $code = document.querySelector('.sample__code');
  $code.innerText = color;
  document.getElementsByClassName("colorCodeValue")[0].innerText = String(color);
  document.getElementsByClassName("colorCodeValue")[0].style.color = invertColor(color, true);
  //document.getElementById("copycode").innerText = String(color);
  //document.getElementById("copycode").style.color = invertColor(color, true);
  $color.style.setProperty('--color', color);
  document.getElementById("x").style.backgroundColor = color;
}

function onChangeType(e) {
  picker.setType(e.value);
}

document.getElementById("colorPickerText").addEventListener("click", ()=>{
    if(qwe==0){
        initPicker();
        qwe++;
    }
    updateColor(color);
    document.getElementById("x").style.outlineColor = String(invertColor(color, true));
    //alert(color);
});


function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}

function invertColor(hex, bw) {
  // hex = String(hex);
  var hexNew = '';
  if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
      //throw new Error('Invalid HEX color.');
      for(var iq = 0;iq<6; iq++){
        hexNew[iq] = hex[iq];
      }
      hex = hexNew;
  }
  var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
  if (bw) {
      // https://stackoverflow.com/a/3943023/112731
      return (r * 0.299 + g * 0.587 + b * 0.114) > 186
          ? '#000000'
          : '#FFFFFF';
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
}