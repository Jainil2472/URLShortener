import { apiRequest } from "./api";


export function login(data){
    return apiRequest("user/login",{
        method: "POST",
        body: JSON.stringify(data)
    });
}
export function signup(data){
    return apiRequest("user/signup",{
        method: "POST",
        body: JSON.stringify(data)
    });
}