
import {instance} from './index'


export default  {
login:async(credential:{email:string,password:string}) =>{
    try {
        const result= await instance.post('public/user/login',credential)
        return result['data'];
    }catch(err){
        console.log(err.response)
        throw err;
    }
},

register:async(data:FormData) =>{
    try {
        const result= await instance.post('public/user/',data)
        return result['data'];
    }catch(err){
        throw err;
    }
}
}


