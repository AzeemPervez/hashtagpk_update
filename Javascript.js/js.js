const collapsibles = document.querySelectorAll("footer .collapsible");
 collapsibles.forEach((item) =>
   item.addEventListener("click", function () {
     this.classList.toggle("collapsible--expanded");
   })
 );

 const collapsible = document.querySelector(".collapsible svg");

collapsible.addEventListener("click",function(){
  document.querySelector(".collapsible").classList.toggle("collapsible--expanded");
})