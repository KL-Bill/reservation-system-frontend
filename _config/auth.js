axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3000"

axios.interceptors.response.use(
    function (response){
        return response
    },
    function (error){
        if(error.response && (error.response.status == 401 || error.response.status == 403)){
            window.location.href = "/login/login.html"
        }
        return Promise.reject(error)
    }

)
