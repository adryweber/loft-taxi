import React, { Component } from "react";
import { Menu } from "./shared/menu";
import { Login } from "./login";
import { SignUp } from "./signup";
import { Map } from "./map";
import { Profile } from "./profile";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "loft-taxi-mui-theme";
import { Provider, AuthContext } from "./shared/auth-context";
import { Route, Switch, Redirect } from "react-router-dom";

import "typeface-roboto";

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const loginPath = "/login";

    const login = (email, password) => {
        if (email === "test" && password === "123") {
            setIsLoggedIn(true);
            return true;
        }
        return false;
    };

    const Logout = () => {
        setIsLoggedIn(false);
        return <Redirect to={loginPath} />;
    };

    const P404 = () => (
        <div style={{ marginTop: 100, marginLeft: 100 }}>
            На нашем сайте нет такой страницы.
        </div>
    );

    return (
        <Provider value={{ isLoggedIn, login, loginPath }}>
            <ThemeProvider theme={theme}>
                <Menu />
                <Switch>
                    <PrivateRoute path="/" component={Map} exact />
                    <PrivateRoute path="/map" component={Map} />
                    <PrivateRoute path="/profile" component={Profile} />

                    <Route path="/login" component={withAuth(Login)} />
                    <Route path="/signup" component={withAuth(SignUp)} />
                    <Route path="/logout" component={Logout} />
                    <Route component={P404} />
                </Switch>
            </ThemeProvider>
        </Provider>
    );
}

// Обертка-ХОК для прокидывания контекста авторизации
function withAuth(WrappedComponent) {
    return class AuthHOC extends Component {
        render() {
            const { ...rest } = this.props;
            return (
                <AuthContext>
                    {contextProps => (
                        <WrappedComponent {...contextProps} {...rest} />
                    )}
                </AuthContext>
            );
        }
    };
}

// Обертка для рендера приватных компонент
let PrivateRoute = ({
    component: RouteComponent,
    isLoggedIn,
    loginPath,
    ...rest
}) => (
    <Route
        {...rest}
        render={routeProps =>
            isLoggedIn ? (
                <RouteComponent {...routeProps} />
            ) : (
                <Redirect to={loginPath} />
            )
        }
    />
);

PrivateRoute = withAuth(PrivateRoute);

export default App;
