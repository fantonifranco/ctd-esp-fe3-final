import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ContextProvider } from './Components/utils/global.context';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Home from './Routes/Home';
import { useGlobal } from './Components/utils/global.context';

function App() {

  const { state } = useGlobal();

  return (

    <div className = {state.theme}>
      <ContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/dentist/:id" component={Detail} />
            <Route path="/favs" component={Favs} />
          </Switch>
          <Footer />
        </Router>
      </ContextProvider>
    </div>

  );
}

export default App;
