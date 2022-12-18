import './App.css';
import Navbar from './components/Navbar';
import Cardo from './components/Cardo';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import {Route,Switch} from "react-router-dom"

function App() {
  return (
    <>
    <Navbar />
    {/* <Header />
    <Menu />
    <Cardo /> */}
    {/* <Footer /> */}

    <Switch>
      {/* <Route path="/" element={<App />} /> */}
      <Route path='/Menu' component={Menu} />
      <Route path='/Header' component={Header} />
      <Route path='/Cardo' component={Cardo} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
