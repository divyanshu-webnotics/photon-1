const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const icon = document.querySelector(".icon");

hamburger.addEventListener("click", ()=>{
    navigation.classList.toggle("open");
    if(icon.className == "fa-solid fa-bars icon"){
        icon.className = "fa-solid fa-x icon";
    }

    else{
        icon.className = "fa-solid fa-bars icon"
    }
})