import axios from "axios";
function isAuthenticated(){
    const params = { withCredentials: true }
    axios.get('http://127.0.0.1:8000/dj-rest-auth/user/',params)
    .then((res) => {
        return true
    })
    .catch((res) => {
        return false
    })
}
export default isAuthenticated