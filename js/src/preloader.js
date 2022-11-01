function preloader(){
    setTimeout(()=>{
        $("#preloader").fadeOut(1000);
        setTimeout(()=>{
            $("#container").fadeIn(1000);
            sandboxGeneration();
        }, 1000);
    }, 4000);
}


function sandboxGeneration(){
    // document.getElementById("frameCover").style.display = "block";
    // document.getElementById("frameContainer").style.display = "none";
    var window_href = window.location.href;
    if(window_href.includes("?id=")){
        var originalID = window_href.split('?id=')[1];
    }
}