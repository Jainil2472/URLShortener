import { apiRequest } from "./api";

export function addURL(data) {
    return apiRequest("url/shorten",{
        method: "POST",
        body: JSON.stringify(data)
    });
}

export function listURL() {
    return apiRequest("url/list",{
        method: "GET"
    })
}

export function deleteURL(id) {
    return apiRequest(`url/delete/${id}`,{
        method: "DELETE"
    })
}

export function authanticated() {
    return apiRequest("get",{
        method: "GET"
    });
}