const logOutBtn = document.getElementById("logOutBtn")


logOutBtn.addEventListener('click', () => {
     if (confirm("Are you sure you want to log out?")) {
         axios.post('http://localhost:3000/logout', 
            {},
            { withCredentials: true}
         )
         .then(res => {
            console.log(res.data);
            location.href = '/login/login.html'
         })
     }

})