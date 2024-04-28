import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './components/pages/Home';
import Header from './components/pages/Header';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Discover from './components/pages/Discover';

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/discover" element={<Discover/>} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </div>
  );
}

export default App;
