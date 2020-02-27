import { http } from './axios'

async function login (sendData)  {  
  

    // var sendData= {
    //     "username": "demo607",
    //     "password": "1234567",
    //     "location": "tr"
    //   }

    var bodyFormData = new FormData();
    bodyFormData.set('username',sendData.username);
    bodyFormData.set('password',sendData.password);
    bodyFormData.set('location', 'tr');



    return await http.post("/Account/Login", bodyFormData,{
        headers:{
            "Content-Type":'multipart/form-data' 
          }
    })


    // await http.get("/Account/GetUserClm",{
    //     headers:{
    //         "Content-Type":'multipart/form-data',
    //         'Access-Control-Allow-Origin': '*',
    //         "withCredentials":true
    //       }
    // })


}

async function getUser () { 
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
