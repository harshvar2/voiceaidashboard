
import axios from 'axios';
export let verifyCredentials = async (email, password) => {
    let response 
    axios.post('https://reqres.in/api/login', {
        email: email,
        password: password,
    })
        .then((res) => {
            response = res
            localStorage.setItem("token","iojqewjijqwejoij")
        }).catch(err => {
        })

    return response
}