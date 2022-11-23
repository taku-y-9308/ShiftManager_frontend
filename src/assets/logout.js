import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

function logout() {
    
    console.log(router)
    const params = { withCredentials: true }
    axios.post('http://127.0.0.1:8000/dj-rest-auth/logout/',{},params)
    .then((res) => {
        this.$router.push('/login')
        console.log(res)

    })
    .catch((res) => {
        console.log(res)
    })
}
export default logout