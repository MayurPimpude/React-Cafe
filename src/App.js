import './App.css';
import Navbar from './components/Navbar';
import Cardo from './components/Cardo';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/layout';
import Menu from './components/Menu';
import {Route,Switch} from "react-router-dom"

function App() {
  return (
    <>
    < Navbar/>
    
    <Switch>
      <Route exact path='/' component={Layout} />
      <Route path='/Menu' component={Menu} />
      <Route path='/Header' component={Header} />
      <Route exact path='/Cardo' component={Cardo} />
    </Switch>
    
    <Footer />
    </>
  );
}

export default App;
