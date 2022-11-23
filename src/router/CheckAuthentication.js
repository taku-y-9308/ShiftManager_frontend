import axios from "axios";

export async function CheckAuthenticated(){
    let status
    const params = { withCredentials: true }
    await axios.get('http://127.0.0.1:8000/dj-rest-auth/user/',params)
    .then((res)=>{
      status = 'OK'
    })
    .catch((res)=>{
      status = 'NG'
    })
    console.log('end')
    if(status == 'OK'){
      return true
    }else{
      return false
    }
  }