import api from "../Config/axiosinstance"

export function fetchUserService(){

    // taking and handling inputs from dispatch call
    return new Promise(async(resolve,reject)=>{
        try{
            let response = await api.get(`/posts`);
            if(response && response.status){
                resolve(response.data)
            }else{
                reject(response.data)
            }
        }catch(err){
            reject(err)
        }
    })
}