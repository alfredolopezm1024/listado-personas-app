import { Injectable } from "@angular/core";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { RoutingService } from "../routing.service";

@Injectable()
export class LogginService{
    token : string='';
    dataError:string='';
    user: string='';

    constructor(private rs : RoutingService){}

    login(email:string, password:string){
        // console.log("Login");
        this.user=email;
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            response=>{
                firebase.auth().currentUser?.getIdToken().then(
                    (token: string)=>{
                        this.token=token;
                        this.store({ token: token, user: this.user });
                        this.rs.goToHome();
                    }
                )
            },
            error =>{
                console.log(error);
            }
        );
    }

    private store(content:Object) {
        localStorage.setItem('currentUser', JSON.stringify(content));
    }

    getIdToken(){
        return this.token;
    }
    
    isAutenticado(){
        // debugger;

        // let ls=JSON.parse(localStorage.getItem('currentUser') || '{}');
        return this.token!='';
    }

    validateAutentication(){
        if(this.token==''){
            if(localStorage.getItem('currentUser')==null){
                this.rs.goToLogin();
                return false;
            }else{
                const ls=JSON.parse(localStorage.getItem('currentUser') || '{}');
                this.token  =ls.token;
                this.user   =ls.user;
                return true;
            }
        }else{
            return true;
        }
    }

    logOut(){
        debugger;
        firebase.auth().signOut().then(()=>{
            debugger;
            this.token='';
            localStorage.removeItem('currentUser');
            this.rs.goToLogin();
        }).catch(error=>{
            debugger;
            this.token='';
            localStorage.removeItem('currentUser');
            this.rs.goToLogin();
            // this.rs.goToAuthError(error);
        });
    }

}