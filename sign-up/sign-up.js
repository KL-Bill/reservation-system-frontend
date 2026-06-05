 const signupBtn = document.getElementById('signupBtn')

 signupBtn.addEventListener('click', () => {
     const clientId = document.getElementById('id')
     const clientName = document.getElementById('name')
     const clientUserName = document.getElementById('userName')
     const clientPassword = document.getElementById('password')

     saveClient(clientId.value, clientName.value, clientUserName.value, clientPassword.value)
})

function saveClient(id, name, username, password){
    axios.post('http://localhost:3000/signup', {
        id,
        name,
        username,
        password
    })
    .then(function (response) {
        alert(response.data.message)
        window.location.href = "/login/login.html"

    })
    .catch(function (error) {
        console.log(error)
    })
}
