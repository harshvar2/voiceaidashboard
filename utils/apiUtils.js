
import axios from 'axios';
export let verifyCredentials = async (email, password) => {
    let token ="iojqewjijqwejoij"
    axios.post('https://reqres.in/api/login', {
        email: email,
        password: password,
    })
        .then((res) => {
            localStorage.setItem("token",token)
        }).catch(err => {
        })

    return token
}