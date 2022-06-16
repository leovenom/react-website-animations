import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Contact from "./pages/contact";
import About from "./pages/about";
import Gallery from "./pages/Gallery";
import Tour from "./pages/Tour";
import Shop from "./pages/shop";
import video from "./pages/video";
import Book from "./pages/book";
import News from "./pages/news";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/Tour" component={Tour} />
        <Route path="/shop" component={Shop} />
        <Route path="/news" component={News} />
        <Route path="/book" component={Book} />
        <Route path="/video" component={video} />
      </Switch>
    </Router>
  );
}

export default App;
