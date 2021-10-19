import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home/Home";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import NotFound from "./components/Shared/NotFound/NotFound";
import ServiceDetails from "./components/ServicesPage/Service/ServiceDetails";
import Services from "./components/HomePage/Services/Services";
import Contract from "./components/Contracr/Contract";
import Login from "./components/Login/Login";
import AuthProvider from "./components/context/AuthProvider";
import Register from "./components/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route path="/contract">
              <Contract></Contract>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
