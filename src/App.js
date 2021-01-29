import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/DashBoard/Dashboard";
import ProductsList from "./pages/ProductsList/ProductsList";
import OrdersList from "./pages/OrdersList/OrdersList";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Router>
          <SideBar />
          <Switch>
            <Route path="/productslist">
              <ProductsList />
            </Route>
            <Route path="/orderslist">
              <OrdersList />
            </Route>
            <Route exact path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
