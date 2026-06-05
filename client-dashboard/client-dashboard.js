const logOutBtn = document.getElementById("logOutBtn")


logOutBtn.addEventListener('click', () => {
     if (confirm("Are you sure you want to log out?")) {
         location.href = "/login/login.html"
     }
   
})
axios.get(`http://localhost:3000/user/get-all-users`)
.then((response) => {
    console.log(response.data)})
.catch((error) => {
    console.log(error)
})