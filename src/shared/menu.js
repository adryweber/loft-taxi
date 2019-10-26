import React from "react";

const Menu = ({ setPage }) => (
    <div>
        <button onClick={() => setPage("profile")}>Profile</button>
        <button onClick={() => setPage("map")}>Map</button>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("signup")}>SignUp</button>
    </div>
);

export { Menu };
