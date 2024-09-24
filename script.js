var acc = document.getElementsByClassName("accordiongr");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("inactive");
    var panelgr = this.nextElementSibling;
    if (panelgr.style.display === "block") {
      panelgr.style.display = "none";
    } else {
      panelgr.style.display = "block";
    }
  });
}