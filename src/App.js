import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import score from "./components/score";
import "bootstrap/dist/css/bootstrap.min.css"
import schedule from "./components/schedule"
import upcoming from "./components/upcoming";
import signup from "./components/register"
import login from "./components/login"
import scorecard from "./components/scorecard";
import Nav from "./components/nav"
import home from "./components/home"
function App() {
  return (
    <div>
  <Router>
  

    <Nav/>
      <Route path="/" exact component={home}/>
      <Route path="/score" exact component={score} />
      <Route path="/upcoming" exact component={upcoming}/>
      <Route path="/schedule" exact component={schedule}/>
      <Route path="/signup" exact component={signup}/>
      <Route path="/signin" exact component={login}/>
      <Route path="/scorecard/:id" exact component={scorecard}></Route>
    </Router>
    </div>

  );
}

export default App;
