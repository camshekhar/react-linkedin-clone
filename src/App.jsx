import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import JoinNow from "./pages/JoinNow";
import Feed from "./pages/Feed";
import NotFound from './pages/NotFound';

const App = () => {
  
  return (
    
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<JoinNow />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/feed" element={(localStorage.key(0) !== null) ? <Feed/> : <NotFound/>} />

        </Routes>
      </Router>
    </>
  );
};

export default App;
