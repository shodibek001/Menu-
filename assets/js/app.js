const btnActive = document.querySelector(".active");
const btnClose = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

var name1 = "shodibek07"
console.log(name1);
var name2 = "shodibek007"
console.log(name2);


btnActive.addEventListener("click", () => {
    btnClose.style.display = "block";
    btnActive.style.display = "none";
    sidebar.style.marginLeft = "0"
})


btnClose.addEventListener("click", () => {
    btnClose.style.display = "none  ";
    btnActive.style.display = "block";
    sidebar.style.marginLeft = "-120px";
})


