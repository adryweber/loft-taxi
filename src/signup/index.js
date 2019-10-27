import React from "react";
import { SignUpForm } from "./signUpForm";

export const SignUp = ({ setPage }) => {
    return (
        <>
            <h1>Регистрация</h1>
            <SignUpForm setPage={setPage} />
        </>
    );
};
