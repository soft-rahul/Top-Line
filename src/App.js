import { Switch, Route } from "react-router-dom";

/* header component */
import Header from "./components/Header";

/* footer component */
import Footer from "./components/Footer";

/* Main component */
import Main from "./components/Main";

import Course from "./components/Course";
import CourseYear from "./components/CourseYear";
import Syallbus from "./components/Syallbus";
import LearningSection from './components/LearningSection';
import Material from './components/Material';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route  path="/courses" >
          <Course/>
        </Route>
        <Route  path="/courses-year">
          <CourseYear></CourseYear>
        </Route>
        <Route  path="/years" component={CourseYear}></Route>
        <Route  path="/year-overview" component={Syallbus}></Route>
        <Route  path="/learning-section" component={LearningSection}></Route>
        <Route  path="/material-section" component={Material}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
