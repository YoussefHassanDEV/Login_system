let name = localStorage.getItem('nameUser');
console.log(name)
let inerh1 = document.querySelector("#inername");
let logout = document.querySelector("#logout")
inerh1.innerHTML = `<h1 class="text-4xl text-center text-white">Welcome ${name}</h1>`
logout.addEventListener("click",function(){
    window.location.href = "../pages/../login.html", "_self";
})