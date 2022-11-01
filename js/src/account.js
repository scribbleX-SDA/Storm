document.getElementById("submitCredSignIn").addEventListener("click", ()=>{
    var user = document.getElementById("usernameSignIn").value;
    var auth = document.getElementById("authkeySignIn").value;
    
    var resp = '';

    var ajxCall = new XMLHttpRequest();
    ajxCall.onreadystatechange = function (){
        if(this.status == 200 && this.readyState == 4){
            resp = this.responseText;
            if(resp.includes("true")){
                createCookie("userid", resp.split("_")[1], 10);
                Swal.fire({
                    title: 'Login Successful',
                    icon: 'success'
                });
                document.getElementById("accUnlink").style.display = "block";
                document.getElementById("accLink").style.display = "none";
                pre_genID_analysis();
            }else{
                if(resp.includes("inc")){
                    Swal.fire({
                        title: 'Incorrect Credentials',
                        icon: 'error'
                    });
                }else{
                    Swal.fire({
                        title: "User Doesn't Exist",
                        icon: 'error'
                    });
                }
            }
        }
        document.getElementById("usernameSignIn").value = '';
        document.getElementById("authkeySignIn").value = '';
    };
    ajxCall.open("POST", "https://storm.scribblex.net/backend/login.php?user="+user+"&auth="+sha256(auth), true);
    ajxCall.send();
    console.log("https://storm.scribblex.net/backend/login.php?user="+user+"&auth="+sha256(auth));
});


document.getElementById("logout").addEventListener("click", ()=>{
    document.cookie = 'userid' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    Swal.fire({
        title: 'Logout Successful',
        icon: 'success'
    });
    document.getElementById("accUnlink").style.display = "none";
    document.getElementById("accLink").style.display = "block";

    generateID();
});


document.getElementById("emailSignUp").addEventListener("keyup", ()=>{
    var ajxCall = new XMLHttpRequest();
    var resp = "";
    ajxCall.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            resp = String(this.responseText);
            if(resp == "1"){
                Swal.fire({
                    title: "Email Already Registered",
                    icon: 'error'
                })
            }else{
                // Nothing...
            }
        }
    };
    ajxCall.open("GET", "https://backend.scribblex.net/emailCheck.php?email="+document.getElementById("email").value, true);
    ajxCall.send();
});


document.getElementById("submitCredSignUp").addEventListener("click", ()=>{
    var user = document.getElementById("usernameSignUp").value;
    var auth = document.getElementById("authkeySignUp").value;
    var email = document.getElementById("emailSignUp").value;

    var resp = '';

    var ajxCall = new XMLHttpRequest();
    ajxCall.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            resp = this.responseText;
            createCookie("userid", resp, 10);
            Swal.fire({
                title: 'Account Creation Successful',
                icon: 'success'
            });
            document.getElementById("accUnlink").style.display = "block";
            document.getElementById("accLink").style.display = "none";
            generateID();
        }
    };
    ajxCall.open("GET", "https://storm.scribblex.net/backend/signup.php?user="+user+"&auth="+sha256(auth)+"&email="+email, true);
    ajxCall.send();
});