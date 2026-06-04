const logOutBtn = document.getElementById("logOutBtn")


logOutBtn.addEventListener('click', () => {
     if (confirm("Are you sure you want to log out?")) {
         location.href = "/login/login.html"
     }
   
})

