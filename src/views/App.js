import './App.scss';
import Login from './component/Login';
import './component/Login';
import Navbar from './Nav/CNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Footer from './footer/Footer';
import Products from '../views/section/Products'
import Details from '../views/section/Details'
import Cart from '../views/section/Cart'
import Payment from '../views/section/Payment';
import { DataProvider } from './component/Context';

function App() {
  return (
    <DataProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/contact-us' component={Contact} />
          <Route path='/signin' component={Login} />
          <Route path="/product" component={Products} exact />
          <Route path="/product/:id" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/payment" component={Payment} />
        </Switch>
        <Footer />
      </Router>
    </DataProvider>

  );
}

export default App;
