const logOutBtn = document.getElementById("logOutBtn")
const h2 = document.getElementById('h2')


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

axios.get(`http://localhost:3000/client/get-client`)
.then ((response) => {
    h2.innerHTML = response.data.name
})
.catch ((error) => {
    console.log(error)
})