import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    currentUser!: IUser;

    loginUser(userName: string, password: string): void {
        this.currentUser = {
            id : 1,
            userName: "kamuli3t",
            lastName: "Romodan",
            firstName: "Kaml"        
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }
}