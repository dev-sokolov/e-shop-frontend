import backendInstance from "./backendInstance";

import requestDecorator from "./requestDecorator";

export const registerUserApi = requestDecorator(async payload => {
    const {data} = await backendInstance.post("/auth/register", payload);
    return data;
})