var privacyStat_count = 1;
function privacyStat(){
    privacyStat_count += 1;
    if(privacyStat_count%2 == 0){
        document.getElementById("togglePrivateBtn").value = "PRIVATE";
    }else{
        document.getElementById("togglePrivateBtn").value = "PUBLIC";
    }
}