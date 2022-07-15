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

    testLogin(id, password){
        axios({
            method:"POST",
            url: '/api/login',
            data:{
                id: id,
                pw: password
            }
        }).then((res)=>{
            console.log(res);
        }).catch(error=>{
            console.log(error);
            throw new Error(error);
        });
    }

    test(){
        axios({
            method:"GET",
            url: '/api/login',
        }).then((res)=>{
            console.log(res);
        }).catch(error=>{
            console.log(error);
            throw new Error(error);
        });
    }
}

export default AuthService;