//----- TOGGLE ACCORDIAN -----//
var acc = document.getElementsByClassName("accordion"); // SELECT ACCORDIAN
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//----- UPDATE FOOTER TO CURRENT YEAR -----//
function updateFooterDate() {
    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
  }

  updateFooterDate();

  setInterval(updateFooterDate, 1000 * 60 * 60 * 24 * 365);