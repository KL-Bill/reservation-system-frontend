const clientSignupBtn = document.getElementById('clientSignupBtn')
const adminSignupBtn = document.getElementById('adminSignupBtn')


clientSignupBtn.addEventListener('click', () => {
    const clientUserName = document.getElementById('clientUserName')
    const clientPassword = document.getElementById('clientPassword')
    clientLogin(clientUserName.value, clientPassword.value)
})

adminSignupBtn.addEventListener('click', () => {
    const adminUserName = document.getElementById('adminUserName')
    const adminPassword = document.getElementById('adminPassword')
    adminLogin(adminUserName.value, adminPassword.value)
})



function clientLogin(clientUserName, clientPassword){
    if(clientUserName == "" || clientPassword == ""){
        alert("Input UserName or Password")

        return
    }

    axios.post(`http://localhost:3000/client-login`, {
        username: clientUserName,
        password: clientPassword
    })
    .then((response) => {
        console.log(response.data)

        if(Boolean(response.data.success)){
            location.href = "/client-dashboard/client-dashboard.html"
        } else {
            alert("Wrong UserName or Password")
        }

    })
    .catch((error) => {
        console.log(error)

    })
}


function adminLogin(adminUserName, adminPassword){

    if(adminUserName == "" || adminPassword == ""){
        alert("Input UserName or Password")

        return
    }

    axios.post(`http://localhost:3000/admin-login`, {
        username: adminUserName,
        password: adminPassword
    })
    .then((response) => {
        console.log(response.data)

        if(Boolean(response.data.success)){
            location.href = "/admin-dashboard/admin-dashboard.html"
        } else {
            alert("Wrong UserName or Password")
        }
    })
    .catch((error) => {
        console.log(error)
    })
}

const signUpHere = document.getElementById('signUpHere')

signUpHere.addEventListener('click', () => {  
    location.href = "/sign-up/sign-up.html"
})

