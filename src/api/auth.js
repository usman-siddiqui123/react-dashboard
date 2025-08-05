const BASE_URL = "https://handyman1.pythonanywhere.com";

export const signupUser = async (userData) => {
    const response = await fetch (`${BASE_URL}/user/user_auth/signup/`, {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const data =await response.json();
    return{ ok : response.ok , data};
};

export const loginUser = async (loginData) => {
    const response = await fetch (`${BASE_URL}/user/user_auth/login/`, {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(loginData),
    });
    const data = await response.json(); 
    return{ok : response.ok , data};
};