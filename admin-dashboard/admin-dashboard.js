const logOutBtn = document.getElementById("logOutBtn")
const p = document.getElementById("h2")


logOutBtn.addEventListener('click', () => {
     if (confirm("Are you sure you want to log out?")) {
         location.href = "/login/login.html"
     }
   
})

axios.get(`http://localhost:3000/event/get-all-events`)
.then((response) => {
    console.log(response.data)
    let events = response.data

    for(let i = 0; i < events.length; i++){
        p.innerHTML += `
        <p>
            id: ${events[i].id}
        </p>
        <p>
            clientId: ${events[i].clientId}
        </p>
        <p>
            date: ${events[i].date}
        </p>
        <p>
            time: ${events[i].time}
        </p>
        <p>
            type: ${events[i].type}
        </p>
        <p>
            venue: ${events[i].venue}
        </p>
        ` 
    }


})
.catch((error) => {
    console.log(error)
})