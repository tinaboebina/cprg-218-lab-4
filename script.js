var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Function to update the footer date
function updateFooterDate() {
    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
  }

  // Call the function initially to set the initial footer date
  updateFooterDate();

  // Set an interval to update the footer date every year
  setInterval(updateFooterDate, 1000 * 60 * 60 * 24 * 365); // Update every year