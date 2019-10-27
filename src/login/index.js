import React from "react";
import { LoginForm } from "./loginForm";

export const Login = ({ setPage }) => {
    return (
        <>
            <h1>Авторизация</h1>
            <LoginForm setPage={setPage} />
        </>
    );
};
