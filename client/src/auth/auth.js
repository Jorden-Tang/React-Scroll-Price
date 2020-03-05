import axios from 'axios'
class Auth{
    constructor(){
        this.authenticated = false;
        this.adminAuth = false;
    }

    login(){
        this.authenticated = true;
    }
    adminLogin(state){
        this.adminAuth = true;
    }

    logout(){
        this.authenticated = false;
    }

    adminLogout(cb){
        this.adminAuth = false;
    }

   isAuth(){
        axios.post("http://localhost:8000/api/checkUserLogin", {}, {withCredentials: true})
        .then((result)=>{this.authenticated = result.data.isAuth})
        .catch(console.log)
        console.log("use is " + this.authenticated)
        return this.authenticated;
    }

    isAdminAuth(){
        axios.post("http://localhost:8000/api/checkAdminLogin",{}, {withCredentials: true})
        .then((result)=>{this.adminLogin = result.data.isAdmin})
        .catch(console.log)
        console.log("admin is " + this.adminAuth)
        return this.adminAuth;
    }
}
export default new Auth();