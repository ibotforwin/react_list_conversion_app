/*         
import UserProfile from "./containers/UserProfile"
<Route exact path='/userprofile' element={UserProfile()} />
 */

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./containers/NotFound"
import Conversion from "./containers/Conversion"
import NavBar from "./containers/NavBar"
import TestPage from "./containers/TestPage"

import './sass/main.scss';

function App() {
  return (
<BrowserRouter>
    <NavBar />
        <Routes>
          <Route exact path='/' element={Conversion()} />
          <Route exact path='/notfound' element={NotFound()} />
          <Route exact path='/testpage' element={TestPage()} />

        </Routes>
</BrowserRouter>
  );
}


export default App;
