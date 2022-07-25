import axios from "axios";

class AuthService{
    // email : eve.holt@reqres.in
    // password : cityslicka
    // 로 입력하면 로그인되고 main페이지로 넘어감
    // authService.login(idRef.current.value, passwordRef.current.value, () => {navigate("/main")});
    // login(email, password, onLogin){
    //     axios({
    //         method:"POST",
    //         url: 'https://reqres.in/api/login',
    //         data:{
    //             "email": email,
    //             "password": password
    //         }
    //     }).then((res)=>{
    //         onLogin();
    //     }).catch(error=>{
    //         console.log(error);
    //         throw new Error(error);
    //     });
    // }

    login(id, password, onLogin){
        axios({
            method:"POST",
            url: `${process.env.REACT_APP_POSTMAN_URL}/api/login`,
            data:{
                id: id,
                pw: password
            }
        }).then((res)=>{
            console.log(res);
            if(res.data.result === "success"){
                onLogin();
            }
            else{
                throw new Error("아이디/비밀번호를 다시 확인해주세요");
            }
        }).catch(error=>{
            console.log(error);
            throw new Error(error);
        });
        // const form = new FormData();
        // form.append('id', id);
        // form.append('pw', password);

        // axios.post(`/api/login`, form)
        // .then( response => {
        //     console.log(response.data);
        // }).catch( error => {
        //     console.log('failed', error)
        // })
    }
}

export default AuthService;