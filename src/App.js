import { Switch, Route } from "react-router-dom";

/* header component */
import Header from "./components/Header";

/* footer component */
import Footer from "./components/Footer";

/* Main component */
import Main from "./components/Main";
import Course from "./components/Course";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/courses" component={Course}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
