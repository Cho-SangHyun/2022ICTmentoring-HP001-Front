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

    testLogin(id, password, onLogin){
        const form = new FormData();
        form.append('id', id);
        form.append('pw', password);

        axios.post(`/api/login`, form)
        .then( response => {
            console.log(response.data);
        }).catch( error => {
            console.log('failed', error)
        })

        // axios({
        //     method:"POST",
        //     url: '/api/login',
        //     form
        // }).then((res)=>{
        //     console.log(res);
        // }).catch(error=>{
        //     console.log(error);
        //     throw new Error(error);
        // });
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