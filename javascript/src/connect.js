var user_membStat = null;

function splitLoginData(val){
    if(val == "INCPASS"){
        alert("Either UserName/Email or Password is Incorrect");
    }else if(val == "NOUSERFOUND"){
        alert("No User Registered");
    }else if(val == "ERROR"){
        alert("Unknown Error Found. Contact ScribbleX");
    }else{
        var inputVal = val.split(":://scribblex//::");
        var userid = inputVal[0];
        var membStat = inputVal[1];
        var regDate = inputVal[2];

        setCookie("userid", userid, 5);
        user_membStat = membStat;

        idURL();
    }
}

function checkLogin(){
    var ajxCall = new XMLHttpRequest();
    var resp = "";
    ajxCall.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            resp = String(this.responseText);
            // alert(resp);
            setTimeout(splitLoginData(resp), 2000);
            alert("Logged-in Successfully!");
            document.getElementById("connect_container").style.display = "none";
            document.getElementById("container").style.display = "block";
        }
    };
    ajxCall.open("GET", "https://scribblex.net/login.php?user="+document.getElementById("userLog").value+"&auth="+document.getElementById("password_login").value, true);
    ajxCall.send();
}


document.getElementById("username").addEventListener("keyup", ()=>{
    var ajxCall = new XMLHttpRequest();
    var resp = "";
    ajxCall.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            resp = String(this.responseText);
            if(resp == "1"){
                document.getElementById("username_notAllowed").style.display = "block";
            }else{
                document.getElementById("username_notAllowed").style.display = "none";
            }
        }
    };
    ajxCall.open("GET", "https://scribblex.net/usernameCheck.php?username="+document.getElementById("username").value, true);
    ajxCall.send();
});

document.getElementById("email").addEventListener("keyup", ()=>{
    var ajxCall = new XMLHttpRequest();
    var resp = "";
    ajxCall.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            resp = String(this.responseText);
            if(resp == "1"){
                document.getElementById("email_notAllowed").style.display = "block";
            }else{
                document.getElementById("email_notAllowed").style.display = "none";
            }
        }
    };
    ajxCall.open("GET", "https://scribblex.net/emailCheck.php?email="+document.getElementById("email").value, true);
    ajxCall.send();
});

function signup(){
    if(document.getElementById("username_notAllowed").style.display == "none" && document.getElementById("email_notAllowed").style.display == "none"){
        var response = "";
        var ajxCall = new XMLHttpRequest();
        ajxCall.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                response = String(this.responseText);
                if(response != "Error" && response !="ERROR" && response != "ERROR While Creating Account!"){
                    setTimeout(splitLoginData(response), 2000);
                    alert("Account Created Successfully!");
                    document.getElementById("connect_container").style.display = "none";
                    document.getElementById("container").style.display = "block";
                }else{
                    alert("Error Creating Account. Try again Later!  " + response);
                }
            }
        };
        ajxCall.open("GET", "https://scribblex.net/signup.php?username="+document.getElementById("username").value+"&email="+document.getElementById("email").value+"&auth="+document.getElementById("password_signup").value, true);
        ajxCall.send();
    }else{
        if(document.getElementById("username_notAllowed").style.display == "none" && document.getElementById("email_notAllowed").style.display == "block"){
            alert("Email is Already Registered with a different account!");
        }else if(document.getElementById("username_notAllowed").style.display == "block" && document.getElementById("email_notAllowed").style.display == "block"){
            alert("Username and Email are already Registered!");
        }else if(document.getElementById("username_notAllowed").style.display == "block" && document.getElementById("email_notAllowed").style.display == "none"){
            alert("Username is already taken. Try again!");
        }else{
            alert("Unknown Error. Contact ScribbleX: error@scribblex.net");
        }
    }
}


function show_signupForm(){
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

function show_loginForm(){
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
}