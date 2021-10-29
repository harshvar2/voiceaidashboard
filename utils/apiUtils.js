
import axios from 'axios';
export let verifyCredentials = async (email, password) => {
    let result = ""
    await axios.post('https://reqres.in/api/login', {
        email: email,
        password: password,
    }).then((res) => {
        result = res.data.token
        console.log(result)
        localStorage.setItem('token', result)
    }).catch(err => {
        console.log(err)
    })
    return result;
}