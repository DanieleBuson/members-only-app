import { getAuth } from "firebase/auth";

export const postWithCredentials = async(url, bodyData) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if(!user){
        console.log("Error");
        return [];
    }

    const data = JSON.stringify(bodyData);

    const requestOptions = {
        method: "post",
        body: data,
        headers: {
            AuthToken: await user.getIdToken(),
            "Content-Type": "application/json",
        }
    };
    
    const response = await fetch(url, requestOptions);

    return response;
}