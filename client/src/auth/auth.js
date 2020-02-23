import axios from 'axios'
class Auth{
    constructor(){
        this.authenticated = false;
        this.adminAuth = false;
    }

    login(){
        this.authenticated = true;
    }

    adminLogin(){
        this.adminAuth = true;
        // const error = [];
        // axios.post("http://localhost:8000/api/login", userData, {withCredentials: true})
        //     .then((result)=>{
        //         if('err' in result.data){
        //             return result.data.err;
        //         }
        //         if('isAdmin' in result.data){
        //             if(result.data.isAdmin){
        //                 this.adminAuth = true;
        //                 cb();
        //             }
        //         }
        //     })
        //     .catch(console.log)
    }

    logout(){
        this.authenticated = false;
    }

    adminLogout(cb){
        this.adminAuth = false;
    }

    isAuth(){
        return (this.authenticated)
    }

    isAdminAuth(){
        return (this.adminAuth);
    }
}
export default new Auth();