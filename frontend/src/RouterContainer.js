import { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";

class RouterContainer extends Component {
    state = { token: "" };

    componentDidMount() {
        if (this.state.token === "") {
            let myToken = localStorage.getItem("myToken");
            this.setState({ token: myToken });
            console.log(this.State);
        }
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/auth/login' component={Login} />
                <Route exact path='/auth/signup' component={Signup} />
                {this.state.token ? (
                    <Route exact path='/welcome' component={Welcome} />
                ) : (
                    <Redirect to='/' />
                )}
            </Switch>
        );
    }
}

const HomePage = () => {
    return (
        <div style={{ backgroundColor: "cadetBlue", textAlign: "center" }}>
            <h1 style={{ color: "white" }}>
                Welcome to my signup and login page
            </h1>

            <nav>
                <ul style={{ textAlign: "left" , color: "white", fontWeight: "bold"}}>
                    <li>
                        Are you already a user?? If yes please:{" "}
                        <Link to='/auth/login'>Login</Link>
                    </li>
                    <li>
                        If not please: <Link to='/auth/signup'>Signup</Link>
                    </li>
                </ul>
                <img alt = ""  src='/1.png' style={{ width: 500, height: 500 }} />
            </nav>
        </div>
    );
};

export default RouterContainer;
