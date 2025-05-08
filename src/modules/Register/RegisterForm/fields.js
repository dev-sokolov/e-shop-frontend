const fields = {
    username: {
        label: "Username",
        type: "text",
        placeholder: "Username",
        name: "username",
        rules: {
            required: "Username must be exist"
        }
    },
    email: {
        label: "Email",
        type: "email",
        placeholder: "Email",
        name: "email",
        rules: {
            required: "Email must be exist"
        }
    },
    password: {
        label: "Password",
        type: "password",
        placeholder: "Password min 6 symbols",
        name: "password",
        rules: {
            required: "password must be exist",
            minLength: {
                value: 6,
                message: "Password must contain al least 6 symbols"
            }
        }
    },
};

export default fields;