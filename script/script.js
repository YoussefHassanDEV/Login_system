let name = document.querySelector("#signupName");
let username = document.querySelector("#signupEmail");
let password = document.querySelector("#signupPassword");
let signup = document.querySelector("#SignUp");
let loginemail = document.querySelector("#loginEmail");
let loginpassword = document.querySelector("#loginPassword");
let login = document.querySelector("#Login");
let userlist = [];
let usernameIndex = -1; // Declare usernameIndex with an initial value
if (localStorage.getItem("userlist") === null) {
    // if no data found in localstorage
    userlist = [];
} else {
    // found data ,display data
    userlist = JSON.parse(localStorage.getItem("userlist"));
    //   console.log(userlist);
    console.log(userlist);
}
signup?.addEventListener("click", createUser);
login?.addEventListener("click", LOGIN);
username?.addEventListener("keydown", function () {
    let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (emailRegex.test(username.value)) {
        username.classList.remove("is-invalid");
        username.classList.add("is-valid");
    } else {
        username.classList.remove("is-valid");
        username.classList.add("is-invalid");
    }

})
password?.addEventListener("keydown", function () {
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordRegex.test(password.value)) {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
    } else {
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
    }
})
function createUser() {
    if (!checkUsername()) {
        alert("Wrong email");
        return;
    }
    if (!checkPassword()) {
        alert("Password must be at least 8 characters and contain lowercase, uppercase letters, a number, and a special character");
        return;
    }
    let user = {
        Name: name.value,
        Username: username.value,
        Password: password.value
    };
    userlist.push(user);
    console.log("User created:", user);
    localStorage.setItem("userlist", JSON.stringify(userlist));
}

function checkUsername() {
    let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (emailRegex.test(username.value)) {
        username.classList.remove("is-invalid");
        username.classList.add("is-valid");
        return true;
    } else {
        username.classList.remove("is-valid");
        username.classList.add("is-invalid");
        return false;
    }
}

function checkPassword() {
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordRegex.test(password.value)) {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
        return true;
    } else {
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
        return false;
    }
}
function LOGIN() {

    console.log(userlist)
    usernameIndex = searchUsername();
    if (usernameIndex !== -1) {
        if (searchpassword(usernameIndex)) {
            localStorage.setItem('nameUser',userlist[usernameIndex].Name);
            window.location.href = "../pages/home.html", "_self";


        } else {
            alert("Wrong email or password");
        }
    } else {
        alert("Wrong email or password");
    }

}

function searchUsername() {
    for (let i = 0; i < userlist.length; i++) {
        if (userlist[i].Username === loginemail.value) {
            return i;
        }
    }
    return -1;
}

function searchpassword(usernameIndex) {
    if (userlist[usernameIndex].Password === loginpassword.value) {
        return true;
    }
    return false;
}
