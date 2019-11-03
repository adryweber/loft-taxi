import React from "react";
import { Menu } from "./shared/menu";
import { Login } from "./login";
import { SignUp } from "./signup";
import { Map } from "./map";
import { Profile } from "./profile";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "loft-taxi-mui-theme";
import { Provider } from "./shared/auth-context";

import "typeface-roboto";

const Pages = () => {
    return {
        login: setPage => <Login setPage={setPage} />,
        signup: setPage => <SignUp setPage={setPage} />,
        map: () => <Map />,
        profile: () => <Profile />
    };
};

function App() {
    const [page, setPage] = React.useState("login");
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const login = (email, password) => {
        if (email === "test" && password === "123") {
            setIsLoggedIn(true);
            setPage("profile");
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setPage("login");
    };

    if (!isLoggedIn && (page === "map" || page === "profile")) {
        setPage("login");
    }

    return (
        <Provider value={{ isLoggedIn, login, logout }}>
            <ThemeProvider theme={theme}>
                <Menu setPage={setPage} />
                {Pages()[page](setPage)}
            </ThemeProvider>
        </Provider>
    );
}

export default App;
