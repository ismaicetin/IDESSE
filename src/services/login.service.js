import { http } from './axios'

async function login (sendData)  {  
  //  return { success : false, errorMsg : "Kullanıcı adı ya da şifreniz hatalıdır." } 
    
    return  {
        success:true,  
    }
    // return http.post("/Account/Login", sendData)
}

async function getUser () {
    //return { success : false, errorMsg : "getUser  hatalıdır." } 
    return {
        success: true, 
        data: {
            UserId: "95dda82d-e4e2-4099-960f-d900b2c1cb61", 
            CardId: 533525, 
            UserName: "semih.uzan", 
            FullName: "AHMET İBRAHİM", 
            EMail: "semih.uzan@aliraif.com.tr",
                Position: ""
        }
    }
    
   // return http.get("/Account/GetUserClm")
}

  
export default {
    login, 
    getUser, 
}; 
