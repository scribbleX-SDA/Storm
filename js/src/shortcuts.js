slxKey.bind('ctrl + r', (e)=>{
    e.preventDefault();
    e.preventDefault();
    e.preventDefault();
    render();
});


slxKey.bind("ctrl + shift + r", (e)=>{
    e.preventDefault();
    e.preventDefault();
    e.preventDefault();
    Swal.fire({
        title: "Are you sure you want to reload?",
        text: "You will lose all your progress.",
        icon: "question",
        showDenyButton: true,
        showConfirmButton: true,
        confirmButtonText: "Reload Window",
        denyButtonText: "Don't Reload"
    }).then((result)=>{
        if(result.isConfirmed){
            window.location.reload(true);
        }else{
            e.preventDefault();
        }
    });
});


slxKey.bind("ctrl + s", (e)=>{
    e.preventDefault();
    e.preventDefault();
    e.preventDefault();
    saveCode();
});