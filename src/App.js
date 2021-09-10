/* header component */
import Header from "./Header";

/* footer component */
import Footer from "./Footer";

/* Main component */
import Main from "./Main";

// page 2
import PageTwo from "./PageTwo";

// subject wise import
import BCA from "./components/subjects/BCA";
import BA from "./components/subjects/BA";
import BCOM from "./components/subjects/BCOM";
import BScBio from "./components/subjects/BScBio";
import BScMath from "./components/subjects/BScMath";
import BBA from "./components/subjects/BBA";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/course-list" component={PageTwo} ></Route>
        <Route path="/BCA" component={BCA} ></Route>
        <Route path="/BA" component={BA} ></Route>
        <Route path="/BCOM" component={BCOM} ></Route>
        <Route path="/BSc-Bio" component={BScBio} ></Route>
        <Route path="/BSc-Math" component={BScMath} ></Route>
        <Route path="/BBA" component={BBA} ></Route>
        
        
      </Switch>
      <Footer />
    </>
  );
}

export default App;
