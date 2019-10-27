import React from "react";

export const SignUpForm = ({ setPage }) => {
    const onSubmit = e => {
        e.preventDefault();
        setPage("profile");
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    type="email"
                    name="email"
                    label="email"
                    placeholder="Email"
                />
            </div>
            <div>
                <input
                    type="text"
                    name="firstname"
                    label="firstname"
                    placeholder="Firstname"
                />
            </div>
            <div>
                <input
                    type="text"
                    name="lastname"
                    label="lastname"
                    placeholder="Lastname"
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    label="password"
                    placeholder="Password"
                />
            </div>
            <button>Login</button>
        </form>
    );
};
