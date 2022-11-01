document.getElementById("copyBtn").addEventListener("click", copylink);

function copylink(){
    var copyText = document.getElementById("projectID");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();

    Swal.fire({
        title: 'Link Copied!',
        text: document.getElementById("projectID").value,
        icon: 'success',
    });
}

var user_svgs = document.querySelectorAll(".user-svg");
user_svgs.forEach((user_svg)=>{
    user_svg.addEventListener("mouseover", ()=>{
        user_svg.style.fill = "#fff";
    });
    user_svg.addEventListener("mouseout", ()=>{
        user_svg.style.fill = "#8d8d8d";
    });
});