var menuButton = document.getElementById("menu");
var sidemenu = document.getElementById("side");
var isOpened = true;
var section = document.getElementById("sect")

console.log(menuButton.style.left);
console.log("st from nothing");

menuButton.addEventListener("click", () => {
    showMenu();
})

function showMenu()
{
    if(isOpened){
        sidemenu.style.left = "-250px";
        section.style.marginLeft = "0px";
        isOpened = false;
    }else
    {
        sidemenu.style.left = "0px";
        section.style.marginLeft = "250px";
        isOpened = true;
    }
}