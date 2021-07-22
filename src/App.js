import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Header from "./components/Header";

function App() {
  return (
    // <div></div>
    <HashRouter>
      <Header />

      <Switch>
        {/* <Route path="/.netlify/functions/getPosts" /> */}
        <Route path="/upload">
          <Upload />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
