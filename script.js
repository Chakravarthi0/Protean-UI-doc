// navbar
const hamBurgerIcons = document.getElementsByClassName("hamburger-icon");
for(let i= 0; i < hamburgerIcons.length; i++){
    hamBurgerIcons[i].addEventListener("click", function(){
        navLinksContainer.classList.toggle("open");
        if(navLinksContainer.classList.contains("open")){
            hamBurgerIcons[i].innerText = "close"
        }else{
            hamBurgerIcons[i].innerText = "menu"
        }
    })
}