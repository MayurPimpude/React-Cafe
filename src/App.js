import './App.css';
import Navbar from './components/Navbar';
import Cardo from './components/Cardo';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Sec';
import Like from './components/Like';
import About from './components/About'
import Menu from './components/Menu';
// import {Route,Switch} from "react-router-dom"
import Review from './components/Reserve';

function App() {
  return (
    <div>
    < Navbar/>
    <Header />
    <Section />
    <About />
    <Like />
    <Menu />
    <Cardo />
    <Review />
    <Footer />
    
    {/* <Switch>
      <Route exact path='/' component={Layout} />
      <Route path='/Menu' component={Menu} />
      <Route path='/Header' component={Header} />
      <Route exact path='/Cardo' component={Cardo} />
    </Switch> */}

    
    </div>
  );
}

export default App;
