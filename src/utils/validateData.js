export const checkValidData = (email , password) => {
    let arr = []
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!emailRegex) arr.push("Email is not Valid");
    else arr.push(null);
    if (!passwordRegex) arr.push("Password is not valid");
    else arr.push(null);

    return arr;
};
