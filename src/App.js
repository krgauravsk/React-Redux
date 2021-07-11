import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from "../src/components/Header";
import ProductDetails from "../src/components/ProductDetails";
import ProductListing from "../src/components/ProductListing";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>

          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route> 404 Not Found!</Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
