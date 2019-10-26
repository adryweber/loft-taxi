import React from "react";
import { Menu } from "./shared/menu";
import { Login } from "./login";
import { SignUp } from "./signup";
import { Map } from "./map";
import { Profile } from "./profile";

const Pages = {
    login: setPage => <Login setPage={setPage} />,
    signup: setPage => <SignUp setPage={setPage} />,
    map: () => <Map />,
    profile: () => <Profile />
};

function App() {
    const [page, setPage] = React.useState("login");
    return (
        <>
            <Menu setPage={setPage} />
            {Pages[page](setPage)}
        </>
    );
}

export default App;
