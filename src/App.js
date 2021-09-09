/* header component */
import Header from "./Header";

/* footer component */
import Footer from "./Footer";

/* Main component */
import Main from './Main';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
