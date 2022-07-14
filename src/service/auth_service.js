import axios from "axios";

class AuthService{
    login(email, password, onLogin){
        axios({
            method:"POST",
            url: 'https://reqres.in/api/login',
            data:{
                "email": email,
                "password": password
            }
        }).then((res)=>{
            onLogin();
        }).catch(error=>{
            console.log(error);
            throw new Error(error);
        });
    }
}

export default AuthService;