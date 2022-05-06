
    var form = document.querySelector("form").addEventListener("submit", signupFun);

    function signupFun(){
        event.preventDefault();

        var userObj = {
            num : document.querySelector("#num").value,
            pass : document.querySelector("#pass").value,
            name : document.querySelector("#name").value,
            email : document.querySelector("#email").value,
            altnum : document.querySelector("#num2").value,
        };

        var arr = [];
        arr.push(userObj)
        localStorage.setItem("userCred", JSON.stringify(arr));
        alert("Sign Up Successfull!")
        window.location.href = "../html/login.html";

        document.querySelector("#num").value = "";
        document.querySelector("#pass").value = "";
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#num2").value = "";

    }


