import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills"
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import {Switch} from 'react-router'
import {Route} from "react-router-dom"

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Switch>
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Route path="/" exact>
      <Intro />
      <About />
      <Skills/>
      <ProductList />
      <Contact />
      </Route>

      <Route path="/intro" >
      <About />
      </Route>
      
      <Route path="/skills" >
      <Skills />
      </Route>

      <Route path="/about" >
      <About />
      </Route>

      <Route path="/project">
      <ProductList />
      </Route>

      <Route path="/contact" >
      <Contact />
      </Route>

    </div>
    </Switch>
  );
};

export default App;
