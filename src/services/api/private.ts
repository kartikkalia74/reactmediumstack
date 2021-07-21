
import Userlist from '../../components/chat/userlist';
import {instance} from './index'


export default  {
    SkillList  : async () =>{
        try{
            const result= await instance.get('private/skill/')
            return result['data'];
        }catch(err){
            throw err;
        }
    },

    Userlist : async ({userId}:{userId:string}) =>{
        try{
            const result= await instance.get('private/user?userId='+userId)
            return result['data'];
        }catch(err){
            throw err;
        }
    },
    addArticle : async (data:any) =>{
        try{
            const result= await instance.post('private/article',data);
            return result['data'];
        }catch(err){
            throw err;
        }
    },
    listArticle : async () =>{
        try{
            const result= await instance.get('private/article');
            return result['data'];
        }catch(err){
            throw err;
        }
    },

    sendFollowRequest :async (data:any)=>{
        try{
            const result= await instance.post('private/follow',data);
            return result['data'];
        }catch(err){
            throw err;
        }
    },
    respondToFollowRequest: async (data:any) =>{
        try{
            const result= await instance.patch('private/follow',data);
            return result['data'];
        }catch(err){
            throw err;
        }
    }

}