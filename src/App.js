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
import Listings from './containers/Listings';

function App() {
  return (
<BrowserRouter>
    <NavBar />
        <Routes>
          <Route exact path='/' element={Conversion()} />
          <Route exact path='/notfound' element={NotFound()} />
          <Route exact path='/testpage' element={TestPage()} />
          <Route exact path='/listings' element={Listings()} />

        </Routes>
</BrowserRouter>
  );
}


export default App;
