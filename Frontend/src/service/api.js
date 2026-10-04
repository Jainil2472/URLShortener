
const baseURL = "http://localhost:8000/";
export async function apiRequest(endPoint, options={}){

    const response = await  fetch(`${baseURL}${endPoint}`,
        {
          ...options,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            ...options.headers
          },
        }
      )
    let data =await response.json();

    if (!response.ok) {
        throw new Error(
            data.error || data.message || "something went wrong"
        );
        
    }
    return data;



}