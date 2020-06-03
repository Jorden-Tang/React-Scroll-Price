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
        localStorage.clear();
        this.authenticated = false;
    }

    adminLogout(cb){
        localStorage.clear();
        this.adminAuth = false;
    }

    isAuth(){
        let user_id = localStorage.getItem("user_id")
        // axios.post("http://localhost:8000/api/checkUserLogin", {user_id: user_id}, {withCredentials: true})
        // .then((result)=>{this.authenticated = result.data.isAuth})
        // .catch(console.log)
        // console.log("use is " + this.authenticated)

        if(user_id){
            this.authenticated = true;
        }
        else{
            this.authenticated = false;
        }  
        return this.authenticated;
    }
     isAdminAuth (){
        // axios.post("http://localhost:8000/api/checkAdminLogin",{}, {withCredentials: true})
        // .then((result)=>{this.adminLogin = result.data.isAdmin})
        // .catch(console.log)
        // console.log("admin is " + this.adminAuth)
        let admin_id = localStorage.getItem("admin_id")
        if(admin_id){
            console.log(admin_id);
            return true;
        }
        else{
            return false;
        }  
    }
    checkExpireToken(){
        if(localStorage.getItem("login_time") < Date.now() - 5 * 24 * 60 * 60 * 1000){
            this.logout();
        }
    }
}
export default new Auth();