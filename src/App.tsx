import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Form from "./pages/Form";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/update/:id" component={Form}/>
                <Route path="/new" component={Form} />
                <Route path="/" component={Home} />
            </Switch>
            <ToastContainer />
        </Router>
    );
};

export default App;
