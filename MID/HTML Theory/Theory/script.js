window.addEventListener("load", function () {


    let toggleButton = document.getElementById("toggleBtn");
    let phoneRow = document.getElementById("phoneRow");

   
    if (toggleButton && phoneRow) {
        toggleButton.addEventListener("click", function () {
           
            if (phoneRow.style.display === "none") {
                phoneRow.style.display = "table-row";
                toggleButton.innerText = "Hide Phone Number";
            } else {
                phoneRow.style.display = "none";
                toggleButton.innerText = "Show Phone Number";
            }
        });
    }
});