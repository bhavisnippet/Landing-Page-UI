// for selecting all button with the class 'getApp' 
const getAppBtn = document.querySelectorAll(".getApp")

// adding click event on all btn
getAppBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
        alert("App Downloading...")
    })
});